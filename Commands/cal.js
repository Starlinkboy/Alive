const Discord = require("discord.js")
const math = require('mathjs');
exports.run = (client, message, args) => {
 
`\`\`\`js\n\`\`\``
       try {
         const a = args.join("")
         const b = math.evaluate(args.join(""))
            
              const embed = new Discord.MessageEmbed()
              .setTitle("Calculation")
                .setDescription(`**Input:** \n${a}\n\n**Output:**\n ${b}\n\n**Calculation Type: **\nAddition`)
         .setColor("GREEN")

         const embed1 = new Discord.MessageEmbed()
              .setTitle("Calculation")
                .setDescription(`**Input:**\n ${a}\n\n**Output:** \n${b}\n\n**Calculation Type: **\nSubtraction`)
         .setColor("GREEN")

         const embed2 = new Discord.MessageEmbed()
              .setTitle("Calculation")
                .setDescription(`**Question:**\n ${a}\n\n**Answer:** \n${b}\n\n**Calculation Type: **\nMultiplication`)
         .setColor("GREEN")

         const embed3 = new Discord.MessageEmbed()
              .setTitle("Calculation")
              .setDescription(`**Input:**\n ${a}\n\n**Output:**\n ${b}\n\n**Calculation Type: **\nDivision`)
         .setColor("GREEN")

         const e = new Discord.MessageEmbed()
              .setTitle("Enter an Input!")
         .setColor("RED")
         
              
         if (message.content.includes("+")) return message.channel.send( { embeds : [embed] } )  

         if (message.content.includes("-")) return message.channel.send( { embeds : [embed1] } )

         if (message.content.includes("*")) return message.channel.send( { embeds : [embed2] } )

         if (message.content.includes("/")) return message.channel.send( { embeds : [embed3] } )

        if (!a) return message.channel.send( { embeds : [e] } )
              
        } catch (e) {
         
         const em = new Discord.MessageEmbed()
              .setTitle("Your Input is not Valid!")
         .setColor("RED")
         
            console.log(e);
         message.channel.send( { embeds : [em] } )

        }
  }
exports.name = "calc"
