'use client'

import { create } from "zustand";


// types
type FieldType = "name"|"email"|"phone"
interface InfosState{
    name: string,
    email: string,
    phone: string
}

interface InfosStore{
    infos: InfosState,
    completed: boolean,
    setInfos: (field:FieldType,value:string) => void
}

// Functions
const validateInfos = (infos:InfosState) => {
    if(infos.name.length === 0 || infos.email.length === 0 || infos.phone.length === 0) return false
    return true
}


export const useInfos = create<InfosStore>((set,get)=>({
    infos: {
        name: "",
        email: "",
        phone: ""
    },
    completed: false,
    setInfos: (field,value) => set(state => {
        let newInfos = {
            ...state.infos,
            [field]:value
        }
        return {
            ...state,
            completed: validateInfos(newInfos),
            infos:newInfos
        }
    }),
}))