import express from 'express';
const app = express();
const PORT = process.env.PORT || 5000;

// Define sample data
const data = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
];

// Define a route to serve the data
app.get('/api/data', (req, res) => {
    res.json(data);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
