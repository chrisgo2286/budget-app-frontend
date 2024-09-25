import { useContext, useState } from "react";
import LedgerHeader from "./ledgerHeader";
import LedgerItem from "./ledgerItem";
import Validation from "../validation/validation";
import './ledger.css';
import { FilterTypes } from "./ledgerTypes";
import { useGetLedger } from "../../misc/hooks";
import { CategoriesContext, LedgerContext, LedgerErrorsContext, LedgerFiltersContext } from "../../misc/context";
import HiddenLedgerSection from "./hiddenLedgerSection/hiddenLedgerSection";

export default function Ledger (): JSX.Element {

    const { categories } = useContext(CategoriesContext)
    const [ filters, setFilters ] = useState<FilterTypes>({
        startDate: '',
        endDate: '', 
        category: '',
        type: '',
    })
    const { ledger, setLedgerUpdate } = useGetLedger(filters, categories)
    const [ errors, setErrors ] = useState<string[]>([])

    return (
        <LedgerContext.Provider value={{ ledger, setLedgerUpdate }}>
        <LedgerFiltersContext.Provider value={{ filters, setFilters }}>
        <LedgerErrorsContext.Provider value={{ errors, setErrors }}>
            <main className='ledger-page'>
                <div className="ledger">
                    <Validation errors={ errors }/>
                    <HiddenLedgerSection />
                    <div className="ledger-title" data-cy="ledger-title">Ledger</div>
                    <LedgerHeader />
                    <section className="ledger-items" data-cy="ledger-items">
                        { ledger.map((item) => (
                            <LedgerItem key={ item.id } item={ item } />
                        ))}
                    </section>
                </div>
            </main>
        </LedgerErrorsContext.Provider>
        </LedgerFiltersContext.Provider>
        </LedgerContext.Provider>
    )
}