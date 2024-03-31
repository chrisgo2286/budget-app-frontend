import { useState, useEffect } from 'react';
import BudgetItem from './budgetItem';
import { budgetData } from '../../misc/apiCalls';
import { getBudgetItems } from '../../misc/apiCalls';
import './budget.css';

export default function Budget () {
    const [ budget, setBudget ] = useState([]);

    useEffect(() => {
        getBudgetItems().then((budget) => setBudget(budget))
    }, [])

    return (
        <main className='budget'>
            {budget.map((budgetItem) => (
                <BudgetItem
                    key={ budgetItem.id }
                    budgetItem={ budgetItem } />
            ))}
        </main>
    )
}