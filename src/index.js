const express = require("express");
const routes = require("./routes");

const app = express();

app.use(express.json());

app.use(routes);

const PORT = process.env.PORT || 3000;
const start = () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server is running on port http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error.message);
  }
};

start();
