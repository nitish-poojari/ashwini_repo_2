interface CustomResponse {
    valid: boolean
    error: string
}
const errorResponse = (): CustomResponse => {
    return { valid: false, error: 'error occurred' }
}
const validator = (validatorFn?: () => CustomResponse): CustomResponse => {
    return errorResponse()
}