const express = require("express")
const app = express();



app.listen(3000, () => {
console.log("Project is running!");
})

app.get("/", (req, res) => {
res.send("The bot is alive!!. This shows that the bot is up and running.");
})

const Discord = require("discord.js")
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});
const fs = require("fs");
const prefix = ("=");
client.commands = new Discord.Collection();
const commands = fs.readdirSync("./Commands").filter(file => file.endsWith(".js"));
for(file of commands) {
  const commandName = file.split(".")[0]
  const command = require(`./Commands/${commandName}`)
  client.commands.set(commandName, command)
}



client.on("ready", () => {
  console.log("Bot ready")
  console.log(`Logged in as ${client.user.tag}`)
  setInterval((message) => {
  client.user.setActivity("Alive and Chloe | =help",{type: "WATCHING"})
  }, 1000);
})



client.on("messageCreate", message => {
  if(message.content.startsWith(prefix)) {
    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const commandName = args.shift()
    const command = client.commands.get(commandName)
    if (!command) return
    command.run(client, message, args)
  }
})

client.on("messageCreate", message => {
if(message.content.includes("Dream Time")) {
  if(message.author != '235148962103951360') return message.reply({content: "Hold up, you ain't carl. Get your ass outta here."}).then(msg => {
         setTimeout(() => {
         msg.delete();
         }, 10000)
  })
message.reply("Fuck you Carl. Dream time Everyone😀😀.")
}

if(message.content.includes("Goodnight")) {
message.reply(`Good** **Night ${message.author}`)
}
  
if(message.content.includes("goodnight")) {
message.reply(`Good** **Night ${message.author}`)
}
  
if(message.content.includes("GoodNight")) {
message.reply(`Good** **Night ${message.author}`)
}
  
if(message.content.includes("good night")) {
message.reply(`Good** **Night ${message.author}`)
}
  
if(message.content.includes("Good Night")) {
message.reply(`Good** **Night ${message.author}`)
}
  
if(message.content.includes("good Night")) {
message.reply(`Good** **Night ${message.author}`)
}
  
if(message.content.includes("Good night")) {
message.reply(`Good** **Night ${message.author}`)
}
  

if(message.content.includes("GOOD NIGHT")) {
message.reply(`Good** **Night ${message.author}`)
}

  
  
})




const {token} = require(`./config.json`)
client.login(token)