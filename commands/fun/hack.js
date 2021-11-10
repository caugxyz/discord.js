const Discord = require("discord.js")
const intents = new Discord.Intents(32767)
const client = new Discord.Client({ intents })
const fs = require("fs")

 module.exports = {
    name: 'hack',
    description: '',
   execute: async (client, message, interaction) => {
     
        const user = message.mentions.members.first()
        if(!user) return message.channel.send("A quien vas a hackear? XD")
        if(user === message.member) return message.channel.send("No te puedes hackear tu mismo XD")

        const emails = [
            "CantGetAGirlFriendAwwSadge", "xiddauttewubo-4628", "zeffofinaba-8925", "weullaxoifuppa-8256", "sauruddopreimmo-8767"
        ]

        const domains = [
            "gmail",
            "hotmail",
            "outlook",
            "icloud",
        ]

        const passwords = [
            "SoyCulePro", "SoyPajero", "IamTheFuckinXD", "MyFatMom", "cPGbWNwdG", "YcdZXhUJW", "ueUMhApsR", "qMfMuxjtJ", "WzQPyYKuf"
        ]

        const ips = [
          "99.85.239.207", "233.158.25.210", "113.190.59.246", "201.250.4.163", "237.23.16.170", "36.128.172.0", "254.43.206.111", "42.169.139.224", "97.199.253.106", "144.5.179.182", "240.105.244.3", "79.61.68.94"
        ]

        const tarjetas = [
          "5239 2028 8162 0102", "4143 0863 6109 7404", "3712 3459 3786 5579", "5525 3008 2103 7727"
        ]

        const ubicaciones = [
          "Vigvejen, 4913 Horslunde, Denmark", "Jegenstorfstrasse 6, 3303 Zuzwil, Switzerland", "Paso Int Cardenal Samoré, Neuquén, Argentyna", "Pons, 15380 Anglards-de-Salers, France"
        ]

        const email = emails[Math.floor(Math.random() * emails.length)];
        const domain = domains[Math.floor(Math.random() * domains.length)];
        const password = passwords[Math.floor(Math.random() * passwords.length)];
        const ip = ips[Math.floor(Math.random() * ips.length)];
        const tarjeta = tarjetas[Math.floor(Math.random() * tarjetas.length)];
        const ubicaione = ubicaciones[Math.floor(Math.random() * ubicaciones.length)];

        if(user === message.guild.me) {
          message.reply('You will be hacked... :) \n\ ')
          const msg = await message.channel.send(`.`) 


          msg.edit(` **Discord account** \n\ Email: **${[email]}@${[domain]}.com**  \n\ Password: **${[password]}** \n\ **Personal information** \n\ Ip: **${[ip]}** \n\ card number: **${[tarjeta]}** \n\ Location: **${[ubicaione]}**`) 

          return;

        }

        if(user.bot) return message.channel.send(`No puedes hackear bots xd`);

        var msg = await message.channel.send(`Hacking **${user.displayName}** ...`) 

         setInterval(() => {
          msg.edit(`**Discord account** \n\ Email: **${[email]}@${[domain]}.com**  \n\ Password: **${[password]}** \n\ **Personal information** \n\ Ip: **${[ip]}** \n\ card number: **${[tarjeta]}**  \n\ Location: **${[ubicaione]}**`) 
        }, 3000)


    },
};