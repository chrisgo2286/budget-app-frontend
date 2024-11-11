import { useContext } from "react";
import { deleteLedgerItem } from "../../../misc/apiCalls";
import { LedgerItemProps } from "../ledgerTypes";
import { LedgerContext } from "../../../misc/context";
import { useNavigate } from "react-router-dom";
import { navToUpdateLedgerItem } from "../../../misc/navFunctions";

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

    function createDataCy (name: string): string {
        return `ledger-item-${name}-${category__name.toLowerCase()}`
    }

    return (
        <div 
            className='ledger-item' 
            data-cy={ `ledger-item-${category__name.toLowerCase()}` } 
            onClick={ handleClick }>
            <div data-cy={ createDataCy("date") }>{ date }</div>
            <div data-cy={ createDataCy("category") }>{ category__name }</div>
            <div data-cy={ createDataCy("type") }>{ formatType() }</div>
            <div data-cy={ createDataCy("amount") }>{ amount }</div>
            <div 
                className='hover:text-2xl hover:text-gray-600'
                data-cy={ createDataCy("delete") }
                onClick={ (event) => handleDelete(event) }>x</div>
        </div>
    )
}