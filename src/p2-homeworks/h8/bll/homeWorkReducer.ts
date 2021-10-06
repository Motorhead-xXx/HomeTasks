import {UserType} from "../HW8";

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sortUp': {
            return [...state.sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0)]
        }
        case "sortDown": {
            return [...state.sort((a, b) => a.name > b.name ? -1 : a.name < b.name ? 1 : 0)]
        }
        case 'ageCheck': {
            return state.filter(m => m.age > 18)
        }
        default:
            return state
    }
}

export type ActionType = sortUpType | sortDownType | ageSortType
export type  sortUpType = ReturnType<typeof sortUpAC>

export const sortUpAC = () => {
    return {
        type: 'sortUp',
    } as const
}

export type  sortDownType = ReturnType<typeof sortDownAC>
export const sortDownAC = () => {
    return {
        type: "sortDown"
    } as const
}

export type  ageSortType = ReturnType<typeof ageSortAC>
export const ageSortAC = () => {
    return {
        type: 'ageCheck'
    } as const
}