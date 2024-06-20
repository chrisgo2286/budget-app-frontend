import { Doughnut } from "react-chartjs-2";

export default function CurrentExpenseChart ({ budget }) {

    const data = {
        labels: validCategories().map((item) => item.category),
        datasets: [
            {
                label: "Expense",
                data: validCategories().map((item) => item.actual_amount),
                backgroundColor: ["blue", "red", "orange"],
                borderColor: "black",
                borderWidth: 2
            }
        ]
    }

    function validCategories () {
        return budget.filter((item) => item.actual_amount > 0)
    }

    return (
        <div className="doughnut-chart">
            <Doughnut
                data={ data }
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: "Current Monthly Expense"
                        }
                    }
                }} />
        </div>
    )
}