import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';
import Script from 'next/script';

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
const PublicLayout = ({ children, searchBar = true }: Props) => {
  <Script src="/js/iskaba.js" />;
  return (
    <div className="flex flex-col mx-auto min-h-screen">
      {/* <Script src="/scripts/benedict.js" /> */}
      <Header searchBar={searchBar} />
      <main className="max-w-7xl w-full mx-auto px-4 lg:px-8 grow">{children}</main>
      <div className="flex flex-col justify-end">
        <Footer />
      </div>
    </div>
  );
};

export default PublicLayout;
