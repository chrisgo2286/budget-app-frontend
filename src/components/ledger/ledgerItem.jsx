export default function LedgerItem ({ item }) {
    
    const { date, category__name, category__type, amount } = item;

    return (
        <div className='ledger-item'>
            <div>{ date }</div>
            <div>{ category__name }</div>
            <div>{ category__type }</div>
            <div>{ amount }</div>
            <div className='ledger-item-delete'>x</div>
        </div>
    )
}