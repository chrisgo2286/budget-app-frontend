import { useState, useContext } from "react";
import LedgerHeader from "./ledgerHeader";
import LedgerItem from "./ledgerItem";
import Validation from "../validation/validation";
import './ledger.css';
import { FilterTypes } from "./ledgerTypes";
import { useGetLedger } from "../../misc/hooks";
import { CategoriesContext, LedgerContext, LedgerFiltersContext } from "../../misc/context";
import HiddenLedgerSection from "./hiddenLedgerSection/hiddenLedgerSection";

export default function Ledger (): JSX.Element {

    const [ filters, setFilters ] = useState<FilterTypes>({
        startDate: '',
        endDate: '', 
        category: '',
        type: '',
    })
    const { categories } = useContext(CategoriesContext)
    const { ledger, setLedgerUpdate } = useGetLedger(filters, categories)

    return (
        <LedgerContext.Provider value={{ ledger, setLedgerUpdate }}>
        <LedgerFiltersContext.Provider value={{ filters, setFilters }}>
            <main className='ledger-page'>
                <div className="ledger">
                    <Validation />
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
        </LedgerFiltersContext.Provider>
        </LedgerContext.Provider>
    )
}