import { HomeScreen } from '@/src/components/screens/home/HomeScreen';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Music App</title>
        <meta name="description" content="Music app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <HomeScreen />
    </>
  );
}
