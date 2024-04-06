import { useState, useEffect } from 'react';
import NewBudgetItem from './newBudgetItem';
import BudgetSection from './budgetSection';
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
            <NewBudgetItem 
                setUpdateRequired={ setUpdateRequired }
                categories={ categories }/>
            <BudgetSection
                section_type='Income'
                budget={ budget }
                categories={ categories }
                setUpdateRequired={ setUpdateRequired } />
            <BudgetSection
                section_type='Expense'
                budget={ budget }
                categories={ categories }
                setUpdateRequired={ setUpdateRequired } />
        </main>
    )
}