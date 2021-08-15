import validateMessage from '@validators/message-validator';
import Discord, { Message, MessageEmbed } from 'discord.js';

import { mapCommand } from './src/bot-commands-handler';

require('dotenv').config();

const client: Discord.Client = new Discord.Client();

client.on('ready', () => {
	console.log(`Logged in as ${client.user!.tag}!`);
});

client.on('message', async (msg: Message) => {
	if (!validateMessage(msg)) {
		return;
	}

	try {
		const translatedMessage: MessageEmbed | string = await mapCommand(msg.content);

		if (!translatedMessage) {
			return `${msg.author.toString()}, I'm sorry, I couldn't translate that`;
		}

		const result: string = `${msg.author.toString()}, here is the translation: ${translatedMessage}`;
		return msg.channel.send(result);
	} catch (error) {
		console.error('Encountered error: ', error);
	}
});

client.login(process.env.CLIENT_TOKEN);
