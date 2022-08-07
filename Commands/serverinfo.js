const Discord = require("discord.js")
exports.run = (client, message, args) => {


  if(!message.author.id === '507239542127067136' || !message.author.id === '651284480417595396') return message.reply({content: "You cannot run this command!"});
  
 let embed = new Discord.MessageEmbed()
 .setColor("RANDOM")
 .setTitle("Server Info")
 .setImage(message.guild.iconURL)
 .setDescription(`${message.guild}'s Information.`)
 .addField("Member Count", `This server has ${message.guild.memberCount} member(s).`)
 .addField("Emoji Count", `This server has ${message.guild.emojis.cache.size} emoji(s).`)
 .addField("Roles Count", `This server has ${message.guild.roles.cache.size} role(s).`)
 message.channel.send( { embeds : [embed] } )
  }

exports.name = "serverinfo"
