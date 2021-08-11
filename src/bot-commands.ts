import {
    translateEnglishCommandField,
    translateFrenchCommandField,
    translateGermanCommandField,
} from '@constants/message-embeds';
import translateText from '@utils/translations';
import { MessageEmbed } from 'discord.js';

import TranslateTargets from './enums/translate-targets';

const botCommands = new Map<string, Function>([
	[
		'!help',
		() =>
			new MessageEmbed()
				.setTitle('InterpreterBot Available Commands')
				.setFooter('Maximum length of each translated text is 25 characters.')
				.addField(
					translateEnglishCommandField.title,
					translateEnglishCommandField.description
				)
				.addField(
					translateFrenchCommandField.title,
					translateFrenchCommandField.description
				)
				.addField(
					translateGermanCommandField.title,
					translateGermanCommandField.description
				),
	],
	['!translate-english', (text: string) => translateText(text, TranslateTargets.English)],
	['!translate-french', (text: string) => translateText(text, TranslateTargets.French)],
	['!translate-german', (text: string) => translateText(text, TranslateTargets.German)],
]);

export { botCommands };
