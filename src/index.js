require("dotenv").config();
const express = require("express");
const cors = require("cors");

const router = require("./routes/router");
const userRouter = require("./routes/userRoutes");
const concertRouter = require("./routes/concert.route");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({ origin: true, credentials: true }));

app.use("/", router);
app.use("/user", userRouter);
app.use("/concert", concertRouter);

app.listen(process.env.SERVER_PORT, () => {
  console.log("Server Running");
});
