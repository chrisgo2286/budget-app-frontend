import { useEffect, useState } from "react";
import LedgerHeader from "./ledgerHeader";
import LedgerItem from "./ledgerItem";
import NewLedgerItem from "./newLedgerItem";
import { getLedgerItems, getCategories } from "../../misc/apiCalls";
import './ledger.css';

export default function Ledger () {

    const [ ledger, setLedger ] = useState([])
    const [ categories, setCategories ] = useState([])

    useEffect(() => {
        getLedgerItems().then((ledger) => setLedger(ledger));
        getCategories().then((categories) => setCategories(categories));
        
    }, [])

    return (
        <main className='ledger'>
            <NewLedgerItem categories={ categories }/>
            <LedgerHeader />
            <section className="ledger-items">
                { ledger.map((item) => (
                    <LedgerItem 
                        key={ item.id } 
                        item={ item } />
                ))}
            </section>
        </main>
    )
}