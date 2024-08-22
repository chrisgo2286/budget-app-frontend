import { PrevArrow, NextArrow, ReportHeader } from "../miscReportComponents"

export default function YearlyStatsHeader ({ year, handleYearChange }) {
    return (
        <div className="my-4 flex justify-between">
            <PrevArrow handleClick={ () => handleYearChange("prev")} />    
            <ReportHeader label={ year } Stats />
            <NextArrow handleClick={ () => handleYearChange("next")} />
        </div>
    )
}