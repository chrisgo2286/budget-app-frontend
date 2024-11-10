import { useContext, useState } from 'react';
import { validateBudgetFilter } from '../../../misc/validation/validateBudgetFilter';
import { BudgetErrorsContext, BudgetPeriodContext } from '../../../misc/context';

export default function InputBudgetFilter (): JSX.Element {
    const { period, setPeriod } = useContext(BudgetPeriodContext)
    const [ year, setYear ] = useState<number>(period.year);
    const { setErrors } = useContext(BudgetErrorsContext)

    function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
        const { value } = event.target;
        setYear(parseInt(value));
    }

    function handleBlur (): void {
        const newPeriod = { ...period, year: year }
        const result = validateBudgetFilter(newPeriod);
        if(result === 'Valid') {
            setErrors([]);
            setPeriod(newPeriod);
        } else if (typeof result !== "string") {
            setYear(period.year);
            setErrors(result);
        }
    }
    
    return (
        <input
            className='budget-filter-year'
            type='number'
            name='year'
            value={ year }
            onChange={ handleChange }
            onBlur={ handleBlur } 
            data-cy='budget-filter-year'/>
    )
}