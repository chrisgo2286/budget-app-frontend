import { useContext, useState } from 'react';
import { patchBudgetItem } from '../../../misc/apiCalls';
import { validateBudgetItem } from '../../../misc/validation/validateBudgetItem';
import { InputBudgetItemProps } from './budgetItemTypes';
import { BudgetContext, ErrorsContext } from '../../../misc/context';

export default function InputBudgetItem ({ 
    budgetItem
}: InputBudgetItemProps): JSX.Element {
    const [ amount, setAmount ] = useState<string>(budgetItem.budget_amount);
    const { setBudgetUpdate } = useContext(BudgetContext)
    const { setErrors } = useContext(ErrorsContext)
    
    function handleChange (event: React.ChangeEvent<HTMLInputElement>) {
        const { value } = event.target;
        setAmount(value);
    }

    async function handleBlur (): Promise<void> {
        const result = validateBudgetItem(amount)
        if(result === 'Valid') {
            await patchBudgetItem(budgetItem.id, amount);
            setBudgetUpdate(true);
        } else if (typeof result !== "string") {
            setAmount(budgetItem.budget_amount);
            setErrors(result);
        }
    }

    return (
        <input 
            className='budget-item-amount-budgeted'
            type='number'
            name='amount'
            value={ amount }
            onChange={ handleChange }
            onBlur={ handleBlur }
            data-cy={ `budget-item-amount-budgeted-${budgetItem.category.toLowerCase()}` }/>
    )
}