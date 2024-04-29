import { useState } from 'react';
import { createBudgetItem, deleteCategory } from '../../misc/apiCalls';
import { compileBudgetCategoryNames, findCategoryID } from '../../misc/miscFunctions';

export default function SelectBudgetItem ({ budgetItem, categories, setUpdateRequired }) {
    
    const [ choice, setChoice ] = useState(budgetItem.category);
    const options = compileBudgetCategoryNames(categories);
    
    function handleChange (event) {
        const { value } = event.target;
        if(value) {
            if(value === 'Delete') {
                deleteBudgetCategory();
            }
            else if(options.includes(value)) {
                createNewBudgetItem(value);
                deleteBudgetCategory()
            }
            setUpdateRequired(true);
        }
    }    
    
    async function deleteBudgetCategory () {
        console.log('Deleting Category: ' + choice)
        const categoryId = findCategoryID(choice, categories)
        await deleteCategory(categoryId);
    }

    async function createNewBudgetItem (value) {
        setChoice(value);
        const categoryId = findCategoryID(value, categories);
        console.log(budgetItem)
        await createBudgetItem({ 'category': categoryId, 'amount': budgetItem.budget_amount });
    }

    return (
        <select
            className='budget-item-category'
            value={ choice }
            name='category'
            onChange={ handleChange }
            data-cy='budget-item-category'>
            {
                options.map((option, ndx) => (
                    <option key={ ndx } value={ option }>{ option }</option>
                ))
            }
        </select>
    )
}
