import arcadeIcon from "@/assets/images/icon-arcade.svg"
import advancedIcon from "@/assets/images/icon-advanced.svg"
import proIcon from "@/assets/images/icon-pro.svg"


/**
 * PLANS
 */
// Types
export type PlanType = "Arcade"|"Advanced"|"Pro"

export type PlanPeriod = "monthly"|"yearly"

interface PlanDataTypes  {
    title: PlanType;
    icon: any;
    price: {
        monthly: number;
        yearly: number;
    };
}

// Data
export const ALL_PLANS: PlanDataTypes[] = [
    {
        title: 'Arcade',
        icon: arcadeIcon,
        price:{
            monthly: 9,
            yearly: 90,
        }
    },
    {
        title: 'Advanced',
        icon: advancedIcon,
        price:{
            monthly: 12,
            yearly: 120,
        }
    },
    {
        title: 'Pro',
        icon: proIcon,
        price:{
            monthly: 15,
            yearly: 150,
        }
    },
]

// Function
export const getPlanByTitle = (title: PlanType|null) => {
    return ALL_PLANS.find(plan => plan.title === title)
}


/**
 * Add Ons
 */
// Types
interface AddOnsType {
    id: number;
    name: string;
    description: string;
    price: {
        monthly: number;
        yearly: number;
    };
}

// Data
export const ALL_ADD_ONS: AddOnsType[] = [
    {
        id: 1,
        name: 'Online Service',
        description: 'Acess to multiplayer games',
        price: {
            monthly: 1,
            yearly: 10,
        },
    },
    {
        id: 2,
        name: 'Larger Storage',
        description: 'Extra 1TB of cloud save',
        price: {
            monthly: 2,
            yearly: 20,
        },
    },
    {
        id: 3,
        name: 'Customizable profile',
        description: 'Custom theme on your profile',
        price: {
            monthly: 2,
            yearly: 20,
        },
    },
]

// Function
export const getAddOnById = (id: number) => {
    return ALL_ADD_ONS.find(addOn => addOn.id === id)
}