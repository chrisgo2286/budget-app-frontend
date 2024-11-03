import { useContext } from "react";
import { deleteLedgerItem } from "../../misc/apiCalls";
import { LedgerItemProps } from "./ledgerTypes";
import { LedgerContext } from "../../misc/context";
import { useNavigate } from "react-router-dom";
import { navToUpdateLedgerItem } from "../../misc/navFunctions";

export default function LedgerItem ({ 
    item, 
}: LedgerItemProps): JSX.Element {
    
    const navigate = useNavigate()
    const { date, id, category__name, category__type, amount } = item;
    const { setLedgerUpdate } = useContext(LedgerContext)

    function handleDelete (event: React.MouseEvent<HTMLDivElement>): void {
        event.stopPropagation();
        deleteLedgerItem(id);
        setLedgerUpdate(true);
    }

    function formatType (): string {
        return item.category__type.split("_")[0]
    }

    function handleClick (): void {
        navToUpdateLedgerItem(navigate, item)
    }

    return (
        <div 
            className='ledger-item' 
            data-cy="ledger-item"
            onClick={ handleClick }>
            <div data-cy="ledger-item-date">{ date }</div>
            <div data-cy="ledger-item-category">{ category__name }</div>
            <div data-cy="ledger-item-type">{ formatType() }</div>
            <div data-cy="ledger-item-amount">{ amount }</div>
            <div 
                className='hover:text-2xl hover:text-gray-600'
                data-cy={`ledger-item-delete-${category__name.toLowerCase()}`}
                onClick={ (event) => handleDelete(event) }>x</div>
        </div>
    )
}