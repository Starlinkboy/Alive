const Discord = require('discord.js')
exports.run = async (client, message, args) => {
const axios = require("axios")
  let res = await axios.get(`http://api.popcat.xyz/meme`);
const memeEmbed = new Discord.MessageEmbed()
.setTitle(res.data.title)
.setFooter(`Upvotes: ${res.data.upvotes}`)
  .setTimestamp()
.setImage(res.data.image)
.setURL(res.data.url)
.setColor("ORANGE")
await message.reply({embeds:[memeEmbed]})
  }
exports.name = "meme"