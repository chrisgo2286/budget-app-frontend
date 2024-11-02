import React, { useState } from "react"
import ExpandIcon from "../../miscComponents/expandIcon/expandIcon"
import LedgerFilter from "./ledgerFilter"
import NewLedgerItem from "./newLedgerItem/newLedgerItem"

export default function HiddenLedgerSection () {

    const [ filtersVisible, setFiltersVisible ] = useState<boolean>(false);

    function handleExpandIconClick (): void {
        setFiltersVisible(!filtersVisible)
    }

    return (
        <React.Fragment>
            <ExpandIcon handleClick={ handleExpandIconClick }>
                { filtersVisible ? "expand_less" : "expand_more" }
            </ExpandIcon>
            <div className={ (!filtersVisible) ? "ledger-filter-container collapsed":"ledger-filter-container" }>
                <div className="filters-header" data-cy="filters-header">Filters</div>
                <LedgerFilter />
                <div className="new-ledger-header" data-cy="new-ledger-header">New Item</div>
                <NewLedgerItem />
            </div>
        </React.Fragment>
    )
}