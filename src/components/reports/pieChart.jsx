import { Pie } from "react-chartjs-2";

export default function PieChart ({ budget }) {

    const data = {
        labels: validCategories().map((item) => item.category),
        datasets: [
            {
                label: "Monthly Expenditure",
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
        <div className="pie-chart">
            <Pie
                data={ data }
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: "Monthly Expenditure"
                        }
                    }
                }} />
        </div>
    )
}