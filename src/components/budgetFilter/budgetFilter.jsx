import React from "react";
import Select from "../miscComponents/select/select";
import InputBudgetFilter from "./inputBudgetFilter";
import { month_options } from "../../misc/miscFunctions";

export default function BudgetFilter ({ 
    filters, 
    setFilters, 
    setErrors 
}) {

    function createInitialMonth () {
        const isCorrectFormat = month_options.includes(filters.month)
        const formattedMonth =  month_options[filters.month -1]
        return (isCorrectFormat) ? filters.month: formattedMonth;
    }

    return (
        <section className='budget-filter'>
            <Select 
                className='budget-filter-month' 
                name='month'
                initial={ createInitialMonth() }
                options={ month_options }
                fields={ filters }
                setFields={ setFilters }/>
            <InputBudgetFilter 
                filters={ filters }
                setFilters={ setFilters } 
                setErrors={ setErrors }/>
        </section>
    )
}