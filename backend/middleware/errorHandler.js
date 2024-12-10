const errorHandler = (err, req, res, next) => {
    res.status(err.status || 500).json({ message: err.message || 'Internal Server Error' });
};

module.exports = errorHandler;
console.log("Error handler is ready to use");
