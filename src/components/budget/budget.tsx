import { useState } from 'react';
import BudgetFilter from '../budgetFilter/budgetFilter';
import NewCategory from '../newCategory/newCategory';
import NewBudgetItem from '../newBudgetItem/newBudgetItem';
import BudgetSection from './budgetSection';
import Validation from '../validation/validation';
import { getCurrentPeriod } from '../../misc/miscFunctions';
import './budget.css';
import { BudgetFilterTypes } from './budgetTypes';
import { useGetBudget, useGetCategories } from '../../misc/hooks';

export default function Budget (): JSX.Element {
    const [ filters, setFilters ] = useState<BudgetFilterTypes>(getCurrentPeriod())
    const [ filtersVisible, setFiltersVisible ] = useState<boolean>(false);
    const [ errors, setErrors ] = useState<string[]>([])
    const { categories, setCategoryUpdate } = useGetCategories()
    const { budget, setBudgetUpdate } = useGetBudget(filters)

    return (
        <main className="budget-page">
            <div className='budget'>
                <Validation errors={ errors } />
                <div className="expand-icon">
                    <i 
                        className="material-icons"
                        data-cy="expand-icon"
                        onClick={() => setFiltersVisible(!filtersVisible)}>
                        { filtersVisible ? "expand_less" : "expand_more" }
                    </i>
                </div>
                <div className={ (!filtersVisible) ? "filter-container collapsed":"filter-container" }>
                    <div className="filters-header">Filters</div>
                    <BudgetFilter
                        filters={ filters }
                        setFilters={ setFilters } 
                        setErrors={ setErrors }/>
                    <div className="new-category-header">New Category</div>
                    <NewCategory
                        // categories={ categories }
                        setErrors={ setErrors }
                        setUpdateRequired={ setCategoryUpdate } />
                    <div className="new-budget-item-header">New Budget Item</div>
                    <NewBudgetItem 
                        budget={ budget }
                        categories={ categories }
                        setUpdateRequired={ setBudgetUpdate }
                        setErrors={ setErrors } />
                </div>

                <div className="budget-header">Budget</div>
                <BudgetSection
                    section_type='Income'
                    budget={ budget }
                    categories={ categories }
                    setUpdateRequired={ setBudgetUpdate }
                    setErrors={ setErrors } />
                <BudgetSection
                    section_type='Expense'
                    budget={ budget }
                    categories={ categories }
                    setUpdateRequired={ setBudgetUpdate }
                    setErrors={ setErrors }/>
            </div>
        </main>
    )
}