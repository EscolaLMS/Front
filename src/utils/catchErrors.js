const catchErrors = (error, displayError) => {
    let errorMsg;
    if (error.response) {
        errorMsg = error.response.data;
        // console.error("Error response", errorMsg.description);

        // for image upload
        if(error.response.data.error){
            errorMsg = error.response.data.error.message;
        }
    } else if (error.request) {
        // Request made but no response recieved
        errorMsg = error.request;
        // console.error("Error request", errorMsg);
    } else  {
        // console.error("Error message", errorMsg);
    }

    displayError(errorMsg);
}

export default catchErrors;