const dotenv = require("dotenv");
const express = require("express");
const app = express();
dotenv.config();

// connectDB
const connectDB = require("./db/connect");

const authenticateUser = require("./middleware/authentication");

// routers
const travelPackageRouter = require("./routes/travelPackages");
const authRouter = require("./routes/auth");
const selectedPackageRouter = require("./routes/selectedPackage");

// error handlers
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.use(express.json());

// routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/packages", travelPackageRouter);
app.use("/api/v1/selected-packages", authenticateUser, selectedPackageRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5003;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
