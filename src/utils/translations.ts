import { v2 } from '@google-cloud/translate';

require('dotenv').config();

const translate = new v2.Translate({ key: process.env.GOOGLE_TRANSLATE_TOKEN });

const translateText = async (text: string, translateTarget: string): Promise<string> => {
	const [translations] = await translate.translate(text, translateTarget);

	return translations;
};

export default translateText;
