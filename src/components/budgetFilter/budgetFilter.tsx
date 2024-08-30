import Select from "../miscComponents/select/select";
import InputBudgetFilter from "./inputBudgetFilter";
import { MONTH_OPTIONS } from "../../misc/miscFunctions";
import { BudgetFilterProps } from "./budgetFilterTypes";

export default function BudgetFilter ({ 
    filters, 
    setFilters, 
    setErrors 
}: BudgetFilterProps): JSX.Element {

    function createInitialMonth (): string {
        if (typeof filters.month === "string") {
            return filters.month
        } else {
            return MONTH_OPTIONS[filters.month -1]
        }
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