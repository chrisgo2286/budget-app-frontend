import { useContext, useState } from 'react';
import Input from "../miscComponents/input/input";
import Select from "../miscComponents/select/select";
import { compileBudgetCategoryNames, getCurrentMonth, getCurrentYear } from "../../misc/miscFunctions";
import { CategoriesContext, LedgerContext, LedgerFiltersContext } from '../../misc/context';

export default function LedgerFilter (): JSX.Element {
    
    const { categories } = useContext(CategoriesContext)
    const { setLedgerUpdate } = useContext(LedgerContext)
    const { filters, setFilters } = useContext(LedgerFiltersContext)
    const [ startDateType, setStartDateType ] = useState<string>('text');
    const [ endDateType, setEndDateType ] = useState<string>('text');

    function handleSubmit (): void {
        setLedgerUpdate(true);
    }

    function handleStartDateFocus (): void {
        setStartDateType('date');
    }

    function handleEndDateFocus (): void {
        setEndDateType('date');
    }

    function handleStartDateBlur (): void {
        setStartDateType('text');
    }

    function handleEndDateBlur (): void {
        setEndDateType('text');
    }

    function handleClear (): void {
        setFilters({
            month: getCurrentMonth().toString(),
            year: getCurrentYear().toString(),
            startDate: '',
            endDate: '', 
            category: '',
            type: '',
        })
        setLedgerUpdate(true);
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