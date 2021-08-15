import { getCommand, getTextFromMessage } from '@utils/helpers';
import { MessageEmbed } from 'discord.js';

import { botCommands } from './bot-commands';

const mapCommand = async (value: string): Promise<MessageEmbed | string> => {
	const command: string = getCommand(value);

	const response: Function | undefined = botCommands.get(command);

	if (!response) {
		throw new Error('Command not found');
	}

	const text: string = getTextFromMessage(value);

	return await response(text);
};

export { mapCommand };
