import React, { useState } from "react";
import Input from "../miscComponents/input/input";
import Select from "../miscComponents/select/select";
import { createBudgetItem } from "../../misc/apiCalls";
import { validateNewBudgetItem } from "../../misc/validation/validateNewBudgetItem";
import { compileCategoryNames, findCategoryID } from "../../misc/miscFunctions";
import { NewBudgetItemProps, NewBudgetItemTypes } from "./newBudgetItemTypes";

export default function NewBudgetItem ({ 
    budget, 
    categories, 
    setErrors, 
    setUpdateRequired 
}: NewBudgetItemProps): JSX.Element {
    
    const [ fields, setFields ] = useState<NewBudgetItemTypes>({
        category: '',
        amount: '',
    })

    async function handleSubmit (): Promise<void> {
        const result = validateNewBudgetItem(fields, budget);
        if(result === 'Valid') {            
            const categoryId = findCategoryID(fields.category, categories);
            await createBudgetItem({ ...fields, category: categoryId });
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
                onClick={ handleSubmit }
                data-cy='new-budget-btn'>
                Add
            </button>
        </section>
    )
}