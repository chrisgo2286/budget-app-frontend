import { useState, useContext } from 'react';
import { createBudgetItem, deleteBudgetItem } from '../../../misc/apiCalls';
import { compileBudgetCategoryNames, findCategoryID } from '../../../misc/miscFunctions';
import { SelectBudgetItemProps } from './budgetItemTypes';
import { BudgetContext, CategoriesContext } from '../../../misc/context';

export default function SelectBudgetItem ({ 
    budgetItem, 
}: SelectBudgetItemProps): JSX.Element {
    
    const { setBudgetUpdate } = useContext(BudgetContext)
    const { categories } = useContext(CategoriesContext)
    const [ choice, setChoice ] = useState(budgetItem.category);
    const options = compileBudgetCategoryNames(categories);
    
    function handleChange (event: React.ChangeEvent<HTMLSelectElement> ) {
        const { value } = event.target;
        if(value) {
            if(value === 'Delete') {
                deleteSelectedBudgetItem();
            }
            else if(options.includes(value)) {
                createNewBudgetItem(value);
                deleteSelectedBudgetItem();
            }
            setBudgetUpdate(true);
        }
    }    
    
    async function deleteSelectedBudgetItem (): Promise<void> {
        await deleteBudgetItem(budgetItem.id);
    }

    async function createNewBudgetItem (value: string): Promise<void> {
        setChoice(value);
        const categoryId = findCategoryID(value, categories);
        if (categoryId) {
            await createBudgetItem({ 'category': categoryId, 'amount': budgetItem.budget_amount });  
        }    
    }

    return (
        <select
            className='budget-item-category'
            value={ choice }
            name='category'
            onChange={ handleChange }
            data-cy={ `budget-item-category-${choice.toLowerCase()}` }>
            {
                options.map((option: string, ndx: number) => (
                    <option key={ ndx } value={ option }>{ option }</option>
                ))
            }
        </select>
    )
}
