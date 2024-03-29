import { useEffect, useState } from "react";
import LedgerHeader from "./ledgerHeader";
import LedgerItem from "./ledgerItem";
import NewLedgerItem from "./newLedgerItem";
import { getLedgerItems, getCategories } from "../../misc/apiCalls";
import './ledger.css';

export default function Ledger () {

    const [ ledger, setLedger ] = useState([])
    const [ categories, setCategories ] = useState([])
    const [ updateNeeded, setUpdateNeeded ] = useState(false)

    useEffect(() => {
        getLedgerItems().then((ledger) => setLedger(ledger));
        getCategories().then((categories) => setCategories(categories));
        setUpdateNeeded(false);    
    }, [updateNeeded])

    return (
        <main className='ledger'>
            <NewLedgerItem 
                categories={ categories }
                setUpdateNeeded={ setUpdateNeeded }/>
            <LedgerHeader />
            <section className="ledger-items">
                { ledger.map((item) => (
                    <LedgerItem 
                        key={ item.id } 
                        item={ item }
                        setUpdateNeeded={ setUpdateNeeded } />
                ))}
            </section>
        </main>
    )
}