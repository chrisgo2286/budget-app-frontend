import { useState } from 'react';
import { patchBudgetItem } from '../../misc/apiCalls';
import { validateBudgetItem } from '../../misc/validation/validateBudgetItem';

export default function InputBudgetItem ({ budgetItem, setUpdateRequired, setErrors }) {
    const [ amount, setAmount ] = useState(budgetItem.budget_amount);

    function handleChange (event) {
        const { name, value } = event.target;
        setAmount(value);
    }

    function handleBlur () {
        const result = validateBudgetItem(amount);
        if(result !== 'Valid') {
            setErrors(result);
        }
        patchBudgetItem(budgetItem.id, {'amount': amount});
        setUpdateRequired(true);
    }

    return (
        <input 
            className='budget-item-amount-budgeted'
            type='number'
            name='amount'
            value={ amount }
            onChange={ handleChange }
            onBlur={ handleBlur }>
        </input>
    )
}