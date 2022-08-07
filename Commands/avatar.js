const Discord = require("discord.js")
exports.run = (client, message, args) => {
  let user = message.mentions.users.first() || message.member || message.author;
  if(!user) return
 const embed = new Discord.MessageEmbed()
 .setTitle("Avatar Command")
 .setDescription("Here is the user's avatar: ",)
 .setColor("ORANGE")
.setImage(user.displayAvatarURL({ dynamic: true }))
 message.channel.send( { embeds : [embed] } )
}

exports.name = "avatar"
