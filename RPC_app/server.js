const express = require('express');
const app = express();
app.use(express.json()); // Middleware to automatically parse JSON

app.post('/add', (req, res) => {
    const { x, y } = req.body; // Demarshalling: Parses the incoming JSON into JavaScript objects
    const result = x + y;
    res.json({ result }); // Marshalling: Converts the JavaScript object {result} into JSON for the response
});

const port = 3030;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
