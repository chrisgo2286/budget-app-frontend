import { useState } from 'react';
import { createBudgetItem, deleteBudgetItem } from '../../misc/apiCalls';
import { compileBudgetCategoryNames, findCategoryID } from '../../misc/miscFunctions';

export default function SelectBudgetItem ({ budgetItem, categories, setUpdateRequired }) {
    
    const [ choice, setChoice ] = useState(budgetItem.category);
    const options = compileBudgetCategoryNames(categories);
    
    function handleChange (event) {
        const { value } = event.target;
        if(value) {
            if(value === 'Delete') {
                deleteSelectedBudgetItem();
            }
            else if(options.includes(value)) {
                createNewBudgetItem(value);
                deleteSelectedBudgetItem();
            }
            setUpdateRequired(true);
        }
    }    
    
    async function deleteSelectedBudgetItem () {
        await deleteBudgetItem(budgetItem.id);
    }

    async function createNewBudgetItem (value) {
        setChoice(value);
        const categoryId = findCategoryID(value, categories);
        await createBudgetItem({ 'category': categoryId, 'amount': budgetItem.budget_amount });
    }

    return (
        <select
            className='budget-item-category'
            value={ choice }
            name='category'
            onChange={ handleChange }
            data-cy={ `budget-item-category-${choice.toLowerCase()}` }>
            {
                options.map((option, ndx) => (
                    <option key={ ndx } value={ option }>{ option }</option>
                ))
            }
        </select>
    )
}
