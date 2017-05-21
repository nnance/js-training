import express from "express";
const app = express();

app.get("/", (req, res) => {
    const name = "Nick";
    res.send(`Hello World! ${name}`);
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
