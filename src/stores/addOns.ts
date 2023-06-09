'use client'
import { create } from 'zustand'


interface AddOnsStore {
    addOns: number[],
    toggleAddOn: (id:number)=>void
}

export const useAddOns = create<AddOnsStore>((set,get) => ({
    addOns: [],
    toggleAddOn: (id)=>{
        let previousArray = get().addOns
        let newArray = previousArray.filter(add => add!==id)
        let toAdd = previousArray.length===newArray.length
            ? [...newArray,id] //same length mean no id has been removed so need to add
            : newArray // different length mean id removed
        set({addOns:toAdd})
    }
}))