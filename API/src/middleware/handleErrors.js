/**
 * The function `handleErrors` logs an error message and returns a JSON response with a 500 status code
 * and a "Something went wrong" message.
 * @param res - The `res` parameter is the response object that is used to send the response back to
 * the client. It is typically an instance of the `Response` class in a web framework like Express.js.
 * @param error - The `error` parameter is the error object that is thrown or caught in the code. It
 * contains information about the error, such as the error message, stack trace, and any additional
 * properties or data associated with the error.
 * @returns a response with a status code of 500 and a JSON object containing a message property with
 * the value "Something went wrong".
 */
const handleErrors = (res, error) => {
  console.error(error);
  return res.status(500).json({
    message: "Something went wrong",
  });
};

export default handleErrors;
