import { useEffect, useState } from "react";
import LedgerHeader from "./ledgerHeader";
import LedgerItem from "./ledgerItem";
import { ledgerData } from "../../misc/apiCalls";
import './ledger.css';

export default function Ledger () {

    const [ ledger, setLedger ] = useState([])

    useEffect(() => {
        const ledger = ledgerData;
        setLedger(ledger);
    })

    return (
        <main className='ledger'>
            <LedgerHeader />
            { ledger.map((item) => (
                <LedgerItem 
                    key={ item.id } 
                    item={ item } />
            ))}
        </main>
    )
}