export default function YearlyStatsHeader ({ year, setYear }) {
    
    return (
        <div className="my-4 flex justify-between">
            <span 
                className="hover:cursor-pointer material-icons"
                onClick={ () => setYear(year - 1)}>navigate_before</span>
            <span className="text-3xl font-bold">{ year } Stats</span>
            <span 
                className="hover:cursor-pointer material-icons"
                onClick={ () => setYear(year + 1)}>navigate_next</span>
        </div>
    )
}