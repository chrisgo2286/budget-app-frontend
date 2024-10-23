import { useContext } from "react";
import { deleteLedgerItem } from "../../misc/apiCalls";
import { LedgerItemProps } from "./ledgerTypes";
import { LedgerContext } from "../../misc/context";

export default function LedgerItem ({ 
    item, 
}: LedgerItemProps): JSX.Element {
    
    const { date, id, category__name, category__type, amount } = item;
    const { setLedgerUpdate } = useContext(LedgerContext)

    function handleDelete (): void {
        deleteLedgerItem(id);
        setLedgerUpdate(true);
    }

    function formatType (): string {
        return item.category__type.split("_")[0]
    }

    return (
        <div className='ledger-item' data-cy="ledger-item">
            <div data-cy="ledger-item-date">{ date }</div>
            <div data-cy="ledger-item-category">{ category__name }</div>
            <div data-cy="ledger-item-type">{ formatType() }</div>
            <div data-cy="ledger-item-amount">{ amount }</div>
            <div 
                className='ledger-item-delete'
                data-cy={`ledger-item-delete-${category__name.toLowerCase()}`}
                onClick={ handleDelete }>x</div>
        </div>
    )
}