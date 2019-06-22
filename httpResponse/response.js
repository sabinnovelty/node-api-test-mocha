const error = ( errorMsg , statusCode ,response )=>{
    response.status( statusCode || 500 ).json({
        error: errorMsg || 'Error occurred.'
    })
};

const success = ( data , response )=>{
    response.status(200).json({
        data:data,
        message:'ds'
    })
};

module.exports ={ error, success }