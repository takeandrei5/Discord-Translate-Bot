import Discord, { MessageEmbed } from 'discord.js';

import { mapCommand } from './src/bot-commands-handler';
import validateMessage from '@validators/message-validator';

require('dotenv').config();

const client: Discord.Client = new Discord.Client();

client.on('ready', () => {
	console.log(`Logged in as ${client.user!.tag}!`);
});

client.on('message', async (msg) => {
	if (!validateMessage(msg)) {
		return;
	}

	const translatedMessage: MessageEmbed | string | undefined = await mapCommand(msg.content);

	if (translatedMessage) {
		const result: string = `${msg.author.toString()}, here is the translation: ${translatedMessage}`;
		return msg.channel.send(result);
	}
});

client.login(process.env.CLIENT_TOKEN);
