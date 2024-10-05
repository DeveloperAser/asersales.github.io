const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve the .tsk file
app.get('/', (req, res) => {
    const filePath = path.join(__dirname, 'aser-sales-tracker.tsk');
    res.download(filePath);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
