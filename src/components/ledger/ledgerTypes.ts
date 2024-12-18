export type LedgerTypes = {
    id: string,
    date: string,
    category__name: string,
    category__type: string,
    amount: string
}

export type LedgerItemProps = {
    item: LedgerTypes
}