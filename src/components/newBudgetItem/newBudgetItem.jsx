import React, { useState } from "react";
import Input from "../miscComponents/input/input";
import Select from "../miscComponents/select/select";
import Validation from "../validation/validation";
import { createBudgetItem } from "../../misc/apiCalls";
import { refreshPage } from "../../misc/miscFunctions";
import { validateNewBudgetItem } from "../../misc/validation/validateNewBudgetItem";

export default function NewBudgetItem ({ categories }) {
    const [ fields, setFields ] = useState({
        category: '',
        amount: '',
        type: 'Type'
    })
    const [ errors, setErrors ] = useState([]);

    function handleSubmit () {
        const result = validateNewBudgetItem(fields, categories);
        if(result === 'Valid') {            
            createBudgetItem(fields);
            setFields({
                category: '',
                amount: '',
                type: 'Type'
            })
            refreshPage();
        } else {
            setErrors(result);
        }
    }

    return (
        <React.Fragment>
            <section className="new-budget-item">
                <Input
                    className='new-budget-category'
                    type='text'
                    name='category'
                    value={ fields.category }
                    fields={ fields }
                    setFields={ setFields } 
                    placeholder='Category' />
                <Select 
                    className='new-budget-category-type'
                    name='type'
                    initial={ fields.type }
                    options={ [ 'Expense', 'Income' ] }
                    fields={ fields }
                    setFields={ setFields }/>
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
                    onClick={ handleSubmit }>Add</button>
            </section>
            <Validation errors={ errors } />
        </React.Fragment>
    )
}