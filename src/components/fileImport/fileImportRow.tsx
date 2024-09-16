import React, { useContext, useState } from "react"
import { CategoriesContext, FileImportDataContext } from "../../misc/context"
import { compileCategoryNames } from "../../misc/miscFunctions"

type FileImportRowProps = {
    ndx: number,
    handleChange: (ndx: number, event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
}

export default function FileImportRow ({
    ndx,
    handleChange
}: FileImportRowProps): JSX.Element {

    const { parsedData } = useContext(FileImportDataContext)
    const { categories } = useContext(CategoriesContext)
    const options = compileCategoryNames(categories)
    return (
        <React.Fragment>
            <input
                className="" 
                type="text" 
                name={ `date-${ndx}` } 
                value={ parsedData[ndx].date } 
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(ndx, event) } />
            <select
                className=""
                name={ `category-${ndx}` } 
                value={ parsedData[ndx].category } 
                onChange={(event: React.ChangeEvent<HTMLSelectElement>) => handleChange(ndx, event) } >
                { options.map((option) => (
                    <option key={ option } value={ option }>{ option }</option>
                ))}
            </select>
            <input 
                type="number" 
                name={ `amount-${ndx}` } 
                value={ parsedData[ndx].amount} 
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(ndx, event) } />       
        </React.Fragment>
    )
}