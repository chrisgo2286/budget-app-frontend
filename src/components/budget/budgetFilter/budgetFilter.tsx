import Select from "../../miscComponents/select/select";
import InputBudgetFilter from "./inputBudgetFilter";
import { MONTH_OPTIONS } from "../../../misc/miscFunctions";
import { useContext } from "react";
import { BudgetFiltersContext } from "../../../misc/context";

export default function BudgetFilter (): JSX.Element {

    const { filters, setFilters } = useContext(BudgetFiltersContext)
    
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
            <InputBudgetFilter />
        </section>
    )
}