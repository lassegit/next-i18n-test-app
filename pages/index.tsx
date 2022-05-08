import type { NextPage } from 'next';
import Head from 'next/head';
import { useIntl, FormattedMessage } from 'react-intl';

const Home: NextPage = () => {
  const intl = useIntl();
  const title = intl.formatMessage({
    defaultMessage: 'Testing translation integration!!#@!#!#!@',
    description: 'An even better title Title of the page',
  });

  return (
    <div>
      <FormattedMessage defaultMessage="Replicated message." />
      <Head>
        <title>{title}</title>
      </Head>
      <h1>
        <FormattedMessage defaultMessage="Hello and welcome to my website!" description="H1 page title" />
        <FormattedMessage defaultMessage="Replicated message." />
      </h1>
      <h2>
        <FormattedMessage
          defaultMessage="This is a website used to test different translation integrations."
          description="Sub title"
        />
      </h2>
      <p>
        <FormattedMessage defaultMessage="This website is built with Next.js and React Intl." />
      </p>

      <p>
        <FormattedMessage
          description="A custom user message message"
          defaultMessage="My name is {firstName} {lastName}"
          values={{ firstName: 'John', lastName: 'Doe' }}
        />
      </p>
      <FormattedMessage defaultMessage="Replicated message." />
    </div>
  );
};

export default Home;
