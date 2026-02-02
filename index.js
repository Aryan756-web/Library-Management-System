const express = require('express');

const app = express();

const PORT = 8081;

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({
        message : "Home Page of Library Management System"
    })
});

app.use((req, res) => {
    res.status(500).json({
        message : "Not built yet"
    })
})

app.listen(PORT, () => {
    console.log(`Library Management System is running on port http://localhost:${PORT}`);
});