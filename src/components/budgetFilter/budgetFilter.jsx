import React from "react";
import Select from "../miscComponents/select/select";
import InputBudgetFilter from "./inputBudgetFilter";
import { MONTH_OPTIONS } from "../../misc/miscFunctions";

export default function BudgetFilter ({ 
    filters, 
    setFilters, 
    setErrors 
}) {

    function createInitialMonth () {
        const isCorrectFormat = MONTH_OPTIONS.includes(filters.month)
        const formattedMonth =  MONTH_OPTIONS[filters.month -1]
        return (isCorrectFormat) ? filters.month: formattedMonth;
    }

    return (
        <section className='budget-filter'>
            <Select 
                className='budget-filter-month' 
                name='month'
                initial={ createInitialMonth() }
                options={ MONTH_OPTIONS }
                fields={ filters }
                setFields={ setFilters }/>
            <InputBudgetFilter 
                filters={ filters }
                setFilters={ setFilters } 
                setErrors={ setErrors }/>
        </section>
    )
}