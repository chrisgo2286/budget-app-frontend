import { useContext, useState } from 'react';
import { patchBudgetItem } from '../../../misc/apiCalls';
import { validateBudgetItem } from '../../../misc/validation/validateBudgetItem';
import { InputBudgetItemProps } from './budgetItemTypes';
import { BudgetContext, BudgetErrorsContext } from '../../../misc/context';

export default function InputBudgetItem ({ 
    budgetItem
}: InputBudgetItemProps): JSX.Element {
    const [ amount, setAmount ] = useState<string>(budgetItem.budget_amount);
    const { setBudgetUpdate } = useContext(BudgetContext)
    const { setErrors } = useContext(BudgetErrorsContext)
    
    function handleChange (event: React.ChangeEvent<HTMLInputElement>) {
        const { value } = event.target;
        setAmount(value);
    }

    async function handleBlur (): Promise<void> {
        const result = validateBudgetItem(amount)
        if(result === 'Valid') {
            const response = await patchBudgetItem(budgetItem.id, amount);
            if ( response.status === 200 ) {
                setBudgetUpdate(true);
            }
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