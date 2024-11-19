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
            <td className="w-1/5 text-left">
                <input
                    type="text" 
                    name={ `date-${ndx}` } 
                    value={ parsedData[ndx].date }
                    data-cy={ `parsed-data-date-${ndx}` } 
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(ndx, event) } />
            </td>
            <td className="w-1/5 text-left">
                <div data-cy={ `parsed-data-description-${ndx}` }>
                    { parsedData[ndx].description }
                </div>
            </td>
            <td className="w-1/5 text-left">
                <input 
                    type="number" 
                    name={ `amount-${ndx}` } 
                    value={ parsedData[ndx].amount} 
                    data-cy={ `parsed-data-amount-${ndx}` }
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(ndx, event) } />
            </td>
            <td className="w-1/5 text-left">
                <select
                    name={ `category-${ndx}` } 
                    value={ parsedData[ndx].category }
                    data-cy={ `parsed-data-category-${ndx}` }
                    onChange={(event: React.ChangeEvent<HTMLSelectElement>) => handleChange(ndx, event) } >
                        <option key="Category" value="Category">Category</option>
                        { options.map((option) => (
                        <option key={ option } value={ option }>{ option }</option>
                        ))}
                </select>
            </td>
            <td 
                className="w-1/5 border-b border-gray-200 text-center hover:cursor-pointer hover:scale-110 hover:font-bold" 
                data-cy={ `parsed-data-delete-${ndx}` }
                onClick={ () => handleDeleteRow(ndx) }>
                x
            </td>       
        </>
    )
}