import { SongCreateScreen } from '@/src/components/screens/song-create/SongCreateScreen';
import Head from 'next/head';

export default function SongCreate() {
  return (
    <>
      <Head>
        <title>Music App | Create song</title>
        <meta name="description" content="Music app | Create" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <SongCreateScreen />
    </>
  );
}
