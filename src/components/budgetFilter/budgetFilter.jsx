import React, { useState } from "react";
import Select from "../miscComponents/select/select";
import Input from "../miscComponents/input/input";
import Validation from "../validation/validation";
import { month_options } from "../../misc/miscFunctions";
import { validateBudgetFilter } from "../../misc/validation/validateBudgetFilter";

export default function BudgetFilter ({ filters, setFilters, setUpdateRequired }) {
    const [ errors, setErrors ] = useState([]);

    function createInitialMonth () {
        if(month_options.includes(filters.month)) {
            return filters.month;
        } else {
            return month_options[filters.month - 1];
        }
    }

    function handleSubmit () {
        const result = validateBudgetFilter(filters);
        if(result !== 'Valid') {
            setErrors(result);
        } else {
            setErrors([]);
            setUpdateRequired(true);
        }
    }

    return (
        <React.Fragment>
            <section className='budget-filter'>
                <Select 
                    className='budget-filter-month' 
                    name='month'
                    initial={ createInitialMonth() }
                    options={ month_options }
                    fields={ filters }
                    setFields={ setFilters } />
                <Input 
                    className='budget-filter-year' 
                    type='number'
                    name='year'
                    value={ filters.year }
                    fields={ filters }
                    setFields={ setFilters } />
                <button 
                    className='budget-filter-submit'
                    onClick={ handleSubmit }>Filter</button>
            </section>
            <Validation errors={ errors } />
        </React.Fragment>
    )
}