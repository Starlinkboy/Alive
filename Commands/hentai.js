const Discord = require('discord.js')
exports.run = async (client, message, args) => {
if(!message.channel.nsfw) {
 message.reply("This channel dosen't support nsfw content")
 
 } 
else {
  const axios = require("axios")
  let res = await axios.get(`https://meme-api.herokuapp.com/gimme/hentai`);
  const memeEmbed = new Discord.MessageEmbed()
    .setTitle("Porn - Alive")
    .setFooter(`Credits: Alive (The Bot not the dude)`)
    .setImage(res.data.url)
    .setColor("WHITE")
  await message.reply({ embeds: [memeEmbed] })
}
}
