import { useState } from 'react';
import { validateBudgetFilter } from '../../misc/validation/validateBudgetFilter';

export default function InputBudgetFilter ({ filters, setFilters, setErrors }) {
    console.log(filters)
    const [ year, setYear ] = useState(filters?.year);

    function handleChange(event) {
        const { value } = event.target;
        setYear(value);
    }

    function handleBlur () {
        const newFilters = { ...filters, 'year': year }
        const result = validateBudgetFilter(newFilters);
        if(result === 'Valid') {
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
            onBlur={ handleBlur } />
    )
}