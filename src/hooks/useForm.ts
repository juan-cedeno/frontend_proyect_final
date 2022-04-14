import { ChangeEvent, useState } from 'react';

export const useForm = <T extends Object>(initialState: T) => {
    
    const [form, setForm] = useState(initialState)


    const handlenChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

   const clearForm = () => {
       setForm(initialState)
   }

    return {
        form,
        handlenChange,
        clearForm,
        setForm
    }

}
