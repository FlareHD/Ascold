module.exports = {
	name: 'server',
	description: 'returns info on users',
	execute(message, args) {
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	},
};