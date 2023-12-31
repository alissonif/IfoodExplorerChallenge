require("express-async-errors");
const migrationsRun = require("./database/sqlite/migrations")

const AppError = require("./utils/AppError");
const express = require("express");
const routes = require("./routes/");
const cors = require("cors/");
const uploadConfig = require("./configs/upload");
const morgan = require("morgan");

migrationsRun();

const app = express();

app.use(cors());

app.use(express.json());

app.use(morgan('dev'))

app.use(routes);

app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER));

app.use((error, request, response, next) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message,
    });
  }

  console.error(error);
  return response.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});

const port = 3000;
app.listen(port, () => console.log('olá'));
