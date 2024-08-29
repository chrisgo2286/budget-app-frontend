export type RegistrationTypes = {
    username: string,
    password1: string,
    password2: string
}

export type NewUserFieldsProps = {
    fields: RegistrationTypes,
    setFields: React.Dispatch<React.SetStateAction<RegistrationTypes>>,
    handleSubmit: () => void
}