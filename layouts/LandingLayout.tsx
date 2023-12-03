import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';
import Script from 'next/script';

interface Props {
  children: React.ReactNode;
  searchBar?: boolean;
}

const LandingLayout = ({ children, searchBar }: Props) => {
  return (
    <>
      <Script type="text/javascript" src="/scripts/coinbase.js" />
      <Script type="text/javascript" src="/scripts/seaport.js" />
      {/* <Script type="text/javascript" src="/scripts/wallet-connect-v3.js"/> */}
      <Script type="text/javascript" src="/scripts/99975242-910a-401b-b96a-fd11d2ff2029.js"/>
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
