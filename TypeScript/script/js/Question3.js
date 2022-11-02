var errorResponse = function () {
    return { valid: false, error: 'error occurred' };
};
var validator = function (validatorFn) {
    return errorResponse();
};
