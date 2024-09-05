import { useState } from 'react';
import BudgetSection from './budgetSection';
import Validation from '../validation/validation';
import { getCurrentPeriod } from '../../misc/miscFunctions';
import './budget.css';
import { BudgetFilterTypes } from './budgetTypes';
import { useGetBudget, useGetCategories } from '../../misc/hooks';
import { BudgetContext, BudgetFiltersContext, CategoriesContext } from '../../misc/context';
import HiddenBudgetSection from './hiddenBudgetSection/hiddenBudgetSection';

export default function Budget (): JSX.Element {
    const [ filters, setFilters ] = useState<BudgetFilterTypes>(getCurrentPeriod())
    const { budget, setBudgetUpdate } = useGetBudget(filters)
    const { categories, setCategoryUpdate } = useGetCategories();

    return (
        <BudgetContext.Provider value={{ budget, setBudgetUpdate }}>
        <BudgetFiltersContext.Provider value={{ filters, setFilters }}>
        <CategoriesContext.Provider value={{ categories, setCategoryUpdate }}>
            <main className="budget-page">
                <div className='budget'>
                    <Validation />
                    <HiddenBudgetSection />
                    <div className="budget-header">Budget</div>
                    <BudgetSection section_type='Income' />
                    <BudgetSection section_type='Expense'/>
                </div>
            </main>
        </CategoriesContext.Provider>    
        </BudgetFiltersContext.Provider>
        </BudgetContext.Provider>
    )
}