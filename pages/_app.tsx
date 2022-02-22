import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { IntlProvider } from 'react-intl';
import { useRouter } from 'next/router';
import de from '../locales/compiled/de.json';

const DEFAULT_LOCALE = 'en';
const TRANSLATIONS = ['de-at', 'de', 'da'];

const getLocale = (locale?: string) => {
  if (locale && locale.startsWith('de')) {
    return 'de';
  }

  return DEFAULT_LOCALE;
};

function MyApp({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();
  const localeToUse = getLocale(locale);
  const messages = { de, en: {} };

  return (
    <IntlProvider locale={localeToUse} defaultLocale={DEFAULT_LOCALE} messages={de}>
      <Component {...pageProps} />
    </IntlProvider>
  );
}

export default MyApp;
