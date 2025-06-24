// middleware/errorHandler.js

export const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
};

export const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    console.error("🔥 Error Handler:", err.message);
    res.status(statusCode).json({
        status: "error",
        message: err.message || "Internal Server Error",
    });
};
  