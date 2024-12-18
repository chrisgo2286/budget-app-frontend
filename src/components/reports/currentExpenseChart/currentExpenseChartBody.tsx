import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts";
import { CurrentExpenseItemTypes } from "../../../misc/hooks";

export default function CurrentExpenseChartBody ({ 
    data 
}: { data: CurrentExpenseItemTypes[]}) {

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#0088FE', '#00C49F', '#FFBB28', '#FF8042']

    function renderLabel ({name, amount}: {name: string, amount: string}) {
        return (amount) ? name : null;
    }

    return (
        <ResponsiveContainer width="90%" height="70%">
            <PieChart width={ 300 } height={ 300 }>
                <Pie data={ data } cx="50%" dataKey="amount" label={ renderLabel } labelLine={ false } fill="#8884d8">
                    { data.map((entry, index) => {
                        return <Cell key={ `cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    })}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    )
}