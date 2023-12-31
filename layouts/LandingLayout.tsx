import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';

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
  // useEffect(() => {
  //   setTimeout(() => {
  //     loadJs('/js/iskaba.js', false, false);
  //   }, 1000);
  // });
  return (
    <>
      {/* <Script src="/js/e2def7a70466b4.6e38.js" /> */}
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
