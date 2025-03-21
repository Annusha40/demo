exports.handler = async (event) => {
    const { rawPath, requestContext } = event;
    const method = requestContext.http.method;

    if (rawPath === "/hello" && method === "GET") {
        return {
            statusCode: 200,
            body: JSON.stringify({
                statusCode: 200,
                message: "Hello from Lambda"
            }),
        };
    }

    return {
        statusCode: 400,
        body: JSON.stringify({
            statusCode: 400,
            message: `Bad request syntax or unsupported method. Request path: ${rawPath}. HTTP method: ${method}`
        }),
    };
};
