import { useState, useContext } from 'react';
import { deleteBudgetItem } from '../../../misc/apiCalls';
import { SelectBudgetItemProps } from './budgetItemTypes';
import { BudgetContext } from '../../../misc/context';

export default function SelectBudgetItem ({ 
    budgetItem, 
}: SelectBudgetItemProps): JSX.Element {
    
    const { setBudgetUpdate } = useContext(BudgetContext)
    const [ choice ] = useState(budgetItem.category);
    
    function handleChange (event: React.ChangeEvent<HTMLSelectElement> ) {
        const { value } = event.target;
        if(value && value === "Delete") {
            deleteSelectedBudgetItem();
            setBudgetUpdate(true);
        }
    }    
    
    async function deleteSelectedBudgetItem (): Promise<void> {
        await deleteBudgetItem(budgetItem.id);
    }

    return (
        <select
            className='budget-item-category'
            value={ choice }
            name='category'
            onChange={ handleChange }
            data-cy={ `budget-item-category-${choice.toLowerCase()}` }>
            <option key={ budgetItem.category } value={ budgetItem.category }>{ budgetItem.category }</option>
            <option key={ `${budgetItem.category}-Delete` } value="Delete">Delete</option>
        </select>
    )
}
