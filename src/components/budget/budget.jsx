import { useState, useEffect } from 'react';
import BudgetFilter from '../budgetFilter/budgetFilter';
import NewCategory from '../newCategory/newCategory';
import NewBudgetItem from '../newBudgetItem/newBudgetItem';
import BudgetSection from './budgetSection';
import Validation from '../validation/validation';
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
    const [ errors, setErrors ] = useState([])


    useEffect(() => {
        const newFilters = cleanFilters(filters);
        getBudgetItems(newFilters).then((budget) => setBudget(budget))
        getCategories().then((categories) => setCategories(categories))
        setUpdateRequired(false)
    }, [updateRequired, filters])

    return (
        <main className="budget-page">
            <div className='budget'>
                <Validation errors={ errors } />
                
                <div className="container-collapse">
                    <div className="filters-header">Filters</div>
                    <BudgetFilter
                        filters={ filters }
                        setFilters={ setFilters } 
                        setUpdateRequired={ setUpdateRequired }
                        setErrors={ setErrors }/>
                    <div className="new-category-header">New Category</div>
                    <NewCategory
                        categories={ categories }
                        setErrors={ setErrors }
                        setUpdateRequired={ setUpdateRequired } />
                    <div className="new-budget-item-header">New Budget Item</div>
                    <NewBudgetItem 
                        budget={ budget }
                        categories={ categories }
                        setUpdateRequired={ setUpdateRequired }
                        setErrors={ setErrors } />
                </div>
                    
                <div className="budget-header">Budget</div>
                <BudgetSection
                    section_type='Income'
                    budget={ budget }
                    categories={ categories }
                    setUpdateRequired={ setUpdateRequired }
                    setErrors={ setErrors } />
                <BudgetSection
                    section_type='Expense'
                    budget={ budget }
                    categories={ categories }
                    setUpdateRequired={ setUpdateRequired }
                    setErrors={ setErrors }/>
            </div>
        </main>
    )
}