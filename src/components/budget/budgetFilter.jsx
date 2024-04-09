import Select from "../miscComponents/select/select";
import Input from "../miscComponents/input/input";
import { month_options } from "../../misc/miscFunctions";

export default function BudgetFilter ({ filters, setFilters, setUpdateRequired }) {

    function createInitialMonth () {
        if(month_options.includes(filters.month)) {
            return filters.month;
        } else {
            return month_options[filters.month - 1];
        }
    }

    function handleSubmit () {
        setUpdateRequired(true);
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
            <Input 
                className='budget-filter-year' 
                type='text'
                name='year'
                value={ filters.year }
                fields={ filters }
                setFields={ setFilters } />
            <button 
                className='budget-filter-submit'
                onClick={ handleSubmit }>Filter</button>
        </section>
    )
}