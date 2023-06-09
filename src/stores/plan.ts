'use client'

import { PlanType, PlanPeriod } from "@/lib/data";
import { create } from "zustand";

interface PlanStore {
    plan: PlanType|null;
    period: PlanPeriod,
    setPlan: (plan: PlanType) => void;
    setPeriod: (period: PlanPeriod) => void;
}

export const usePlan = create<PlanStore>((set) => ({
    plan: null,
    period:'monthly',
    setPlan: (plan) => set(state => ({...state, plan})),
    setPeriod: (period) => set(state => ({...state, period})),
}))