import { useContext, useState } from 'react';
import { validateBudgetFilter } from '../../../misc/validation/validateBudgetFilter';
import { BudgetFiltersContext, ErrorsContext } from '../../../misc/context';

export default function InputBudgetFilter (): JSX.Element {
    const { filters, setFilters } = useContext(BudgetFiltersContext)
    const [ year, setYear ] = useState<number | string>(filters?.year);
    const { setErrors } = useContext(ErrorsContext)

    function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
        const { value } = event.target;
        setYear(value);
    }

    function handleBlur (): void {
        const newFilters = { ...filters, 'year': year }
        const result = validateBudgetFilter(newFilters);
        if(result === 'Valid') {
            setErrors([]);
            setFilters(newFilters);
        } else if (typeof result !== "string") {
            setYear(filters.year);
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