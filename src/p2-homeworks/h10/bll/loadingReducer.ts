const initState = {
    isLoading: false
}

type initStateType = typeof initState
export const loadingReducer = (state:initStateType = initState, action: loadingType): initStateType => { // fix any
    switch (action.type) {
        case 'LOADING': {
            return {...state, isLoading: action.loading}
        }
        default: return state
    }
}



type loadingType = ReturnType<typeof loadingAC>
export const loadingAC = (loading:boolean) => ({type: "LOADING",loading}as const)
