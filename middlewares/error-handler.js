function handleError(error ,request, response , next) {
    try {
          response.json({error:error.message });
    } catch (error) {
          next()
    } 
}
module.exports = handleError;