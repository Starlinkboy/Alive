const Discord = require("discord.js")
exports.run = (client, message, args) => {
 const mem = message.mentions.members.first()
 if (!mem) return message.channel.send('You need to mention a user.')
  if (mem => member.user.bot) return message.channel.send('Bots cannot be kicked. Please try kicking a member.')
 if (!message.mem.permissions.has('KICK_MEMBERS')) return message.channel.send('You lack the required permissions')
 if (mem.permissions.has('KICK_MEMBERS') || mem.permissions.has('BAN_MEMBERS')) return message.channel.send('User is higher or equal to me. Cannot kick')

 try {
 member.kick().then(() => {
 message.channel.send(`Nitro Kicked ${mem} succesfully`)
 })
 } catch (err) {
 console.log(err)
 message.channel.send('Oops, something went wrong ')
 }
}

