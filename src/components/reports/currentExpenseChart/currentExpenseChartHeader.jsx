export default function CurrentExpenseChartHeader ({ monthName, setPeriod }) {
    return (
        <div className="mt-4 flex justify-between">
            <span className="material-icons">navigate_before</span>
            <span className="text-xl">{ monthName } Expenses</span>
            <span className="material-icons">navigate_next</span>
        </div>
    )
}