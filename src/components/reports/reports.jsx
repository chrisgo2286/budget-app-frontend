import CurrentExpenseChart from "./currentExpenseChart/currentExpenseChart";
import MonthlyExpenseChart from "./monthlyExpenseChart/monthlyExpenseChart";
import MonthlySavingsChart from "./monthlySavingsChart/monthlySavingsChart";
import MonthlyStats from "./monthlyStats/monthlyStats";
import YearlyStats from "./yearlyStats/yearlyStats";
import "./reports.css";

export default function Reports () {

    return (
        <main className="reports-page">
            <div className="reports">
                <MonthlyStats />
                <YearlyStats />
                <MonthlyExpenseChart />
                <CurrentExpenseChart />
                <MonthlySavingsChart />
            </div>
        </main>
    )
}