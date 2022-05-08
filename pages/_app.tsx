import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { IntlProvider } from 'react-intl';
import { useRouter } from 'next/router';

const defaultLocale = 'en';
const locales = ['de', 'dk'];

const messages = locales.reduce<{ [key: string]: {} }>((acc, cur) => {
  try {
    console.log(cur);
    acc[cur] = require(`../node_modules/git18n/locales/${cur}.json`);
  } catch (err) {
    console.log(err);
  }
  return acc;
}, {});

console.log({ messages });

function MyApp({ Component, pageProps }: AppProps) {
  const { locale = 'en' } = useRouter();

  return (
    <IntlProvider locale={locale} defaultLocale={defaultLocale} messages={messages[locale]}>
      <Component {...pageProps} />
    </IntlProvider>
  );
}

export default MyApp;
