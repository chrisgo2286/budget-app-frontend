import { PrevArrow, NextArrow, ReportHeader } from "../miscReportComponents"
import { YearlyStatsHeaderProps } from "./yearlyStatsTypes"

export default function YearlyStatsHeader ({ 
    year, 
    handleYearChange 
}: YearlyStatsHeaderProps): JSX.Element {
    return (
        <div className="my-4 flex justify-between">
            <PrevArrow handleClick={ () => handleYearChange("prev")} />    
            <ReportHeader label={ year } Stats />
            <NextArrow handleClick={ () => handleYearChange("next")} />
        </div>
    )
}