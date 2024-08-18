export default function MonthlyStatsBody ({ data }) {
    return (
        <div className="flex flex-col items-center px-4">
            <div className="text-2xl my-2">
                <i className="text-xl">Spent </i> 
                ${ data?.expenses }
            </div>
            <div className="text-2xl my-2">
                <i className="text-xl">Earned </i>
                ${ data?.income }
            </div>
            <div className="text-2xl my-2">
                <i className="text-xl">Saved </i>
                ${ data?.savings }
            </div>
            <div className="text-2xl my-2">
                <i className="text-xl">Percent of Budget </i>
                { data?.budgetPercent }%
            </div>
        </div>
    )
}