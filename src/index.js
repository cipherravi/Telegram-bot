const express = require("express");
const app = express();
const config = require("./config");
const { Telegraf } = require("telegraf");
const { message } = require("telegraf/filters");
const bot = new Telegraf(config.BOT_TOKEN);

bot.start((ctx) => ctx.reply("Welcome"));
bot.help((ctx) => ctx.reply("Send me a sticker"));
bot.on(message("sticker"), (ctx) => ctx.reply("👍"));
// bot.on(message("text"), async (ctx) => {
//   // Explicit usage
//   await ctx.telegram.sendMessage(
//     ctx.message.chat.id,
//     `Hello ${ctx.state.role}`
//   );
//   //   // Using context shortcut
//   //   await ctx.reply(`Hello ${ctx.state.role}`);
// });

bot.hears(["hi", "HI", "hello"], (ctx) => ctx.reply("Hey there"));
bot.hears(["how are you"], (ctx) => ctx.reply("I am good, how are you?"));
bot.hears(["i am fine"], (ctx) => ctx.reply("good to hear "));
bot.hears(["thik ho"], (ctx) => ctx.reply("bahut 😇"));
bot.launch();

// // Enable graceful stop
// process.once("SIGINT", () => bot.stop("SIGINT"));
// process.once("SIGTERM", () => bot.stop("SIGTERM"));

app.listen(config.PORT, () => {
  console.log("Server is running on port " + config.PORT);
});
