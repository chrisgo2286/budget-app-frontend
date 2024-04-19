import { useState } from 'react';
import { patchBudgetItem, deleteCategory } from '../../misc/apiCalls';
import { compileBudgetCategoryNames, findCategoryID } from '../../misc/miscFunctions';

export default function SelectBudgetItem ({ budgetItem, categories, setUpdateRequired }) {
    
    const [ choice, setChoice ] = useState(budgetItem.category);
    const options = compileBudgetCategoryNames(categories);
    
    function handleChange (event) {
        const { name, value } = event.target;
        if(value) {
            console.log(value)
            if(value === 'Delete') {
                deleteBudgetCategory();
            }
            else if(options.include(value)) {
                updateBudgetItem();
            }
            setUpdateRequired(true);
        }
    }    
    
    async function deleteBudgetCategory () {
        console.log('Deleting Category: ' + choice)
        const categoryId = findCategoryID(choice, categories)
        await deleteCategory(categoryId);
    }

    async function updateBudgetItem (value) {
        setChoice(value);
        const categoryId = findCategoryID(value, categories);
        await patchBudgetItem(budgetItem.id, {'category': categoryId});
    }

    return (
        <select
            className='budget-item-category'
            value={ choice }
            name='category'
            onChange={ handleChange }>
            {
                options.map((option, ndx) => (
                    <option key={ ndx } value={ option }>{ option }</option>
                ))
            }
        </select>
    )
}
