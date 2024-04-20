import React, { useState } from "react";
import Select from "../miscComponents/select/select";
import InputBudgetFilter from "./inputBudgetFilter";
import { month_options } from "../../misc/miscFunctions";
import { validateBudgetFilter } from "../../misc/validation/validateBudgetFilter";

export default function BudgetFilter ({ 
    filters, 
    setFilters, 
    setUpdateRequired,
    setErrors 
}) {
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
        <section className='budget-filter'>
            <Select 
                className='budget-filter-month' 
                name='month'
                initial={ createInitialMonth() }
                options={ month_options }
                fields={ filters }
                setFields={ setFilters } />
            <InputBudgetFilter 
                filters={ filters }
                setFilters={ setFilters } 
                setErrors={ setErrors }/>
        </section>
    )
}