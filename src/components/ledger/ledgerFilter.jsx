import { useState } from 'react';
import Input from "../miscComponents/input/input";
import Select from "../miscComponents/select/select";
import { compileBudgetCategoryNames } from "../../misc/miscFunctions";

export default function LedgerFilter ({ categories, filters, setFilters, setUpdateRequired }) {
    
    const [ startDateType, setStartDateType ] = useState('text');
    const [ endDateType, setEndDateType ] = useState('text');

    function handleSubmit () {
        setUpdateRequired(true);
    }

    function handleStartDateFocus () {
        setStartDateType('date');
    }

    function handleEndDateFocus () {
        setEndDateType('date');
    }

    function handleStartDateBlur () {
        setStartDateType('text');
    }

    function handleEndDateBlur () {
        setEndDateType('text');
    }

    function handleClear () {
        setFilters({
            startDate: '',
            endDate: '', 
            category: '',
            type: '',
        })
        setUpdateRequired(true);
    }

    return (
        <section className="ledger-filter">
            <Input
                className='ledger-filter-start-date'
                type={ startDateType }
                name='startDate'
                value={ filters.startDate }
                fields={ filters }
                setFields={ setFilters } 
                onFocus={ handleStartDateFocus }
                onBlur={ handleStartDateBlur }
                placeholder='Start Date'/>
            <Input
                className='ledger-filter-end-date'
                type={ endDateType }
                name='endDate'
                value={ filters.endDate }
                fields={ filters }
                setFields={ setFilters }
                onFocus={ handleEndDateFocus }
                onBlur={ handleEndDateBlur }
                placeholder='End Date' />
            <Select
                className='ledger-filter-category'
                name='category'
                initial='Category'
                options={ compileBudgetCategoryNames(categories) }
                fields={ filters }
                setFields={ setFilters } />
            <Select
                className='ledger-filter-type'
                name='type'
                initial='Type'
                options={[ 'Expense', 'Income' ]}
                fields={ filters }
                setFields={ setFilters } />
            <button 
                className='ledger-filter-btn'
                onClick={ handleSubmit }
                data-cy="ledger-filter-btn">
                Filter
            </button>
            <button
                className='ledger-clear-btn'
                onClick={ handleClear }
                data-cy="ledger-clear-btn">
                Clear
            </button>
        </section>
    )
}