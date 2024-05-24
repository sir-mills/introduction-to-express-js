import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";

const app = express();
const port = 3030;

app.use(morgan("dev"));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  req.status(200).send({
    message: "hello-world from express",
  });
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
