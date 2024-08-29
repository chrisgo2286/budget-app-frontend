export type LoginFieldsProps = {
    fields: LoginFieldsTypes,
    setFields: React.Dispatch<React.SetStateAction<LoginFieldsTypes>>,
    handleSubmit: () => Promise<void>
}

export type LoginFieldsTypes = {
    username: string,
    password: string
}