import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineController,
    LineElement
} from 'chart.js';
import { useState, useEffect } from "react";
import { getBudgetItems, getReports } from "../../misc/apiCalls";
import CurrentExpenseChart from "./currentExpenseChart";
import MonthlyExpenseChart from "./monthlyExpenseChart";
import MonthlySavingsChart from './monthlySavingsChart';
import "./reports.css";

ChartJS.register(
    CategoryScale,
    LinearScale,
    ArcElement,
    Tooltip,
    Legend,
    BarElement,
    PointElement,
    LineController,
    LineElement
);


export default function Reports () {
    const [ filters, setFilters ] = useState({
        month: 6,
        year: 2024,
    })
    const [ budget, setBudget ] = useState([]);
    const [ reports, setReports ] = useState([]);

    useEffect(() => {
        getBudgetItems(filters)
        .then((data) => setBudget(data));

        getReports()
        .then((data) => setReports(data));        
    }, [filters])

    return (
        <main className="reports-page">
            <div className="reports">
                <CurrentExpenseChart budget={ budget } />
                <MonthlyExpenseChart expenses={ reports.monthlyExpense ?? [] } />
                <MonthlySavingsChart savings={ reports.monthlySavings ?? [] } />
                <CurrentExpenseChart budget={ budget } />
            </div>
        </main>
    )
}