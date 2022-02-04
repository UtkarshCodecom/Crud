const app = require("./app");
const connectDatabase = require("./config/database");

// Connecting to database
connectDatabase();

const server = app.listen(4000, () => {
  console.log(`Server is working on http://localhost:4000`);
});