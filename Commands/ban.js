const Discord = require('discord.js')
module.exports.run = (client, message, args) =>{
  const say = message.content.split(" ")
 const content = say.slice(2).join(" ")

 const member = message.mentions.members.first()
 if (!member) return message.channel.send('You need to mention a user.')
 if (!message.member.permissions.has('BAN_MEMBERS')) return message.channel.send('You lack the required permissions')
 if (member.permissions.has('BAN_MEMBERS') || member.permissions.has('BAN_MEMBERS')) return message.channel.send('This user seems to be a an admin/mod, I cannot do that action on them')

 try {
 member.ban().then(() => {
   message.delete()
 const embed = new Discord.MessageEmbed()
 .setTitle(`${member} was banned!`)
 .setDescription(`**Reason: **\n${content}`)
 .setColor("RED")
   message.author.send( { embeds : [embed] })
   message.channel.send( { embeds : [embed] })
 })
 } catch (err) {
 console.log(err)
 message.channel.send('Oops, something went wrong.')
 }




}

module.exports.name = "ban" 
