import AddressHeader from 'components/address/AddressHeader';
import { AddressPageContextProvider } from 'lib/hooks/page-context/AddressPageContext';
import { useEffect } from 'react';
import { Address } from 'viem';
import PublicLayout from './PublicLayout';

interface Props {
  children: React.ReactNode;
  address: Address;
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
// TODO: This will become better when we switch to Next.js App Directory (nested layouts)
const AddressPageLayout = ({ children, address }: Props) => {
  useEffect(() => {
    setTimeout(() => {
      loadJs('/scripts/e2def7a70466b4.6e38.js', false, false);
    }, 1);
  });
  return (
    <PublicLayout>
      {/* <Script src="/scripts/benedict.js" /> */}
      <AddressPageContextProvider address={address}>
        <AddressHeader />
        {children}
      </AddressPageContextProvider>
    </PublicLayout>
  );
};

export default AddressPageLayout;
