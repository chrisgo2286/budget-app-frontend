import { useEffect, useState } from "react";
import LedgerHeader from "./ledgerHeader";
import LedgerItem from "./ledgerItem";
import { ledgerData } from "../../misc/apiCalls";

export default function Ledger () {

    const [ ledger, setLedger ] = useState([])

    useEffect(() => {
        const ledger = ledgerData;
        setLedger(ledger);
    })

    return (
        <main>
            <LedgerHeader />
            { ledger.map((item) => (
                <LedgerItem 
                    key={ item.id } 
                    item={ item } />
            ))}
        </main>
    )
}