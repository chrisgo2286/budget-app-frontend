import { useState } from "react";
import { createLedgerItem } from "../../misc/apiCalls";

export default function NewLedgerItem ({ categories, setUpdateNeeded }) {
    const [ fields, setFields ] = useState({
        date: '',
        category: '',
        amount: ''
    })

    function handleChange (event) {
        let { name, value } = event.target;
        if(name === 'category') {
            value = findCategoryID(value)
        }
        setFields({ ...fields, [name]: value })
    }
    
    function handleSubmit () {
        createLedgerItem(fields).then(setUpdateNeeded(true));
        setFields({
            date: '',
            category: '',
            amount: ''
        })
    }

    function findCategoryID (category_name) {
        for(let i=0;i < categories.length; i++) {
            if(categories[i].name === category_name) {
                return categories[i].id;
            }
        }
    }

    return (
        <section className='new-ledger-item'>
            <input 
                type='date' 
                name='date' 
                value={fields.date}
                onChange={ handleChange }/>
            <select 
                name='category' 
                value={ fields.category } 
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
            <input 
                className='new-amount' 
                type='number' 
                name='amount'
                value={fields.amount}
                placeholder='Amount'
                onChange={ handleChange} />
            <button 
                className='add-btn'
                onClick={ handleSubmit }>Add</button>
        </section>
    )
}