const errorHandler = (err, req, res, next) => {
    res.status(err.status || 500).json({ message: err.message || 'Internal Server Error' });
};

module.exports = errorHandler;
console.log("error handelers is ready to use");
