import React, {useState} from 'react'
import Affairs from './Affairs'

// types
export type AffairPriorityType = "high"| "middle"| "low"

export type AffairType = {
    _id: number
    name: string
    priority: string
}

export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: AffairType[] = [ // need to fix any
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 6, name: 'football', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
    {_id: 7, name: 'fighting', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: string): Array<AffairType> => { // need to fix any
    if (filter === 'all') {
        return affairs
    }
    let rend =  affairs
    if (filter === 'high'){
        rend = affairs.filter(f => f.priority === 'high')
    }
    if (filter === 'low'){
        rend = affairs.filter(f => f.priority === 'low')
    }
    if (filter === 'middle'){
        rend = affairs.filter(f => f.priority === 'middle')
    }
    return rend
}
export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType>=> { // need to fix any
    return affairs.filter(del => del._id !== _id)
}

function HW2() {
    const [affairs, setAffairs] = useState <Array<AffairType>>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    console.log(affairs)
    console.log(filter)

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)) // need to fix any

    return (
        <div>
            <hr/>
            homeworks 2

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter = {setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}


export default HW2
