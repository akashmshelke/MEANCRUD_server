function createResponse(error, result) {
    let status = 'success';
    let data = result;
    if (error) {
        status = 'error';
        data = error;
    }

    return { status: status, data: data };
}

module.exports = {
    createResponse: createResponse
};