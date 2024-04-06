import { useState } from "react";
import Input from "../miscComponents/input/input";
import Select from "../miscComponents/select/select";
import { createBudgetItem } from "../../misc/apiCalls";
import { categoryIsInCategories } from "../../misc/miscFunctions";

export default function NewBudgetItem ({ setUpdateRequired, categories }) {
    const [ fields, setFields ] = useState({
        category: '',
        amount: '',
        type: 'Type'
    })

    function handleSubmit () {
        if(categoryIsInCategories) {
            console.log('Duplicate Category!')
        } else {
            createBudgetItem(fields);
            setFields({
                category: '',
                amount: '',
                type: 'Type'
            })
            setUpdateRequired(true);
        }
    }

    return (
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

    )
}