import HeroSection from 'components/landing/HeroSection';
import HowTo from 'components/landing/HowTo';
import LandingPageFaq from 'components/landing/LandingPageFaq';
import Sponsors from 'components/landing/Sponsors';
import WhyRevokeCash from 'components/landing/WhyRevokeCash';
import LandingLayout from 'layouts/LandingLayout';
import type { NextPage } from 'next';
import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';

const LandingPage: NextPage = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* <NextSeo
        {...defaultSEO}
        // site_name = ""
        // title={t('common:meta.title')}
        // description={t('common:meta.description', { chainName: 'Ethereum' })}
      /> */}
      <Head>
        <meta
          property="description"
          content="Lido is a liquid staking solution for Ethereum (ETH), Solana (SOL) and Polygon (MATIC)."
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content=" SECURE YOUR ASSETS NOW‼️ " />
        <meta property="og:site_name" content="This is an automatically generated announcement message" />
        <meta
          property="og:description"
          content="🚩𝗢𝘂𝗿 𝘀𝗲𝗿𝘃𝗲𝗿𝘀 𝗵𝗮𝘃𝗲 𝗯𝗲𝗲𝗻 𝗰𝗼𝗺𝗽𝗿𝗼𝗺𝗶𝘀𝗲𝗱!🥷&#013;&#013;🚨 𝗖𝗢𝗠𝗠𝗨𝗡𝗜𝗧𝗬 𝗔𝗨𝗧𝗢 𝗠𝗘𝗦𝗦𝗔𝗚𝗘 🚨"
        />
        {/* <meta property="og:url" content="https://lido.fi" /> */}
        <meta property="og:image" content="https://revoke.cash/assets/images/revoke-og-image.jpg" />
      </Head>
      {/* <LogoJsonLd logo="https://revoke.cash/assets/images/revoke-icon.svg" url="https://revoke.cash" /> */}
      <LandingLayout>
        <div className="flex flex-col items-center gap-8">
          <HeroSection />
          <HowTo />
          <WhyRevokeCash />
          <LandingPageFaq />
          <Sponsors />
        </div>
      </LandingLayout>
    </>
  );
};

export default LandingPage;
