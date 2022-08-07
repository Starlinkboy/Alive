const Discord = require("discord.js")
exports.run = (client, message, args) => {

 if(!message.author.id === '507239542127067136' || !message.author.id === '651284480417595396') return message.reply({content: "You cannot run this command!"});
 
  const embed = new Discord.MessageEmbed()
 .setTitle("Alive's Help for Alive(Only alive and star can use this menu)")
 .setDescription("=alive = Help for alive\n=shutdown = Turns the bot off\n=say = says something\n=serverinfo = server info",)
 .setColor("RANDOM")
 message.channel.send( { embeds : [embed] } )
}

exports.name = "devhelp"