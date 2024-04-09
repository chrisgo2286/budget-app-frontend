import { useEffect, useState } from "react";
import LedgerHeader from "./ledgerHeader";
import LedgerItem from "./ledgerItem";
import NewLedgerItem from "./newLedgerItem";
import LedgerFilter from "./ledgerFilter";
import { getLedgerItems, getCategories } from "../../misc/apiCalls";
import './ledger.css';

export default function Ledger () {

    const [ ledger, setLedger ] = useState([])
    const [ categories, setCategories ] = useState([])
    const [ UpdateRequired, setUpdateRequired ] = useState(false)
    const [ filters, setFilters ] = useState({
        startDate: '', //Initial should be 1st of current month
        endDate: '', //Initial should be last day of current month
        category: '',
        type: '',
    })

    useEffect(() => {
        getLedgerItems(filters).then((ledger) => setLedger(ledger));
        getCategories().then((categories) => setCategories(categories));
        setUpdateRequired(false);    
    }, [UpdateRequired])

    return (
        <main className='ledger'>
            <LedgerFilter
                categories={ categories }
                filters={ filters }
                setFilters={ setFilters }
                setUpdateRequired={ setUpdateRequired } />
            <NewLedgerItem 
                categories={ categories }
                setUpdateRequired={ setUpdateRequired }/>
            <LedgerHeader />
            <section className="ledger-items">
                { ledger.map((item) => (
                    <LedgerItem 
                        key={ item.id } 
                        item={ item }
                        setUpdateRequired={ setUpdateRequired } />
                ))}
            </section>
        </main>
    )
}