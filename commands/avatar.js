module.exports = {
	name: 'avatar',
	aliases: ['icon', 'pfp'],
	execute(message, args) {
        message.channel.send(`Your avatar: <${message.author.displayAvatarURL({ format: 'png', dynamic: true })}>`);
	},
};