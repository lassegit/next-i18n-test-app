import React from 'react';
import { FormattedMessage, FormattedDate, FormattedNumber } from 'react-intl';

export default function Index() {
  return (
    <div>
      <FormattedMessage defaultMessage="Welcome to User page..." /> <br />
      <FormattedMessage defaultMessage="This is user page." /> <br />
      <FormattedNumber value={123456789} /> <br />
      <FormattedDate value={new Date()} dateStyle="long" /> <br />
    </div>
  );
}
