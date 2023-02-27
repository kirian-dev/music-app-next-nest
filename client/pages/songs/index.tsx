import { SongScreens } from '@/src/components/screens/songs/SongsScreen';
import Head from 'next/head';

export default function Songs() {
  return (
    <>
      <Head>
        <title>Music App | Songs</title>
        <meta name="description" content="Music app | Songs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <SongScreens />
    </>
  );
}
