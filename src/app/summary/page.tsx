"use client"

import PageTitle from '@/components/PageTitle'
import { getAddOnById, getPlanByTitle } from '@/lib/data';
import { useAddOns } from '@/stores/addOns';
import { usePlan } from '@/stores/plan'
import Link from 'next/link';
import React, { useMemo } from 'react'
import { shallow } from 'zustand/shallow';

export default function SummaryPage() {
    // Fetch store data
    const { plan, period } = usePlan(state => ({
        plan: state.plan,
        period: state.period
    }),shallow)
    const planData = getPlanByTitle(plan)
    const addOns = useAddOns(state => state.addOns,shallow)

    const total = useMemo(()=>{
        let total = 0
        addOns.forEach(addOnId => {
            let add = getAddOnById(addOnId)
            total += add? add.price[period] : 0
        })
        total += planData? planData.price[period] : 0
        return total
    },[])
  return (
    <>
        <PageTitle
            title="Finishing up"
            sub="Double-check everything looks OK before confirming."
        />
        <div className="rounded-lg bg-alabaster p-4 space-y-4">
            <div className="flex items-center justify-between text-primary">
                <div>
                    <span className="block capitalize">{planData?.title} ({period})</span>
                    <Link href="/plan" className="text-sm underline transition cursor-pointer text-muted-dark hover:text-confirm">Change</Link>
                </div>
                <div className='font-semibold' >
                    ${planData?.price[period]}/{period==="monthly"?'mo':'yr'}
                </div>
            </div>
            { addOns.length > 0 && <hr className="bg-muted" /> }
            {
                addOns.map(id => {
                    const addOn = getAddOnById(id)
                    return (
                        <div key={id} className="flex justify-between items-center text-sm">
                            <span className="block text-muted-dark">{addOn?.name}</span>
                            <span className="block text-primary">+${addOn?.price[period]}/{period==='monthly'?'mo':'yr'}</span>
                        </div>
                    )
                })
            }
            
        </div>
        <div className="mt-6 px-4 flex justify-between items-center">
            <div className='text-muted-dark' >Total (per {period==='monthly'?'month':'year'})</div>
            <div className='text-lg font-semibold text-confirm' >+${total}/{period==='monthly'?'mo':'yr'}</div>
        </div>
    </>
  )
}
