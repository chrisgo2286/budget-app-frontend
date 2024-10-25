export default function LedgerHeader (): JSX.Element {
    return (
        <section className="ledger-header mt-6" data-cy="ledger-header">
            <div>Date</div>
            <div>Category</div>
            <div>Type</div>
            <div>Amount</div>
            <div>Delete</div>
        </section>
    )
}