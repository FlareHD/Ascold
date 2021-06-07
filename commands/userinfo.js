module.exports = {
	name: 'user-info',
	description: 'Shows username and their ID.',
	execute(message, args) {
		message.channel.send(`Your username: ${message.author.tag}\nYour ID: ${message.author.id}`);
	},
};