import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { IntlProvider } from 'react-intl';
import { useRouter } from 'next/router';
// import de from '../locales/compiled/de.json';
import i18nconfig from '../git18n.config.json';
import { getMessages } from 'git18n';

// DUMMY

const messages: {} = i18nconfig.translations.map((t) => {
  try {
    return { [t]: require(`../node_modules/git18n/locales/${t}.json`) };
  } catch (error) {
    return { [t]: {} };
  }
});

// import {sum} from "git18n";
// const messages = getMessages("de,fr,es,it");

// const TRANSLATIONS = ['de_at', 'de', 'da'];

const DEFAULT_LOCALE = 'en';
const getLocale = (locale?: string) => {
  if (locale && locale.startsWith('de')) {
    return 'de';
  }

  return DEFAULT_LOCALE;
};

function MyApp({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();
  const localeToUse = getLocale(locale);
  const messages = getMessages();

  return (
    <IntlProvider locale={localeToUse} defaultLocale={i18nconfig.defaultLanguage} messages={messages}>
      <Component {...pageProps} />
    </IntlProvider>
  );
}

export default MyApp;
