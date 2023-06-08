import { FunctionComponent, ReactNode, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export interface IProps {
  main: ReactNode;
}

const Layout: FunctionComponent<IProps> = ({ main }) => {
  const [auth, setAuth] = useState(true);

  return (
    <div className="bg-green-500 mx-auto">
      <nav className="bg-black text-white" style={{ height: '64px' }}>
        <div className="px-3 flex items-center justify-between h-16">
          <Link href="/">
            <Image
              src="/cropped-favicon.png"
              alt="recipe icon"
              className="inline w-12"
              width="40"
              height="40"
            />
          </Link>
          {auth ? (
            <>
              <div>
                <Link href="/">Home</Link>
                {' | '}
                <Link href="/recipes">Recipes</Link>
                {' | '}
                <Link href="/recipes/add">Add Recipe</Link>
              </div>

              <div className="flex">
                <button className="pr-2" onClick={() => setAuth(false)}>
                  Logout
                </button>
              </div>
            </>
          ) : (
            <button onClick={() => setAuth(true)}>Sign in</button>
          )}
        </div>
      </nav>
      <main style={{ minHeight: 'calc(100vh - 64px)' }}>{main}</main>
    </div>
  );
};

export default Layout;
