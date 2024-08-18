export default function MonthlyStatsHeader ({ monthName, setPeriod }) {
    return (
        <div className="my-4 flex justify-between">
            <span className="hover:cursor-pointer material-icons">navigate_before</span>
            <span className="text-3xl font-bold">{ monthName } Stats</span>
            <span className="hover:cursor-pointer material-icons">navigate_next</span>
        </div>
    )
}