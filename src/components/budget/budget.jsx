import { useState, useEffect } from 'react';
import NewBudgetItem from './newBudgetItem';
import BudgetItem from './budgetItem';
import { getBudgetItems, getCategories } from '../../misc/apiCalls';
import './budget.css';

export default function Budget () {
    const [ budget, setBudget ] = useState([]);
    const [ categories, setCategories ] = useState([]);
    const [ updateRequired, setUpdateRequired ] = useState(false);

    useEffect(() => {
        getBudgetItems().then((budget) => setBudget(budget))
        getCategories().then((categories) => setCategories(categories))
        setUpdateRequired(false)
    }, [updateRequired])

    return (
        <main className='budget'>
            <NewBudgetItem setUpdateRequired={ setUpdateRequired }/>
            {budget.map((budgetItem) => (
                <BudgetItem
                    key={ budgetItem.id }
                    budgetItem={ budgetItem }
                    categories={ categories } 
                    setUpdateRequired={ setUpdateRequired }/>
            ))}
        </main>
    )
}