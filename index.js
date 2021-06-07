const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});



client.on('message', message => {
	if (message.content === `${prefix}ping`) {
		// send back "Pong." to the channel the message was sent in
		message.channel.send('Pong.');
	} else if (message.content === `${prefix}server`) {
		message.channel.send(`Server name: ${message.guild.name}.\nTotal members: ${message.guild.memberCount}.\n This server was created on ${message.guild.createdAt}.\n The server region is ${message.guild.region}.`);
	}
	
});



client.login(token);