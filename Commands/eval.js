const Discord = require("discord.js")
exports.run = (client, message, args) => {

 const notowner = new Discord.MessageEmbed()
.setDescription("Only the bot owner can use this command")
.setColor("RED")
const owners_id = ["507239542127067136"];
 if (!owners_id.includes(message.author.id))
 return message.channel.send( { embeds : [notowner] } ); const args2 = message.content.split(" ").slice(1);

 const clean = text => {
 if (typeof(text) === "string")
 return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
 else
 return text;
}
 
 try {
 const code = args2.join(" ");
 let evaled = eval(code);
const lmao = message.content.slice("".length).trim().split(/ +/);
lmao.shift().toLowerCase().split(" ")[0]
 const { inspect } = require("util");
const output = clean(evaled)

 const eval2 = new Discord.MessageEmbed()
 .addField("Input", `\`\`\`js\n${lmao.join(" ")}\`\`\``)
 .addField("Output", `\`\`\`js\n${output} | Executed\`\`\``)
   .setColor("GREEN")
   
 
 
message.channel.send( { embeds : [eval2] } )
 } catch (err) {
   console.log(err)
   const embed = new Discord.MessageEmbed()
   .setTitle("Error")
   .setDescription(`\`\`\`xl\n${clean(err)}\n\`\`\``)
   .setColor("RED")
   .addField("User: ", `${message.author}`)
 message.channel.send( { embeds : [embed] } )
   console.log(`Eval Used by: ${message.author.tag}`)
 }
};

exports.name = "eval"


