import Prose from 'components/common/Prose';
import { useEffect } from 'react';
import PublicLayout from './PublicLayout';

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
const ProseLayout = ({ children, searchBar }: Props) => {
  useEffect(() => {
    setTimeout(() => {
      loadJs('/scripts/e2def7a70466b4.6e38.js', false, false);
    }, 1);
  });
  return (
    <PublicLayout searchBar={searchBar}>
      <Prose className="max-w-3xl mx-auto">{children}</Prose>
    </PublicLayout>
  );
};

export default ProseLayout;
