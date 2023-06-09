"use client"

import PageTitle from '@/components/PageTitle'
import React, { useCallback, useEffect } from 'react'
import Image from 'next/image'

import { Switch } from '@/components/ui/switch'
import { ALL_PLANS, PlanPeriod, PlanType } from '@/lib/data'
import { usePlan } from '@/stores/plan'
import { useInfos } from '@/stores/infos'
import { useRouter } from 'next/navigation'

export default function PlanPage() {
    // Verify if page accessible
    const router = useRouter()
    const infosCompleted = useInfos(state=>state.completed)
    let goBack = false
    if(!infosCompleted) goBack = true
    
    useEffect(()=>{
        if(goBack) router.push('/')
    },[router,goBack])

    // Getting Plan state from the store
    const {plan,period,setPlan,setPeriod} = usePlan(state => ({
        plan: state.plan,
        period: state.period,
        setPlan: state.setPlan,
        setPeriod: state.setPeriod,
    }))

    // Handle Functions
    const handleChangePlan = useCallback((newPlan:PlanType) => () => {
        setPlan(newPlan)
    },[setPlan])

    const handleChangePeriod = useCallback( () => {
        let newPeriod:PlanPeriod =( period === 'monthly') ? 'yearly' :'monthly'
        setPeriod(newPeriod)
    },[setPeriod,period])

    if(goBack) return null
    return (
        <>
            <PageTitle
                title="Select your plan"
                sub= "You have the option of monthly and yearly billing"
            />
            <div className="grid gap-4 sm:grid-cols-3 sm:h-40">
                {
                    ALL_PLANS.map(({ title, icon, price },index) => (
                        <div onClick={handleChangePlan(title)} key={title} className={`special-card p-4 flex items-center gap-4 ${title === plan && 'active'}
                            sm:flex-col sm:justify-between sm:items-start`}>
                            <Image src={icon} alt={title} className="h-10 w-10 rounded"/>
                            <div>
                                <h5 className="text-primary">{title}</h5>
                                <span className="block text-muted-dark text-sm">${price[period]}/{period==='monthly'?'mo':'yr'}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
            <label className={`w-full flex items-center justify-center bg-alabaster rounded-md text-muted-dark text-center space-x-6 mt-6 p-4 group ${period}`}>
                <span className={`group-[.monthly]:text-primary inline-block`} >Monthly</span>
                <Switch defaultChecked={period==='yearly'} onClick={handleChangePeriod} />
                <span className={`group-[.yearly]:text-primary inline-block`} >Yearly</span>
            </label>
        </>
    )
}
