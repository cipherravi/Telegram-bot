const dotenv = require("dotenv");
dotenv.config();

module.exports = { BOT_TOKEN: process.env.BOT_TOKEN, PORT: process.env.PORT };
