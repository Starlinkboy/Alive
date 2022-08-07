const Discord = require("discord.js")
exports.run = (client, message, args) => {
message.delete()


if(!message.author.id === '507239542127067136' || !message.author.id === '651284480417595396') return message.reply({content: "You cannot run this command!"});
 
   
 const say = message.content.split(" ")
 const content = say.slice(1).join(" ")
 
const embed = new Discord.MessageEmbed()
 .setTitle(`Bot Shut Down!!`)
 .setDescription(`Bot was successfully shut down by ${message.author}\nReason: ${content}`)
.setFooter("Bot will be offline until switched on.")
  .setColor("RED")
 message.channel.send( { embeds : [embed] } ).then(() => {process.exit(); })



                        }
exports.name = "shutdown"



 