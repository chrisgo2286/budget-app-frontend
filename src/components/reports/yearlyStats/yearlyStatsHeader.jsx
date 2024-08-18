export default function YearlyStatsHeader ({ year, setPeriod }) {
    return (
        <div className="my-4 flex justify-between">
            <span className="hover:cursor-pointer material-icons">navigate_before</span>
            <span className="text-3xl font-bold">{ year } Stats</span>
            <span className="hover:cursor-pointer material-icons">navigate_next</span>
        </div>
    )
}