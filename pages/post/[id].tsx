import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useRouter } from 'next/router';

export default function Post() {
  const router = useRouter();
  const { id } = router.query;
  const name = 'John';
  const lastName = 'Doe';

  return (
    <div>
      <FormattedMessage defaultMessage="Welcome to Post page..." /> <br />
      <FormattedMessage
        defaultMessage="This is post for: {id}. Welcome to {name} {lastName}."
        values={{ id, name, lastName }}
      />
    </div>
  );
}
