exports.handler = async (event) => {
    const { rawPath, requestContext } = event;
    const method = requestContext.http.method;

    if (rawPath === "/hello" && method === "GET") {
        return {
            statusCode: 200,
            body: JSON.stringify("Hello from Lambda!"),
        };
    }

    return {
        statusCode: 400,
        body: JSON.stringify({
            message: `Bad Request: Cannot ${method} ${rawPath}`,
        }),
    };
};
