import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from 'recharts';

export default function MonthlyExpenseChartBody ({ data }) {
    return (
        <ResponsiveContainer width="90%" height="70%">
            <BarChart data={data}>
                <Bar dataKey="amount" fill="#8884d8" />
                <XAxis dataKey="name" interval={0} tickMargin={5}/>
                <YAxis interval={0}/>
            </BarChart>
        </ResponsiveContainer>
    )
}