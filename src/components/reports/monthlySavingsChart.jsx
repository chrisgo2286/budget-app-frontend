import { Bar } from "react-chartjs-2";

export default function MonthlySavingsChart ({ savings }) {

    const data = {
        labels: savings.labels,
        datasets: [
            {
                label: "Savings",
                data: savings.savings,
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
                            text: "Monthly Savings"
                        }
                    }
                }} />
        </div>
    )
}