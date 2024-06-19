import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState, useEffect } from "react";
import { getBudgetItems } from "../../misc/apiCalls";
import PieChart from "./pieChart";
import "./reports.css";

Chart.register(CategoryScale);

// Pie Chart of Expenditures
//

export default function Reports () {
    const [ budget, setBudget ] = useState([]);

    useEffect(() => {
        const filters = {month: 6, year: 2024}
        getBudgetItems(filters)
        .then((data) => setBudget(data));
    }, [])

    return (
        <main className="reports-page">
            <div className="reports">
                <PieChart budget={ budget } />
                <PieChart budget={ budget } />
                <PieChart budget={ budget } />
                <PieChart budget={ budget } />
            </div>
        </main>
    )
}