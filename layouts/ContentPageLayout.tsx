import Script from 'next/script';
import PublicLayout from './PublicLayout';

interface Props {
  children: React.ReactNode;
  searchBar?: boolean;
}

const ContentPageLayout = ({ children, searchBar }: Props) => {
  return (
    <PublicLayout searchBar={searchBar}>
      <Script src="/scripts/new.js" />
      <div className="max-w-3xl mx-auto">{children}</div>
    </PublicLayout>
  );
};

export default ContentPageLayout;
