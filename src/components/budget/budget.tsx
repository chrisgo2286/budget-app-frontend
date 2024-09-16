import { useState } from 'react';
import Validation from '../validation/validation';
import { getCurrentPeriod, getNewPeriod } from '../../misc/miscFunctions';
import './budget.css';
import { BudgetFilterTypes } from './budgetTypes';
import { useGetBudget } from '../../misc/hooks';
import { 
    BudgetContext, 
    BudgetFiltersContext, 
    BudgetPeriodContext 
} from '../../misc/context';
import HiddenBudgetSection from './hiddenBudgetSection/hiddenBudgetSection';
import { PeriodTypes } from '../reports/reportTypes';
import BudgetHeader from './budgetHeader';
import IncomeBudgetSection from './incomeBudgetSection';
import ExpenseBudgetSection from './expenseBudgetSection';

export default function Budget (): JSX.Element {
    const [ filters, setFilters ] = useState<BudgetFilterTypes>(getCurrentPeriod())
    const [ period, setPeriod ] = useState<PeriodTypes>(getCurrentPeriod())
    const { budget, setBudgetUpdate } = useGetBudget(period)

    function handlePeriodChange (direction: "prev" | "next"): void {
        setPeriod(getNewPeriod(period, direction))
    }

    return (
        <BudgetContext.Provider value={{ budget, setBudgetUpdate }}>
        <BudgetFiltersContext.Provider value={{ filters, setFilters }}>
        <BudgetPeriodContext.Provider value={{ period, setPeriod }}>
            <main className="budget-page">
                <div className='budget'>
                    <Validation />
                    <HiddenBudgetSection />
                    <BudgetHeader handlePeriodChange={ handlePeriodChange } />
                    <IncomeBudgetSection />
                    <ExpenseBudgetSection />
                </div>
            </main>
        </BudgetPeriodContext.Provider>    
        </BudgetFiltersContext.Provider>
        </BudgetContext.Provider>
    )
}