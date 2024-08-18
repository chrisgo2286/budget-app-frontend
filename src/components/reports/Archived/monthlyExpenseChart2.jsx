import { Bar } from "react-chartjs-2";

export default function MonthlyExpenseChart ({ expenses }) {

    const data = {
        labels: expenses.labels,
        datasets: [
            {
                label: "Monthly Expense",
                data: expenses.actuals,
                backgroundColor: "blue",
                borderColor: "black",
                borderWidth: 2
            },
            {
                type: 'line',
                label: "Total Budget",
                data: [5000, 5000, 5000, 5000, 5000, 5000],
                backgroundColor: "blue",
                borderColor: "black",
                borderWidth: 2
            }
        ]
    }

    return (
        <div className="bar-chart">
            <Bar
                data={ data }
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: "Total Monthly Expense"
                        }
                    }
                }} />
        </div>
    )
}