const { Client, GatewayIntentBits } = require("discord.js");
const http = require("http");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

// Port for Render
const PORT = process.env.PORT || 3000;

http.createServer((req, res) => {
  res.writeHead(200);
  res.end("Discord bot is running!");
}).listen(PORT, () => {
  console.log(`Web server running on port ${PORT}`);
});

client.once("ready", () => {
  console.log(`تم تشغيل البوت: ${client.user.tag}`);
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  if (message.content === "!ping") {
    message.reply("البوت يعمل ✅");
  }

  if (message.content === "ق") {
    await message.channel.permissionOverwrites.edit(
      message.guild.roles.everyone,
      { SendMessages: false }
    );

    message.reply("🔒 تم قفل الشات.");
  }

  if (message.content === "ف") {
    await message.channel.permissionOverwrites.edit(
      message.guild.roles.everyone,
      { SendMessages: true }
    );

    message.reply("🔓 تم فتح الشات.");
  }
});

client.login(process.env.DISCORD_TOKEN);
