const Discord = require("discord.js")
exports.run = (client, message, args) => {
 const embed = new Discord.MessageEmbed()
 .setTitle("Help:")
 .setDescription("\n=ping : Bot Ping\n=ban : ban member(Usage : =ban @member reason)\n=kick : kicks member\n=avatar : gets user avatar\n=status : gives the bot's status\n=cal question : Calculation command. only supports +, -,*,/\n=meme : sends random meme\n",)
 .addField("NSFW", "=por type = porn in types.\n Types: ass, boobs, pussy, gif \n=hentai: anime porn")
 .setColor("RANDOM")

  const embed1 = new Discord.MessageEmbed()
 .setTitle("Help:")
 .setDescription("\n=ping : Bot Ping\n=ban : ban member(Usage : =ban @member reason)\n=kick : kicks member\n=avatar : gets user avatar\n=serverinfo : server info\n=status : gives the bot's status\n=cal question : Calculation command. only supports +, -,*,/\n=meme : sends random meme\n",)
    .addField("Alive", "=alive = Help for alive\n=shutdown = Turns the bot off\n=say = says something\n=serverinfo = server info\n=eval = runs js code on discord API")
    .addField("NSFW", "=por type = porn in types.\n Types: ass, boobs, pussy, gif \n=hentai: anime porn")
 .setColor("RANDOM")

  if(message.author.id === '507239542127067136' || message.author.id === '651284480417595396') return message.channel.send( { embeds : [embed1] } );

  
 message.channel.send( { embeds : [embed] } )
}

exports.name = "help"

