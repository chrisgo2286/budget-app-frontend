import { useState } from 'react';
import { patchBudgetItem, deleteCategory } from '../../misc/apiCalls';
import { compileBudgetCategoryNames, findCategoryID } from '../../misc/miscFunctions';

export default function SelectBudgetItem ({ 
    budgetItem,  
    categories, 
    setUpdateRequired }) {
    
    const [ choice, setChoice ] = useState(budgetItem.category);
    const options = compileBudgetCategoryNames(categories);
    
    function handleChange (event) {
        const { name, value } = event.target;
        ( value === 'Delete') ? deleteBudgetCategory(): updateBudgetItem(value);
        setUpdateRequired(true);
    }    
    
    function deleteBudgetCategory () {
        console.log('Delete entered')
        const categoryId = findCategoryID(choice, categories)
        deleteCategory(categoryId);
    }

    function updateBudgetItem (value) {
        console.log('Update entered')
        setChoice(value);
        const categoryId = findCategoryID(value, categories);
        patchBudgetItem(budgetItem.id, {'category': categoryId});
    }

    return (
        <select
            className='budget-item-category'
            value={ choice }
            onChange={ handleChange }>
            {
                options.map((option, ndx) => (
                    <option key={ ndx } value={ option }>{ option }</option>
                ))
            }
        </select>
    )
}
