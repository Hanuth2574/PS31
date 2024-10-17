// pages/index.tsx or app/page.tsx (depending on your Next.js version)
import dynamic from 'next/dynamic';
import Hero from './Hero';
import App from './ThreeCanvas';
import Scane from './Scane';

// Dynamically import the Model component
const Model = dynamic(() => import('./Model'), { ssr: false });

export default function Home() {
  return (
    <div>
      <Hero />
      <Scane/>
   <App/>

    </div>
  );
}
