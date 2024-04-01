import { useState } from "react";
import { createLedgerItem } from "../../misc/apiCalls";
import { findCategoryID, compileCategoryNames, refreshPage } from "../../misc/miscFunctions";
import Input from "../miscComponents/input/input";
import Select from "../miscComponents/select/select";

export default function NewLedgerItem ({ categories, setUpdateNeeded }) {
    const [ fields, setFields ] = useState({
        date: '',
        category: '',
        amount: ''
    })

    function handleSubmit () {
        const category_id = findCategoryID(fields.category, categories);
        const newFields = { ...fields, 'category': category_id }
        createLedgerItem(newFields)
        .then(setUpdateNeeded(true))
        .then(refreshPage())
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
            <Select 
                className='new-category'
                name='category'
                initial='Category'
                options={ compileCategoryNames(categories) }
                fields={ fields }
                setFields={ setFields }/>
            <Input
                className='new-amount'
                type='number'
                name='amount'
                value={ fields.amount }
                fields={ fields }
                setFields={ setFields } 
                placeholder='Amount' />
            <button 
                className='add-btn'
                onClick={ handleSubmit }>Add</button>
        </section>
    )
}