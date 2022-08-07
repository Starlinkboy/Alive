const Discord = require("discord.js")
exports.run = (client, message, args) => {

if(!message.author.id === '507239542127067136' || !message.author.id === '651284480417595396' || !message.author.id === '764169129548054529') return message.reply({content: "You cannot run this command!"});
  
  
  const embed = new Discord.MessageEmbed()
 .setDescription("Haha no",)
 .setColor("RED")
  message.delete()
 const say = message.content.split(" ")
 const content = say.slice(1).join(" ")

  if (!content) return message.channel.send("Enter a message!")
  
 if (message.content.includes("@everyone")) return message.channel.send( { embeds : [embed] } )
  
message.channel.send(`${content}`)
 }
exports.name = "say"