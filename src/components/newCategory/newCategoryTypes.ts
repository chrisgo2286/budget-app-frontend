export type CategoriesType = string[]

export type NewCategoryTypes = {
    owner?: number,
    id?: string,
    name: string,
    type: string
}

export type NewCategoryProps = {
    setErrors: React.Dispatch<React.SetStateAction<string[]>>,
    setUpdateRequired: React.Dispatch<React.SetStateAction<boolean>>
}