import {useState, ChangeEvent } from 'react';

export const useInput = (initialValue: any) => {
    const [value, setValue] = useState(initialValue)

    const reset = () => {
        setValue(initialValue)
    }

    const bind = {
        value: value,
        onChange: (e: ChangeEvent<HTMLInputElement>) => {
            e.preventDefault()
            setValue(e.target.value)
        }
    }

    return {value, bind, reset}
}