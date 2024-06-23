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
    const [ filtersVisible, setFiltersVisible ] = useState(false);
    const [ errors, setErrors ] = useState([]);

    useEffect(() => {
        getCategories().then((categories) => setCategories(categories));
        getLedgerItems(filters, categories).then((ledger) => setLedger(ledger));
        setUpdateRequired(false);    
    }, [UpdateRequired])

    return (
        <main className='ledger-page'>
            <div className="ledger">
                <Validation errors={ errors } />
                <div className="expand-icon">
                    <i 
                        className="material-icons"
                        data-cy="expand-icon"
                        onClick={() => setFiltersVisible(!filtersVisible)}>
                        { filtersVisible ? "expand_less" : "expand_more" }
                    </i>
                </div>

                <div className={ (!filtersVisible) ? "filter-container collapsed":"filter-container" }>
                    <div className="filters-header" data-cy="filters-header">Filters</div>
                    <LedgerFilter
                        categories={ categories }
                        filters={ filters }
                        setFilters={ setFilters }
                        setUpdateRequired={ setUpdateRequired } />
                    <div className="new-ledger-header" data-cy="new-ledger-header">New Item</div>
                    <NewLedgerItem 
                        categories={ categories }
                        setUpdateRequired={ setUpdateRequired }
                        setErrors={ setErrors }/>
                </div>

                <div className="ledger-title">Ledger</div>
                <LedgerHeader />
                <section className="ledger-items" data-cy="ledger-items">
                    { ledger.map((item) => (
                        <LedgerItem 
                            key={ item.id } 
                            item={ item }
                            setUpdateRequired={ setUpdateRequired } />
                    ))}
                </section>
            </div>
        </main>
    )
}