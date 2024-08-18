export default function MonthlyExpenseChartHeader ({ setPeriod }) {
    return (
        <div className="mt-4 flex justify-between">
            <span className="material-icons">navigate_before</span>
            <span className="text-xl">Monthly Expense</span>
            <span className="material-icons">navigate_next</span>
        </div>
    )
}