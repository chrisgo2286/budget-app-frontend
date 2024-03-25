export default function LedgerItem ({ item }) {
    
    const { date, category, type, amount } = item;

    return (
        <div className='ledger-item'>
            <div>{ date }</div>
            <div>{ category }</div>
            <div>{ type }</div>
            <div>{ amount }</div>
            <div className='ledger-item-delete'>x</div>
        </div>
    )
}