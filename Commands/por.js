const Discord = require("discord.js")
exports.run = async (client, message, args) => {
    if(!message.channel.nsfw) {
     message.reply("This channel dosen't support nsfw content")
     
     } 
    else {
        const say = message.content.split(" ")
     const content = say.slice(1).join(" ")
     if (!content) return message.channel.send("Enter a Type!\nTypes: ass, boob, pussy, gif")
     if(content === "ass")
     {
      const axios = require("axios")
      let res = await axios.get(`https://meme-api.herokuapp.com/gimme/ass`);
      const memeEmbed = new Discord.MessageEmbed()
        .setTitle("Porn - Alive")
        .setFooter(`Credits: Alive (The Bot not the dude)`)
        .setImage(res.data.url)
        .setColor("WHITE")
      await message.reply({ embeds: [memeEmbed] })
     }

     if(content === "gif")
     {
      const axios = require("axios")
      let res = await axios.get(`https://meme-api.herokuapp.com/gimme/porn_gifs`);
      const memeEmbed = new Discord.MessageEmbed()
        .setTitle("Porn - Alive")
        .setFooter(`Credits: Alive (The Bot not the dude)`)
        .setImage(res.data.url)
        .setColor("WHITE")
      await message.reply({ embeds: [memeEmbed] })
     }

     if(content === "boobs")
     {
      const axios = require("axios")
      let res = await axios.get(`https://meme-api.herokuapp.com/gimme/boobs`);
      const memeEmbed = new Discord.MessageEmbed()
        .setTitle("Porn - Alive")
        .setFooter(`Credits: Alive (The Bot not the dude)`)
        .setImage(res.data.url)
        .setColor("WHITE")
      await message.reply({ embeds: [memeEmbed] })
     }

     if(content === "pussy")
     {
      const axios = require("axios")
      let res = await axios.get(`https://meme-api.herokuapp.com/gimme/pussy`);
      const memeEmbed = new Discord.MessageEmbed()
        .setTitle("Porn - Alive")
        .setFooter(`Credits: Alive (The Bot not the dude)`)
        .setImage(res.data.url)
        .setColor("WHITE")
      await message.reply({ embeds: [memeEmbed] })
     }

    }
    }
    