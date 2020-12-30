const express = require("express");
const app = express();
const path = require("path");
const PORT = 8000;

app.use(express.static(path.join(__dirname, "client", "build")));
app.get('/*', (req, res) => {
   res.sendFile(path.join(__dirname, '../', 'client', 'build', 'index.html'));
});

app.listen(PORT, () => {
   console.log(`Listening on port ${PORT}`);
});