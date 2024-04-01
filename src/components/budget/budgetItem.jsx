import { useState, useEffect } from 'react';
import Input from '../miscComponents/input/input';
import Select from '../miscComponents/select/select';
import { compileCategoryNames, findCategoryID, refreshPage } from '../../misc/miscFunctions';
import { patchBudgetItem } from '../../misc/apiCalls';

export default function BudgetItem ({ budgetItem, categories }) {
    const { id, category, budget_amount, actual_amount, percent } = budgetItem
    const [ fields, setFields ] = useState({
        category: category,
        amount: budget_amount,
    })

    useEffect(() => {
        console.log('Effect Ran!')
        updateBudgetCategory();
    }, [fields.category])

    function updateBudgetCategory () {
        const categoryId = findCategoryID(fields.category, categories);
        patchBudgetItem(id, {'category': categoryId});
    }

    return (
        <div className="budget-item">
            <div className="budget-item-header">
                <Select
                    className='budget-item-category'
                    name='category'
                    initial={ fields.category }
                    options={ compileCategoryNames(categories) }
                    fields={ fields }
                    setFields={ setFields }/>

                <div className='budget-item-amounts'>
                    <span className="budget-item-amount-actual">${ actual_amount} of $</span>
                    <Input
                        className='budget-item-amount-budgeted' 
                        type='number'
                        name='amount'
                        value={ fields.amount }
                        fields={ fields }
                        setFields={ setFields } />
                </div>
            </div>
            <div className='outer-bar'>
                <div className='inner-bar' style={{ width: percent }}></div>
            </div>
        </div>
    )
}