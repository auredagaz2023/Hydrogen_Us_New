import { useParams } from "@remix-run/react";
import { Asset, ContentfulEmbeddedAsset, ContentfulParagraph, News } from "../types";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import { NewsCard, slugify } from ".";
import { CollectionLinks } from "~/components/CollectionLinks";

interface ContentfulResponse {
  items: News[],
  includes: {
    Asset: Asset[] 
  }
}

const CONTENTFUL_SPACE_ID="7xbaxb2q56jj";
const CONTENTFUL_ACCESS_TOKEN="yGGCia7N7dHraGe5fsBZkSHsms6QExEKbWy0XdKIn9g";

const contentfulEndpoint = `https://cdn.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${CONTENTFUL_ACCESS_TOKEN}&content_type=news`;

function NewsItem() {
  const { newsSlug } = useParams();
  const [ news, setNews ] = useState<News[] | undefined>(undefined);
  const [ selectedNews, setSelectedNews ] = useState<News | undefined>(undefined);
  const [ assets, setAssets ] = useState<Asset[] | undefined>(undefined);
  const [ error, setError ] =  useState<string | undefined>(undefined);

  useEffect(() => {
    (async() => {
      await fetch(contentfulEndpoint)
      .then((res) => {
        return res.json();
      }).then((res) => {
        setNews((res as unknown as ContentfulResponse).items);
        setSelectedNews((res as unknown as ContentfulResponse).items.find((news: News) => slugify(news.fields.title) == newsSlug));
        setAssets((res as unknown as ContentfulResponse).includes.Asset);
      }).catch(err => {
        console.error(err);
        setError("Failed to fetch news. Please try again later.");
      })
    })()
  }, [newsSlug])

  const settings = {
    dots: true,
    arrows: true,
    inifinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <>
      <div className="container px-3 md:px-5 lg:px-8">
        <div className="flex flex-wrap justify-between">
          <article className="w-full lg:w-8/12 xl:w-7/12 px-3 py-20">
            { selectedNews && assets && <>
              <p className="uppercase text-gold">{ new Date(selectedNews.fields.date).toLocaleDateString('en-US') }</p>
              <h1 className="text-dark-blue text-heading font-semibold my-6">{ selectedNews.fields.title }</h1>
              { selectedNews.fields.text.content.filter((content) => content.nodeType == 'paragraph').map((content: ContentfulParagraph | ContentfulEmbeddedAsset, index: number) => (
                <p key={index} className="text-gray-500">{ (content as ContentfulParagraph).content[0].value }</p>
              )) }
              <div className="py-12">
                <Slider {...settings}>
                  { selectedNews.fields.text.content.filter((content) => content.nodeType == "embedded-asset-block").map((content: ContentfulParagraph | ContentfulEmbeddedAsset, index: number) => (
                    <div key={index}>
                      <img src={assets.find((asset) => asset.sys.id == (content as ContentfulEmbeddedAsset).data.target.sys.id)?.fields.file.url} alt="" />
                    </div>
                  )) }
                </Slider>
              </div>
              <div className="bg-gray-200 mt-12 py-4 px-4">
                <strong className="mr-4 text-gray-700">Pubblished in: </strong>
                <span className="text-dark-blue">Magniflex news</span>
              </div>
            </> }
          </article>
          <aside className="w-full lg:w-4/12 xl:w-4/12 px-3 py-20">
            <p className="uppercase text-gold">top news</p>
            { news && assets && news.slice(0, 3).map((news: News, index: number) => (
              <div className="mt-5" key={index}>
                <NewsCard news={news} cover={assets.find((asset) => asset.sys.id == news.fields.cover.sys.id)} />
              </div>
            )) }
          </aside>
        </div>
      </div>
      <CollectionLinks />
    </>
  )
}

export default NewsItem;