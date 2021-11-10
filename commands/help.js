const Discord = require("discord.js")
const{ MessageActionRow, MessageSelectMenu, MessageEmbed }= require("discord.js")
const intents = new Discord.Intents(32767)
const client = new Discord.Client({ intents })
const fs = require('fs');

module.exports = {
  name: "help",
  alias: ["Help"],
  execute: async(client, message, args) => {

    message.react('✉️')

    let ddddd = message.author;

    const row = new MessageActionRow()
 .addComponents(
   new MessageSelectMenu()
   .setCustomId("Select")
   .setMaxValues(1)
    .setMinValues(1)
   .setPlaceholder("Select categories")
   .addOptions([
     {
       label: "Menu",
      description: "Back to menu",

       value: "first",
       emoji:"<:i5:904807838017290331>",
     },
     {
        label: " Administration",
       description: "Back to the administration category",
       value: "second",
       emoji: "<:i3:904806857871335525>",
     },
     {
        label: " Information",
       description: " Back to the information category",
       value: "third",
       emoji:"<:i4:904806853517664316>",
     },
     {
        label: " Fun",
       description: "Back to the fun category",
       value: "fourt",
       emoji: "<:i1:904806412650151987>",
     },
     {
        label: " Utility",
       description: "Back to the utility category",
        value: "quint",
        emoji: "<:i2:904807839984398396>",
     },
   ]),
 )

const embed = new MessageEmbed()
 .setTitle("Neon Z help")
 .setDescription("Welcome to the help section of Neon Z")
 .addField("Categories", "4")
 .addField("Administration", "Look at the administration commands")
 .addField("Information", "Look at the information commands")
 .addField("Fun", "Look at the fun commands")
 .addField("Utility", "Look at the utility commands")
 .setImage('https://cdn.discordapp.com/attachments/901271145490309148/904787843552018493/standard_4.gif')
 .setColor("00F3FF")

 let sendmsg = await ddddd.send({ content: "ㅤ", ephemeral: true, embeds: [embed], components: [row] })


 
 let embed1 = new MessageEmbed()
 .setTitle("Neon Z help")
 .setDescription("Welcome to the help section of Neon Z")
 .addField("Categories", "4")
 .addField("Administration", "Look at the administration commands")
 .addField("Information", "Look at the information commands")
 .addField("Fun", "Look at the fun commands")
 .addField("Utility", "Look at the utility commands")
 .setImage('https://cdn.discordapp.com/attachments/901271145490309148/904787843552018493/standard_4.gif')
 .setColor("00F3FF")
           
 let embed2 = new Discord.MessageEmbed()
  .setTitle("Administration")
 .setColor("00F3FF")
 .addField('ban <user> <reason>', 'Ban an user (ban members)')
 .addField('kick <user> <reason>', 'Kick an user (kick members)')
 .addField('purge <cantidad>', 'Massively delete messages (up to 99 per batch)(manage messages)')
 .addField('rolcreate <name>', 'Create a role quickly (manage roles)')
 .addField('roleadd <user> <rol>', 'Role a user quickly (manage roles)')
 .addField('rolremove <user> <rol>', 'Quickly remove the role from a user (manage roles)')
 .addField('say <something>', 'Say for admins (administrator)')

 let embed3 = new MessageEmbed()
 .setTitle("Information")
 .setColor("00F3FF")
 .addField('userinfo <user> (beta)', 'See the information of an user')
 .addField('serverinfo', 'Look at the server information')

  let embed4 = new MessageEmbed()
 .setTitle("Fun")
 .setColor("00F3FF")
 .addField('8ball <something>', 'Say something and the bot will reply something random')
 .addField('avatar <user>', `Look at someone's avatar`)
 .addField('hack <user>', 'Hack to someone')
 .addField('howgay', 'The bot tells you how gay you are')
 .addField('impostor <user>', 'It tells you if the user is an imposter or not')
 .addField('jumbo <server emoji>', 'See a large server emoji')
 .addField('kiss <user>', 'Kiss someone')
 .addField('logromc <something>', 'Say something and it will give it as if it were a minecraft achievement')
 .addField('spanishmeme', 'It gives you a random meme (can be repeated)')
 .addField('phcomment <something>', 'Say something and it will look like it is commented on pornhub')
 .addField('say <something>', 'The bot says something for you')
 .addField('slap <user>', 'Slap someone')

 let embed5 = new MessageEmbed()
 .setTitle("Utility")
 .setColor("00F3FF")
 .addField('createinvite', 'Create a quick invitation to your server')
 .addField('invite', 'Invite the bot')
 .addField('ping', 'Look at the bot latency')
 .addField('setprefix <prefix>', 'Customize the bot prefix (administrator)')
 .addField('server', 'Enter the Neon Z support server')
 .addField('servericon', 'Look at the server icon')
 .addField('slowmode <tiempo>', 'Slowmode the channel where you are (manage channels)')
 .addField('translate <oración> (beta)', 'Translate something from English to Spanish')



 const collector = sendmsg.createMessageComponentCollector({
            componentType: "SELECT_MENU"
        })

        collector.on("collect", async i => {
            if (i.values[0] === 'first') {
                await i.deferUpdate()
                i.editReply({ embeds: [embed1], components: [row] })
            }
            if (i.values[0] === 'second') {
                await i.deferUpdate()
                i.editReply({ embeds: [embed2], components: [row] })
            }
            if (i.values[0] === 'third') {
                await i.deferUpdate()
                i.editReply({ embeds: [embed3], components: [row] })
            }
            if (i.values[0] === 'fourt') {
                await i.deferUpdate()
                i.editReply({ embeds: [embed4], components: [row] })
            }
            if (i.values[0] === 'quint') {
                await i.deferUpdate()
                i.editReply({ embeds: [embed5], components: [row] })
            }

        })

  },
};