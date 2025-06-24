// 404 Not Found Handler
app.use((req, res, next) => {
    res.status(404).json({
        status: "fail",
        message: "Route not found"
    });
});

// Global Error Handler
app.use((err, req, res, next) => {
    console.error("🔥 Error Handler:", err.message);
    res.status(err.status || 500).json({
        status: "error",
        message: err.message || "Internal Server Error"
    });
});
