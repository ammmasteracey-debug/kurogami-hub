import dynamic from 'next/dynamic';

const LoadScreen = dynamic(() => import('../components/LoadScreen'), { ssr: false });

export default function HomePage() {
  return <LoadScreen />;
}
