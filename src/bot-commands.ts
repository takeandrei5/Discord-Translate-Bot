import translations from '@constants/message-embeds';
import Field from '@interfaces/field';
import translateText from '@utils/translations';
import { MessageEmbed } from 'discord.js';

import TranslateTargets from './enums/translate-targets';

const addTranslationFields = (messageEmbed: MessageEmbed): MessageEmbed => {
	const newMessageEmbed: MessageEmbed = messageEmbed;

	translations.forEach((translation: Field) => {
		messageEmbed.addField(translation.title, translation.description);
	});

	return newMessageEmbed;
};

const botCommands = new Map<string, Function>([
	[
		'!help',
		() => {
			const messageEmbed = new MessageEmbed()
				.setTitle('InterpreterBot Available Commands')
				.setFooter('Maximum length of each translated text is 25 characters.');

			return addTranslationFields(messageEmbed);
		},
	],
	['!translate-english', (text: string) => translateText(text, TranslateTargets.English)],
	['!translate-french', (text: string) => translateText(text, TranslateTargets.French)],
	['!translate-german', (text: string) => translateText(text, TranslateTargets.German)],
]);

export { botCommands };
