module.exports = function errorHandler(error, req, res, next) {
  if (res.headersSent) {
    return next(error);
  }
  if (error.name === 'ValidationError') {
    return res.status(400).json({ error: error.message });
  }

  res.status(error.status || 500).json({ error: error.message || 'Internal Server Error' });
};
