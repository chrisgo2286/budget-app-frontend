import React, { useState } from "react";
import Input from "../miscComponents/input/input";
import Select from "../miscComponents/select/select";
import { createBudgetItem } from "../../misc/apiCalls";
import { validateNewBudgetItem } from "../../misc/validation/validateNewBudgetItem";
import { compileCategoryNames } from "../../misc/miscFunctions";

export default function NewBudgetItem ({ categories, setErrors, setUpdateRequired }) {
    const [ fields, setFields ] = useState({
        category: '',
        amount: '',
    })

    async function handleSubmit () {
        const result = validateNewBudgetItem(fields, categories);
        if(result === 'Valid') {            
            await createBudgetItem(fields);
            setFields({
                category: '',
                amount: '',
            })
            setUpdateRequired(true);
        } else {
            setErrors(result);
        }
    }

    return (
        <section className="new-budget-item">
            <Select
                className='new-budget-category'
                name='category'
                initial='Category'
                options={ compileCategoryNames(categories) }
                value={ fields.category }
                fields={ fields }
                setFields={ setFields } />
            <Input
                className='new-budget-amount'
                type='number'
                name='amount'
                value={ fields.amount }
                fields={ fields }
                setFields={ setFields } 
                placeholder='Amount' />    
            <button 
                className='add-btn'
                onClick={ handleSubmit }>
                Add
            </button>
        </section>
    )
}