import React from 'react';
import Head from 'next/head';

const index = () => {
  return (
    <Head>
      <title>Chat-App</title>
      <meta name="description" content="this app is chat-application use a socket.io nextjs typescript and tailwindcss" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-Color" content="#5843E4" />
      <link rel="icon" href="/favicon.png" />
    </Head>

  );
};

export default index;