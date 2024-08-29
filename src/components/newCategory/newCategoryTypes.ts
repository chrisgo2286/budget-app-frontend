export type CategoriesType = string[]

export type NewCategoryTypes = {
    owner?: number,
    name: string,
    type: string
}

export type NewCategoryProps = {
    categories: CategoriesType, 
    setErrors: React.Dispatch<React.SetStateAction<string[]>>,
    setUpdateRequired: React.Dispatch<React.SetStateAction<boolean>>
}