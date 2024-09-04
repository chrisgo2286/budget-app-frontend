import { useState, useContext } from "react";
import Input from "../../miscComponents/input/input";
import Select from "../../miscComponents/select/select";
import { createBudgetItem } from "../../../misc/apiCalls";
import { validateNewBudgetItem } from "../../../misc/validation/validateNewBudgetItem";
import { compileCategoryNames, findCategoryID } from "../../../misc/miscFunctions";
import { NewBudgetItemTypes } from "./newBudgetItemTypes";
import { CategoriesContext, BudgetContext, ErrorsContext } from "../../../misc/context";

export default function NewBudgetItem (): JSX.Element {
    
    const [ fields, setFields ] = useState<NewBudgetItemTypes>({
        category: '',
        amount: '',
    })
    const { categories } = useContext(CategoriesContext)
    const { budget, setBudgetUpdate } = useContext(BudgetContext)
    const { setErrors } = useContext(ErrorsContext)
    
    async function handleSubmit (): Promise<void> {
        const result = validateNewBudgetItem(fields, budget);
        if(result === 'Valid') {            
            const categoryId = findCategoryID(fields.category, categories);
            if (categoryId) {
                await createBudgetItem({ ...fields, category: categoryId });
                setFields({
                    category: '',
                    amount: '',
                })
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