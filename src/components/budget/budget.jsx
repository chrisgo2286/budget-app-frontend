import { useState, useEffect } from 'react';
import BudgetItem from './budgetItem';
import { budgetData } from '../../misc/apiCalls';
import { getBudgetItems, getCategories } from '../../misc/apiCalls';
import './budget.css';

export default function Budget () {
    const [ budget, setBudget ] = useState([]);
    const [ categories, setCategories ] = useState([]);

    useEffect(() => {
        getBudgetItems().then((budget) => setBudget(budget))
        getCategories().then((categories) => setCategories(categories))
    }, [])

    return (
        <main className='budget'>
            {budget.map((budgetItem) => (
                <BudgetItem
                    key={ budgetItem.id }
                    budgetItem={ budgetItem }
                    categories={ categories } />
            ))}
        </main>
    )
}