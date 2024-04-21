import { useEffect, useState } from "react";
import LedgerHeader from "./ledgerHeader";
import LedgerItem from "./ledgerItem";
import NewLedgerItem from "./newLedgerItem";
import LedgerFilter from "./ledgerFilter";
import Validation from "../validation/validation";
import { getLedgerItems, getCategories } from "../../misc/apiCalls";
import './ledger.css';

export default function Ledger () {

    const [ ledger, setLedger ] = useState([])
    const [ categories, setCategories ] = useState([])
    const [ UpdateRequired, setUpdateRequired ] = useState(false)
    const [ filters, setFilters ] = useState({
        startDate: '',
        endDate: '', 
        category: '',
        type: '',
    })
    const [ errors, setErrors ] = useState([]);

    useEffect(() => {
        getCategories().then((categories) => setCategories(categories));
        getLedgerItems(filters, categories).then((ledger) => setLedger(ledger));
        setUpdateRequired(false);    
    }, [UpdateRequired])

    return (
        <main className='ledger'>
            <Validation errors={ errors } />
            <LedgerFilter
                categories={ categories }
                filters={ filters }
                setFilters={ setFilters }
                setUpdateRequired={ setUpdateRequired } />
            <NewLedgerItem 
                categories={ categories }
                setUpdateRequired={ setUpdateRequired }
                setErrors={ setErrors }/>
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