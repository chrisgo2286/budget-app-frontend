import React from "react";

export default function LedgerHeader () {
    return (
        <section className="ledger-header" data-cy="ledger-header">
            <div>Date</div>
            <div>Category</div>
            <div>Type</div>
            <div>Amount</div>
            <div>Delete</div>
        </section>
    )
}