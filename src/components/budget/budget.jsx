import { useState, useEffect } from 'react';
import BudgetFilter from '../budgetFilter/budgetFilter';
import NewBudgetItem from '../newBudgetItem/newBudgetItem';
import BudgetSection from './budgetSection';
import { getBudgetItems, getCategories } from '../../misc/apiCalls';
import { getCurrentMonth, getCurentYear, cleanFilters } from '../../misc/miscFunctions';
import './budget.css';

export default function Budget () {
    const [ budget, setBudget ] = useState([]);
    const [ categories, setCategories ] = useState([]);
    const [ updateRequired, setUpdateRequired ] = useState(false);
    const [ filters, setFilters ] = useState({
        month: getCurrentMonth(),
        year: getCurentYear(),
    })


    useEffect(() => {
        const newFilters = cleanFilters(filters);
        getBudgetItems(newFilters).then((budget) => setBudget(budget))
        getCategories().then((categories) => setCategories(categories))
        setUpdateRequired(false)
    }, [updateRequired])

    return (
        <main className='budget'>
            <BudgetFilter
                filters={ filters }
                setFilters={ setFilters } 
                setUpdateRequired={ setUpdateRequired }/>
            <NewBudgetItem 
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