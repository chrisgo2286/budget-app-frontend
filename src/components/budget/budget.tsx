import { useState } from 'react';
import Validation from '../validation/validation';
import { getCurrentPeriod, getNewPeriod } from '../../misc/miscFunctions';
import './budget.css';
import { useGetBudget } from '../../misc/hooks';
import { 
    BudgetContext, 
    BudgetPeriodContext,
    BudgetErrorsContext,
} from '../../misc/context';
import HiddenBudgetSection from './hiddenBudgetSection/hiddenBudgetSection';
import { PeriodTypes } from "../../components/reports/reports"
import BudgetHeader from './budgetHeader';
import BudgetBody from './budgetBody/budgetBody';

export default function Budget (): JSX.Element {
    const [ period, setPeriod ] = useState<PeriodTypes>(getCurrentPeriod())
    const [ errors, setErrors ] = useState<string[]>([])
    const { budget, setBudgetUpdate } = useGetBudget(period)
    
    function handlePeriodChange (direction: "prev" | "next"): void {
        setPeriod(getNewPeriod(period, direction))
    }
    return (
        <BudgetContext.Provider value={{ budget, setBudgetUpdate }}>
        <BudgetPeriodContext.Provider value={{ period, setPeriod }}>
        <BudgetErrorsContext.Provider value={{ errors, setErrors }}>
            <main className="budget-page">
                <div className='budget'>
                    <Validation errors={ errors }/>
                    <HiddenBudgetSection />
                    <BudgetHeader handlePeriodChange={ handlePeriodChange } />
                    <BudgetBody />                    
                </div>
            </main>
        </BudgetErrorsContext.Provider>
        </BudgetPeriodContext.Provider>    
        </BudgetContext.Provider>
    )
}