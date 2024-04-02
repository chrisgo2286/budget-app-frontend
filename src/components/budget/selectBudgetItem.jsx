import { useState } from 'react';
import { patchBudgetItem } from '../../misc/apiCalls';
import { compileCategoryNames, findCategoryID } from '../../misc/miscFunctions';

export default function SelectBudgetItem ({ 
    budgetItem,  
    categories, 
    setUpdateRequired }) {
    
    const [ choice, setChoice ] = useState(budgetItem.category);
    const options = compileCategoryNames(categories);
    
    function handleChange (event) {
        const { name, value } = event.target;
        setChoice(value);
        const categoryId = findCategoryID(value, categories);
        patchBudgetItem(budgetItem.id, {'category': categoryId});
        setUpdateRequired(true);
    }

    return (
        <select
            className='budget-item-category'
            value={ choice }
            onChange={ handleChange }>
            {
                options.map((option) => (
                    <option key={ option } value={ option }>{ option }</option>
                ))
            }
        </select>
    )
}
