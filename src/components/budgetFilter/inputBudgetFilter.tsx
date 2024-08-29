import { useState } from 'react';
import { validateBudgetFilter } from '../../misc/validation/validateBudgetFilter';
import { BudgetFilterProps } from './budgetFilterTypes';

export default function InputBudgetFilter ({ 
    filters, 
    setFilters, 
    setErrors 
}: BudgetFilterProps): JSX.Element {
    const [ year, setYear ] = useState<number | string>(filters?.year);

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
        } else {
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