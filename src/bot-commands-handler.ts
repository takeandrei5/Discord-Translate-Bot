import { getCommand, getTextToBeTranslated } from '@utils/helpers';
import { MessageEmbed } from 'discord.js';

import { botCommands } from './bot-commands';

const mapCommand = async (value: string): Promise<MessageEmbed | string> => {
	const command: string = getCommand(value);

	const response: Function = botCommands.get(command) || Function();
	const text: string = getTextToBeTranslated(value);

	return await response(text);
};

export { mapCommand };
