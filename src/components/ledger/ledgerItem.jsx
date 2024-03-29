import { deleteLedgerItem } from "../../misc/apiCalls";

export default function LedgerItem ({ item, setUpdateNeeded }) {
    
    const { date, id, category__name, category__type, amount } = item;

    function handleDelete () {
        deleteLedgerItem(id);
        setUpdateNeeded(true);
    }

    return (
        <div className='ledger-item'>
            <div>{ date }</div>
            <div>{ category__name }</div>
            <div>{ category__type }</div>
            <div>{ amount }</div>
            <div 
                className='ledger-item-delete'
                onClick={ handleDelete }>x</div>
        </div>
    )
}