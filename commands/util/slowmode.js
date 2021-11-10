const Discord = require("discord.js")
const intents = new Discord.Intents(32767)
const client = new Discord.Client({ intents })
const fs = require('fs');
const ms = require('ms')

module.exports = {
  name: "slowmode",
  alias: ["Slowmode"],
  execute: async(client, message, args) => {

    if(!message.member.permissions.has('MANAGE_CHANNELS')) return message.channel.send('You do not have permissions');

		if (!args[0]) {
			return message.channel.send('You must specify a time');
		}

		const currentCooldown = message.channel.rateLimitPerUser;

		const reason = args[1] ? args.slice(1).join(' ') : 'no reason';

		const embed = new Discord.MessageEmbed()
			.setFooter(`${message.author.tag} | ${message.author.id}`, message.author.displayAvatarURL({ dynamic: true }));

		if (args[0] === 'off') {
			if (currentCooldown === 0) return message.channel.send('The cooldown on this channel is off');

			message.channel.send(`Slowmode disabled`)
			return message.channel.setRateLimitPerUser(0, reason);
		}

		const time = ms(args[0]) / 1000;

		if (Number.isNaN(time)) {
			return message.channel.send(`**${args[0]}** it is not a valid time`);
		}
      	
      	if(args[0].startsWith('-')) return message.channel.send('You can not use negative numbers')

		if (time >= 21600) {
			return message.channel.send('That slow mode limit is too high, please enter a value less than 6 hours');
		}

		if (currentCooldown === time) {
			return message.channel.send(`The slowmode is already set to ${args[0]}`);
		}

		embed.setTitle('Slowmode enabled')
			.addField('Slowmode: ', args[0])
			.addField('Reason: ', reason)
			.setColor(0x00F3FF);

		const msg = await message.channel.setRateLimitPerUser(time, reason);
		message.channel.send({embeds:[embed]})

  },
};