const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("643855301061115947")
setInterval(function() {
channel.send(`سسalaه`);
}, 30)
})

client.login(process.env.BOT_TOKEN);