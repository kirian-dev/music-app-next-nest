import Head from 'next/head';
import { SongInfoScreen } from '@/src/components/screens/song-info/SongInfoScreen';

export default function SongInfo() {
  return (
    <>
      <Head>
        <title>Music App | Song info</title>
        <meta name="description" content="Music app | Song info" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <SongInfoScreen />
    </>
  );
}
