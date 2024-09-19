type RawDataProp = {
    rawData: string[][]
}

export default function RawData ({ 
    rawData 
}: RawDataProp): JSX.Element {

    const clippedData = clipData(rawData)
    const columns = clippedData[0]?.length + 1

    function clipData (rawData: string[][]): string[][] {
        if (rawData.length > 10) {
            return rawData.slice(0,10)
        } else {
            return rawData
        }
    }
    return (
        <table className="table-fixed w-1/2 mx-auto mt-10 border border-gray-200">
            <RawDataHeader columns={ columns } />
            <RawDataBody clippedData={ clippedData } />
        </table>
    )
}

function RawDataHeader ({columns}: {columns: number}): JSX.Element {

    function createHeaders (): JSX.Element[] {
        let headers = []
        for( let i=0; i<columns; i++) {
            headers.push(
                <th key={ i } className="text-left">Col { i + 1 }</th>
            )
        }
        return headers;
    }

    return (
        <thead>
            { createHeaders().map((header) => (
                header
            ))}
        </thead>
    )
}

function RawDataBody ({ clippedData }: {clippedData: string[][]}): JSX.Element {
    return (
        <tbody>
            { clippedData.map((line, row) => (
                <tr className="border-b border-gray-200" key={ row }>
                    { line.map((item, col) => (
                        <td className="text-left" key={ col }>{ item }</td>
                    ))}
                </tr>
            ))}
        </tbody>
    )
}