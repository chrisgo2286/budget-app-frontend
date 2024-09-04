import { useState } from 'react';
import BudgetFilter from './budgetFilter/budgetFilter';
import NewCategory from './newCategory/newCategory';
import NewBudgetItem from './newBudgetItem/newBudgetItem';
import BudgetSection from './budgetSection';
import Validation from '../validation/validation';
import { getCurrentPeriod } from '../../misc/miscFunctions';
import './budget.css';
import { BudgetFilterTypes } from './budgetTypes';
import { useGetBudget } from '../../misc/hooks';
import { BudgetContext, BudgetFiltersContext } from '../../misc/context';
import HiddenBudgetSection from './hiddenBudgetSection/hiddenBudgetSection';

export default function Budget (): JSX.Element {
    const [ filters, setFilters ] = useState<BudgetFilterTypes>(getCurrentPeriod())
    const { budget, setBudgetUpdate } = useGetBudget(filters)

    return (
        <BudgetContext.Provider value={{ budget, setBudgetUpdate }}>
        <BudgetFiltersContext.Provider value={{ filters, setFilters }}>
            <main className="budget-page">
                <div className='budget'>
                    <Validation />
                    <HiddenBudgetSection />
                    <div className="budget-header">Budget</div>
                    <BudgetSection section_type='Income' />
                    <BudgetSection section_type='Expense'/>
                </div>
            </main>    
        </BudgetFiltersContext.Provider>
        </BudgetContext.Provider>
    )
}