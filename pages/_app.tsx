import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { IntlProvider } from 'react-intl';
import { useRouter } from 'next/router';

const defaultLocale = 'en';
const locales = ['de', 'dk', 'br'];

const messages = locales.reduce<{ [key: string]: {} }>((acc, cur) => {
  try {
    acc[cur] = require(`../.locales/${cur}.json`);
  } catch {}
  return acc;
}, {});

function MyApp({ Component, pageProps }: AppProps) {
  const { locale = 'de' } = useRouter();

  return (
    <IntlProvider locale={locale} defaultLocale={defaultLocale} messages={messages[locale]}>
      <Component {...pageProps} />
    </IntlProvider>
  );
}

export default MyApp;
