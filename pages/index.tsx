import { Inter } from 'next/font/google';
import Layout from '@/components/layout';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <Layout
      main={
        <div className={`${inter.className}`}>
          <div className="text-3xl p-3 text-black">Welcome</div>
        </div>
      }
    />
  );
}
