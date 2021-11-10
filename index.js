const Discord = require('discord.js')
const intents = new Discord.Intents(513)
const client = new Discord.Client({ intents })
const fs = require('fs')
const db = require('megadb')
const prefix_db = new db.crearDB('prefixes')

///////  PRESENCIA  ////////

   function presence(){
     client.user.setPresence({
       status: 'idle',
     })
   };

client.on('ready', () => {
 console.log("Bot Listo!")
 presence();
})

//////////// COMMAND HANDLER /////////

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))
for(const file of commandFiles) {
    const command = require(`./commands/${file}`)
    client.commands.set(command.name, command)
}


const funCommandFiles = fs.readdirSync('./commands/fun').filter(file => file.endsWith('.js'))
for(const file of funCommandFiles) {
    const command = require(`./commands/fun/${file}`)
    client.commands.set(command.name, command)
}

const administrationCommandFiles = fs.readdirSync('./commands/administration').filter(file => file.endsWith('.js'))
for(const file of administrationCommandFiles) {
    const command = require(`./commands/administration/${file}`)
    client.commands.set(command.name, command)
}

const infoCommandFiles = fs.readdirSync('./commands/info').filter(file => file.endsWith('.js'))
for(const file of infoCommandFiles) {
    const command = require(`./commands/info/${file}`)
    client.commands.set(command.name, command)
}

const utilCommandFiles = fs.readdirSync('./commands/util').filter(file => file.endsWith('.js'))
for(const file of utilCommandFiles) {
    const command = require(`./commands/util/${file}`)
    client.commands.set(command.name, command)
}

////////// MENSAJES /////////

client.on('messageCreate', async message => {
  
    const servidor = message.guild.id
    
    let prefix = prefix_db.has(message.guild.id) ? await prefix_db.get(message.guild.id) : "n/" ;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase(); 

    if(message.author.bot) return;

    if(!message.content.startsWith(prefix)) return;

    const command = client.commands.find((c) => c.name === cmd || c.alias && c.alias.includes(cmd))

    try {
        command.execute(client,message,args)
    } catch(err) {
    }
    
})

client.on('interactionCreate', async interaction => {
  if(Discord.Interaction.isCommand()){
    const cmd = client.slashcommand.get(interaction.commandName)
    if(!cmd) return

    try {
      await cmd.run(client, interaction)
    } catch (e) {
      console.log(e)
      return message.reply(`Hubo un error **${e}**`)
    }
  }
})

//////// KEEP ALIVE /////////

process.on('unhandledRejection', (err) => console.error(err))


client.login(process.env.TOKEN)