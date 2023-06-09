"use client"

import PageTitle from '@/components/PageTitle'
import { Checkbox } from '@/components/ui/checkbox';
import { ALL_ADD_ONS } from '@/lib/data';
import { useAddOns } from '@/stores/addOns';
import { usePlan } from '@/stores/plan';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { shallow } from "zustand/shallow"




export default function AddOnsPage() {
    // Check if Plan
    const {plan,period} = usePlan(state=>({
        plan: state.plan,
        period: state.period,
    }),shallow)
    const {push} = useRouter()
    let goBack = false
    if(plan === null){
        goBack = true
    }
    
    useEffect(()=>{
        if(goBack) push('/')
    },[push,goBack])

    // Get AddOns Store
    const {addOns,toggleAddOn} = useAddOns(state=>({
        addOns:state.addOns,
        toggleAddOn:state.toggleAddOn,
    }),shallow)

    if(addOns === null || goBack){
        return null
    }
  return (
    <>
        <PageTitle
            title="Pick add-ons"
            sub="Add-ons help enhance your gaming experience."
        />
        <div className="space-y-3">
            {
                ALL_ADD_ONS.map(({ id, name, description, price }) => (
                    <div onClick={()=>toggleAddOn(id)} key={id} className={`special-card flex items-center rounded-md border-muted p-3 gap-3 ${addOns.includes(id) && 'active'}`}>
                        <Checkbox checked={addOns.includes(id)}  />
                        <div className="grow">
                            <div className="text-primary">{name}</div>
                            <div className="text-sm text-muted-dark">{description}</div>
                        </div>
                        <div className='text-confirm text-sm' >
                            +${price[period]}/{period==='monthly'?'mo':'yr'}
                        </div>
                    </div>
                ))
            }
        </div>
    </>
  )
}
