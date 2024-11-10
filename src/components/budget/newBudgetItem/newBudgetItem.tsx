import { useState, useContext } from "react";
import Input from "../../miscComponents/input/input";
import Select from "../../miscComponents/select/select";
import { createBudgetItem } from "../../../misc/apiCalls";
import { validateBudgetItem } from "./newBudgetItemValidation";
import { compileCategoryNames, findCategoryID } from "../../../misc/miscFunctions";
import { CategoriesContext, BudgetContext, BudgetErrorsContext, BudgetPeriodContext } from "../../../misc/context";

export type NewBudgetItemTypes = {
    owner?: number,
    month?: number,
    year?: number,
    category: string,
    amount: string
}

export default function NewBudgetItem (): JSX.Element {
    
    const { period } = useContext(BudgetPeriodContext)
    const [ fields, setFields ] = useState<NewBudgetItemTypes>({
        category: '',
        amount: '',
    })
    const { categories } = useContext(CategoriesContext)
    const { budget, setBudgetUpdate } = useContext(BudgetContext)
    const { setErrors } = useContext(BudgetErrorsContext)
    
    async function handleSubmit (): Promise<void> {
        const result = validateBudgetItem(fields, budget.items);
        if(result === 'Valid') {            
            const categoryId = findCategoryID(fields.category, categories);
            if (categoryId) {
                const newFields = {
                    ...fields, 
                    category: categoryId,
                    month: period.month,
                    year: period.year   
                }
                const response = await createBudgetItem(newFields);
                console.log(response)
                setFields({
                    category: '',
                    amount: '',
                })
                setErrors([])
                setBudgetUpdate(true);
            }
        } else if(typeof result !== "string") {
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