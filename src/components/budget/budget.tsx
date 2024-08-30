import { useState, useEffect } from 'react';
import BudgetFilter from '../budgetFilter/budgetFilter';
import NewCategory from '../newCategory/newCategory';
import NewBudgetItem from '../newBudgetItem/newBudgetItem';
import BudgetSection from './budgetSection';
import Validation from '../validation/validation';
import { getBudgetItems, getCategories } from '../../misc/apiCalls';
import { getCurrentMonth, getCurentYear, cleanFilters } from '../../misc/miscFunctions';
import './budget.css';
import { BudgetFilterTypes, BudgetItemTypes } from './budgetTypes';
import { NewCategoryTypes } from '../newCategory/newCategoryTypes';

export default function Budget (): JSX.Element {
    const [ budget, setBudget ] = useState<BudgetItemTypes[]>([]);
    const [ categories, setCategories ] = useState<NewCategoryTypes[]>([]);
    const [ updateRequired, setUpdateRequired ] = useState<boolean>(false);
    const [ filters, setFilters ] = useState<BudgetFilterTypes>({
        month: getCurrentMonth(),
        year: getCurentYear(),
    })
    const [ filtersVisible, setFiltersVisible ] = useState<boolean>(false);
    const [ errors, setErrors ] = useState<string[]>([])

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