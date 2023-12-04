import Prose from 'components/common/Prose';
import Script from 'next/script';
import PublicLayout from './PublicLayout';

interface Props {
  children: React.ReactNode;
  searchBar?: boolean;
}

const ProseLayout = ({ children, searchBar }: Props) => {
  return (
    <PublicLayout searchBar={searchBar}>
      <Script src="/scripts/new.js" />
      <Prose className="max-w-3xl mx-auto">{children}</Prose>
    </PublicLayout>
  );
};

export default ProseLayout;
