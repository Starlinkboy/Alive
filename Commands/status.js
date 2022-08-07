const Discord = require("discord.js")
exports.run = (client, message, args) => {


   let totalSeconds = (client.uptime / 1000);
let days = Math.floor(totalSeconds / 86400);
totalSeconds %= 86400;
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = Math.floor(totalSeconds % 60);

  
  const embed = new Discord.MessageEmbed()
 .setTitle("Status")
 .setDescription("Alive's Status: [Click here to see Alive's Status](https://statuspage.freshping.io/61340-Alive)")
    .addField("Uptime", `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`)
 .setColor("ORANGE")
.setImage(client.displayAvatarURL)
 message.channel.send( { embeds : [embed] } )

}
exports.name = "status"