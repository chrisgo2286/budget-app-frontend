import { useState } from 'react';
import { patchBudgetItem } from '../../misc/apiCalls';

export default function InputBudgetItem ({ budgetItem, setUpdateRequired }) {
    const [ amount, setAmount ] = useState(budgetItem.budget_amount);

    function handleChange (event) {
        const { name, value } = event.target;
        setAmount(value);
    }

    function handleBlur () {
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