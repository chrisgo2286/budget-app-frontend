import React, { useContext } from "react"
import LedgerItem from "./ledgerItem"
import { LedgerContext } from "../../../misc/context"

export default function LedgerTableBody () {
    const { ledger } = useContext(LedgerContext)

    return (
        <React.Fragment>
            <LedgerTableHeader />
            <section className="ledger-items" data-cy="ledger-items">
            { ledger.map((item) => (
                <LedgerItem key={ item.id } item={ item } />
            ))}
        </section>
        </React.Fragment>
    )
}

function LedgerTableHeader (): JSX.Element {
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