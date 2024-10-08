import React, { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setinputValue] = useState('')

    const onInputChange = (e) => {
        setinputValue(e.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;

        setinputValue('')
        onNewCategory( inputValue.trim() );
    }

    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input 
                type="text" 
                placeholder='Buscar gifs' 
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}
