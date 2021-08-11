import { Message } from 'discord.js';

const validateMessage = (msg: Message): boolean => {
	if (msg.channel.type === 'dm' || msg.channel.type === 'news') {
		return false;
	}

	if (msg.author.bot) {
		return false;
	}

	if (msg.embeds.length > 0) {
		return false;
	}

	return true;
};

export default validateMessage;
