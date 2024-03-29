import { useState } from "react";
import { createLedgerItem } from "../../misc/apiCalls";
import { findCategoryID } from "../../misc/miscFunctions";
import Input from "../miscComponents/input/input";

export default function NewLedgerItem ({ categories, setUpdateNeeded }) {
    const [ fields, setFields ] = useState({
        date: '',
        category: '',
        amount: ''
    })
    const [ categoryChoice, setCategoryChoice ] = useState('Category')

    function handleChange (event) {
        let { name, value } = event.target;

        if(name === 'category') {
            setCategoryChoice(value);
            const id = findCategoryID(value, categories)
            setFields({ ...fields, 'category': id })
        } else {
        setFields({ ...fields, [name]: value })
        }
    }
    
    function handleSubmit () {
        createLedgerItem(fields).then(setUpdateNeeded(true));
        setCategoryChoice('Category');
        setFields({
            date: '',
            category: '',
            amount: ''
        });
    }

    return (
        <section className='new-ledger-item'>
            <Input
                className='new-date'
                type='date'
                name='date'
                value={ fields.date }
                fields={ fields }
                setFields={ setFields } />

            <select 
                name='category' 
                value={ categoryChoice } 
                onChange={ handleChange }>
                
                <option value='Category'>Category</option>
                { categories.map((category) => (
                    <option 
                        key={ category.id } 
                        value={ category.name }>
                        { category.name }
                    </option>
                ))}
            </select>
            <Input
                className='new-amount'
                type='number'
                name='amount'
                value={ fields.amount }
                fields={ fields }
                setFields={ setFields } />
            <button 
                className='add-btn'
                onClick={ handleSubmit }>Add</button>
        </section>
    )
}