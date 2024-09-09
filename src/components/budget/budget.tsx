import { useState } from 'react';
import BudgetSection from './budgetSection';
import Validation from '../validation/validation';
import { getCurrentPeriod, getNewPeriod } from '../../misc/miscFunctions';
import './budget.css';
import { BudgetFilterTypes } from './budgetTypes';
import { useGetBudget, useGetCategories } from '../../misc/hooks';
import { 
    BudgetContext, 
    BudgetFiltersContext, 
    CategoriesContext, 
    BudgetPeriodContext 
} from '../../misc/context';
import HiddenBudgetSection from './hiddenBudgetSection/hiddenBudgetSection';
import { PeriodTypes } from '../reports/reportTypes';
import BudgetHeader from './budgetHeader';

export default function Budget (): JSX.Element {
    const [ filters, setFilters ] = useState<BudgetFilterTypes>(getCurrentPeriod())
    const [ period, setPeriod ] = useState<PeriodTypes>(getCurrentPeriod())
    const { budget, setBudgetUpdate } = useGetBudget(period)
    const { categories, setCategoryUpdate } = useGetCategories();

    function handlePeriodChange (direction: "prev" | "next"): void {
        setPeriod(getNewPeriod(period, direction))
    }

    return (
        <BudgetContext.Provider value={{ budget, setBudgetUpdate }}>
        <BudgetFiltersContext.Provider value={{ filters, setFilters }}>
        <BudgetPeriodContext.Provider value={{ period, setPeriod }}>
        <CategoriesContext.Provider value={{ categories, setCategoryUpdate }}>
            <main className="budget-page">
                <div className='budget'>
                    <Validation />
                    <HiddenBudgetSection />
                    <BudgetHeader handlePeriodChange={ handlePeriodChange } />
                    <BudgetSection section_type='Income' />
                    <BudgetSection section_type='Fixed_Expense'/>
                    <BudgetSection section_type='Variable_Expense'/>
                </div>
            </main>
        </CategoriesContext.Provider>
        </BudgetPeriodContext.Provider>    
        </BudgetFiltersContext.Provider>
        </BudgetContext.Provider>
    )
}