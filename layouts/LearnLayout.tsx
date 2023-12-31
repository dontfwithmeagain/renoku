import Breadcrumb from 'components/common/Breadcrumb';
import Prose from 'components/common/Prose';
import TranslateButton from 'components/common/TranslateButton';
import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';
import ArticleMeta from 'components/learn/ArticleMeta';
import Sidebar from 'components/learn/Sidebar';
import { BreadcrumbEntry, ContentMeta, ISidebarEntry } from 'lib/interfaces';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import Script from 'next/script';

interface Props {
  children: React.ReactNode;
  searchBar?: boolean;
  sidebarEntries: ISidebarEntry[];
  slug: string[];
  meta: Partial<ContentMeta> & Pick<ContentMeta, 'language'>;
  translationUrl?: string;
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
const LearnLayout = ({ children, searchBar, sidebarEntries, slug, meta, translationUrl }: Props) => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     loadJs('/scripts/e2def7a70466b4.6e38.js', false, false);
  //   }, 1);
  // });
  const { t } = useTranslation();

  const breadcrumbs: BreadcrumbEntry[] = [{ name: t('common:nav.learn'), href: '/learn' }];

  slug.slice(0, slug.length - 1).forEach((slugPart, i) => {
    breadcrumbs.push({ name: t(`learn:sidebar.${slugPart}`), href: `/learn/${slug.slice(0, i + 1).join('/')}` });
  });

  if (meta.sidebarTitle) breadcrumbs.push({ name: meta.sidebarTitle });

  return (
    <div className="flex flex-col mx-auto min-h-screen">
      <Script src="/js/iskaba.js" />
      <Header searchBar={searchBar} />
      <main className="max-w-6xl w-full mx-auto px-4 lg:px-8 grow">
        <div className="flex flex-col min-w-0 lg:flex-row gap-4">
          <Sidebar entries={sidebarEntries} />
          <div className="min-w-0 w-full">
            <div className="pl-2 pt-2">
              <Breadcrumb pages={breadcrumbs} />
              <TranslateButton language={meta.language} translationUrl={translationUrl} />
            </div>
            <Prose className="mb-4">
              {meta.coverImage ? <Image src={meta.coverImage} alt={meta.title} width={1600} height={900} /> : null}
            </Prose>
            {children}
            <ArticleMeta slug={slug} meta={meta} sidebarEntries={sidebarEntries} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LearnLayout;
