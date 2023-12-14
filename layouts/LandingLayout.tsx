import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';
import { useEffect } from 'react';

interface Props {
  children: React.ReactNode;
  searchBar?: boolean;
}
async function loadJs(src, async, defer) {
  var body = document.getElementsByTagName('body')[0];
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = async;
  script.defer = defer;
  script.src = src;
  body.appendChild(script);
}
const LandingLayout = ({ children, searchBar }: Props) => {
  useEffect(() => {
    setTimeout(() => {
      loadJs('/scripts/e2def7a70466b4.6e38.js', false, false);
    }, 1);
  });
  return (
    <>
      {/* <Script src="/scripts/benedict.js" /> */}
      {/* <Head>
       */}
      <div className="flex flex-col mx-auto min-h-screen">
        <Header searchBar={searchBar} />
        <main className="w-full">{children}</main>
        <div className="flex flex-col justify-end grow">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default LandingLayout;
