const Discord = require("discord.js")
const intents = new Discord.Intents(32767)
const client = new Discord.Client({ intents })
const fs = require('fs');

module.exports = {
  name: "userinfo",
  alias: ["whois"],
  execute: async(client, message, args) => {

    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member; 

        const embed = new Discord.MessageEmbed() 
            .setTitle(`${user.user.username} info`)
            .setColor("00F3FF")
            .setThumbnail(user.user.displayAvatarURL({dynamic : true})) 
            .addFields(
                {
                    name: "Nickname ",
                    value: user.nickname ? user.nickname : "None", 
                    inline: false
                },
                {
                    name: "Tag ",
                    value: `#${user.user.discriminator}`,
                    inline: false
                },
                {
                    name: "ID ",
                    value: user.user.id,
                },
                {
                    name: 'Account creation ',
                    value: user.user.createdAt.toLocaleDateString("es-pe"),
                    inline: false
                },
                {
                    name: 'Date of entry to the server ',
                    value: user.joinedAt.toLocaleDateString("es-pe"),
                    inline: false
                },
                {
                    name: 'Roles ',
                    value: user.roles.cache.map(role => role.toString()).join(" ,"),
                    inline: false
                }
            )

        await message.channel.send({embeds: [embed]})

  },
};