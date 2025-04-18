import { createInstance } from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { initReactI18next } from 'react-i18next/initReactI18next'
import { getOptions } from './settings'

const initI18next = async (lang: string, namespace: string) => {
	const i18nInstance = createInstance()
	await i18nInstance
		.use(initReactI18next)
		.use(
			resourcesToBackend(
				(lng: string, ns: string) =>
					import(`./locales/${lng}/${ns}.json`)
			)
		)
		.init(getOptions(lang, namespace))
	return i18nInstance
}

export async function getTranslation(
	lang: string,
	namespace: string,
	options: any = {}
) {
	const i18nextInstance = await initI18next(lang, namespace)
	return {
		t: i18nextInstance.getFixedT(lang, namespace, options.keyPrefix),
		i18n: i18nextInstance,
	}
}
