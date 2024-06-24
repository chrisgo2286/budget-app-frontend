import { deleteLedgerItem } from "../../misc/apiCalls";

export default function LedgerItem ({ item, setUpdateRequired }) {
    
    const { date, id, category__name, category__type, amount } = item;

    function handleDelete () {
        deleteLedgerItem(id);
        setUpdateRequired(true);
    }

    return (
        <div className='ledger-item' data-cy="ledger-item">
            <div data-cy="ledger-item-date">{ date }</div>
            <div data-cy="ledger-item-category">{ category__name }</div>
            <div data-cy="ledger-item-type">{ category__type }</div>
            <div data-cy="ledger-item-amount">{ amount }</div>
            <div 
                className='ledger-item-delete'
                data-cy={`ledger-item-delete-${category__name.toLowerCase()}`}
                onClick={ handleDelete }>x</div>
        </div>
    )
}