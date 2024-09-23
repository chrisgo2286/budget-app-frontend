import React, { useContext } from "react"
import { CategoriesContext, FileImportDataContext } from "../../misc/context"
import { compileCategoryNames } from "../../misc/miscFunctions"

type FileImportRowProps = {
    ndx: number,
    handleChange: (ndx: number, event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void,
    handleDeleteRow: (ndx: number) => void
}

export default function FileImportRow ({
    ndx,
    handleChange,
    handleDeleteRow
}: FileImportRowProps): JSX.Element {

    const { parsedData } = useContext(FileImportDataContext)
    const { categories } = useContext(CategoriesContext)
    const options = compileCategoryNames(categories)
    return (
        <>
            <input
                className="w-1/5 text-left" 
                type="text" 
                name={ `date-${ndx}` } 
                value={ parsedData[ndx].date } 
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(ndx, event) } />
            <div className="w-1/5 text-left">{ parsedData[ndx].description }</div>
            <input 
                className="w-1/5 text-left"
                type="number" 
                name={ `amount-${ndx}` } 
                value={ parsedData[ndx].amount} 
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(ndx, event) } />
            <select
                className="w-1/5 text-left"
                name={ `category-${ndx}` } 
                value={ parsedData[ndx].category } 
                onChange={(event: React.ChangeEvent<HTMLSelectElement>) => handleChange(ndx, event) } >
                    <option key="Category" value="Category">Category</option>
                    { options.map((option) => (
                    <option key={ option } value={ option }>{ option }</option>
                    ))}
            </select>
            <td 
                className="w-1/5 border-b border-gray-200 text-center hover:cursor-pointer hover:scale-110 hover:font-bold" 
                onClick={ () => handleDeleteRow(ndx) }>
                x
            </td>       
        </>
    )
}