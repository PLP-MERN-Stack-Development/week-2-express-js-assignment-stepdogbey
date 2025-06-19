module.exports = (err, req, res, next) => {
  // Log the full error stack for debugging
    console.error(err.stack); 
    res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
  };