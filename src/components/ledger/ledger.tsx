import { useContext, useState } from "react";
import LedgerHeader from "./ledgerHeader";
import Validation from "../validation/validation";
import './ledger.css';
import { useGetLedger } from "../../misc/hooks";
import { CategoriesContext, LedgerContext, LedgerErrorsContext, LedgerFiltersContext } from "../../misc/context";
import HiddenLedgerSection from "./hiddenLedgerSection/hiddenLedgerSection";
import { getCurrentMonth, getCurrentYear, getNewPeriod } from "../../misc/miscFunctions";
import LedgerTableBody from "./ledgerTableBody/ledgerTableBody";

export type FilterTypes = {
    month: string,
    year: string,
    startDate: string,
    endDate: string, 
    category: string,
    type: string,
}

export default function Ledger (): JSX.Element {

    const { categories } = useContext(CategoriesContext)
    const [ filters, setFilters ] = useState<FilterTypes>({
        month: getCurrentMonth().toString(),
        year: getCurrentYear().toString(),
        startDate: '',
        endDate: '', 
        category: '',
        type: '',
    })
    const { ledger, setLedgerUpdate } = useGetLedger(filters, categories)
    const [ errors, setErrors ] = useState<string[]>([])
    
    function handlePeriodChange (direction: "prev" | "next"): void {
        const period = {
            month: parseInt(filters.month), 
            year: parseInt(filters.year)
        }
        const newPeriod = getNewPeriod(period, direction)
        const newFilters = { 
            "month": newPeriod.month.toString(), 
            "year": newPeriod.year.toString(),
            "startDate": "",
            "endDate": "",
            "category": "",
            "type": "" 
        }
        setFilters(newFilters)
        setLedgerUpdate(true)
    }

    return (
        <LedgerContext.Provider value={{ ledger, setLedgerUpdate }}>
        <LedgerFiltersContext.Provider value={{ filters, setFilters }}>
        <LedgerErrorsContext.Provider value={{ errors, setErrors }}>
            <main className='ledger-page'>
                <div className="ledger">
                    <Validation errors={ errors }/>
                    <HiddenLedgerSection />
                    <LedgerHeader handlePeriodChange={ handlePeriodChange } />
                    <LedgerTableBody />
                </div>
            </main>
        </LedgerErrorsContext.Provider>
        </LedgerFiltersContext.Provider>
        </LedgerContext.Provider>
    )
}