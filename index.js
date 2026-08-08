const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
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
