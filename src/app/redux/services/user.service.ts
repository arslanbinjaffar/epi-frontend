'use client'
import { useCallback } from "react"
import {CounterActions,CounterState} from '@/app/redux/slicers/user.slice'
import { useAppDispatch, useAppSelector } from "../hooks/hook"
export type UserServiceOperators = {
    counter:number;
    increment: () => void
    decrement: () => void

}
export const useUserServices =(): Readonly<UserServiceOperators> => {
    const dispatch = useAppDispatch()
    return {
        counter: useAppSelector(CounterState),
        increment: useCallback(   
            () => {
                dispatch(CounterActions.increment())
            },
            [dispatch]),
        decrement: useCallback(   
            () => {
                dispatch(CounterActions.decrement())
            },
            [dispatch]),

    }
}


export default useUserServices