import Ads from "components/ads";
import ArticleBig from "components/homepage/newsSection/mobile/articleContainerBig";
import ArticleSmall from "components/homepage/newsSection/mobile/articleContainerSmall";
import Article from "./articleContainerBig";
const News = () => {
  return (
    <>
      <div className="container news pt-4 px-4">
        <Ads type="rectangle" class="reactangle w-100" />
        <ArticleBig />
        <ArticleBig />
        <ArticleBig />
        <Ads type="rectangle" class="reactangle w-100" />
        <ArticleBig />
        <ArticleSmall />
        <ArticleSmall />
        

      </div>
    </>
  );
};

export default News;
