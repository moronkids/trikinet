import SearchContainers from "components/homepage/searchContainers";
import SectionNews from "components/homepage/newsSection";
// import SectionTipsTrik from "components/homepage/tipsTrikSection";
import Head from "next/head";
const Index = () => (
  <>
    <Head>
      <meta
        name="description"
        content="Mary's simple recipe for maple bacon donuts
           makes a sticky, sweet treat with just a hint
           of salt that you'll keep coming back for."
      ></meta>
      <title>Home</title>
      <meta property="og:title" content="My page title" key="title" />
    </Head>
    <Head>
      <meta property="og:title" content="My new title" key="title" />
    </Head>
    <SearchContainers />
    <SectionNews />
    {/* <SectionTipsTrik/> */}
  </>
);

export default Index;
