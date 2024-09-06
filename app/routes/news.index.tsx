import { useEffect, useState } from "react"
import { Asset, ContentfulEmbeddedAsset, ContentfulParagraph, News, } from "./types";
import { CollectionLinks } from "~/components/CollectionLinks";
import { Link } from "@remix-run/react";

interface ContentfulResponse {
  items: News[],
  includes: {
    Asset: Asset[] 
  }
}

const CONTENTFUL_SPACE_ID="7xbaxb2q56jj";
const CONTENTFUL_ACCESS_TOKEN="yGGCia7N7dHraGe5fsBZkSHsms6QExEKbWy0XdKIn9g";

const contentfulEndpoint = `https://cdn.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${CONTENTFUL_ACCESS_TOKEN}&content_type=news`;

export const slugify = (str: string): string => {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export const NewsCard = ({news, cover}: {news: News, cover?: Asset}) => {
  const firstParagraph = news.fields.text.content.filter((content) => content.nodeType == 'paragraph')[0];

  return (
    <div className="mt-5 w-full">
      <div className="border border-gray-300">
        <div>
          <img src={cover?.fields.file.url} alt="" />
        </div>
        <div className="px-10 py-8">
          <div className="text-sm">{ new Date(news.fields.date).toLocaleDateString("en-US") }</div>
          <Link to={`/news/${slugify(news.fields.title)}`}>
            <div className="py-2 mb-2 text-dark-blue text-md min-h-[64px] font-semibold">{ news.fields.title }</div>
          </Link>
          <div className="text-sm mb-4 h-16 overflow-hidden text-ellipsis">{ (firstParagraph as ContentfulParagraph).content[0].value }</div>
          <Link to={`/news/${slugify(news.fields.title)}`} className="flex justify-end items-center">
            <span className="text-xs text-gold uppercase">Read more</span>
            <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Livello_1" x="0px" y="0px" width="36px" height="36px" viewBox="0 0 36 36" enableBackground="new 0 0 36 36" xmlSpace="preserve">
              <polygon fill="#174860" points="10.575,0.538 9.161,1.952 24.718,17.508 8.454,33.771 9.868,35.186 27.546,17.508 "/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function NewsPage() {
  const [ news, setNews ] = useState<News[] | undefined>(undefined);
  const [ assets, setAssets ] = useState<Asset[] | undefined>(undefined);
  const [ error, setError ] =  useState<string | undefined>(undefined);

  useEffect(() => {
    (async() => {
      await fetch(contentfulEndpoint)
      .then((res) => {
        return res.json();
      }).then((res) => {
        setNews((res as unknown as ContentfulResponse).items);
        setAssets((res as unknown as ContentfulResponse).includes.Asset);
      }).catch(err => {
        console.error(err);
        setError("Failed to fetch news. Please try again later.");
      })
    })()
  }, [])

  return (
    <>
      <div className="container px-5 md:px-12 lg:px-20">
        <div className="py-20">
          <h1 className="text-center text-dark-blue text-4xl font-bold">Magniflex news</h1>
          <div>
            <div className="text-center text-dark-blue mt-12 mb-2 pt-12 px-3 uppercase text-2xl">top news</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              { news && assets && news.slice(0, 2).map((news: News, index:number) => 
                <NewsCard news={news} key={index} cover={assets.find((asset) => asset.sys.id == news.fields.cover.sys.id)} />
              ) }
            </div>
          </div>
          <div>
            <div className="text-center mt-12 pt-12 px-3 mb-2 uppercase text-dark-blue text-2xl">
              more news
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              { news && assets && news.slice(2).map((news: News, index: number) =>
                <NewsCard news={news} key={index} cover={assets.find((asset) => asset.sys.id == news.fields.cover.sys.id)} />
              ) }
            </div>
          </div>
        </div>
      </div>
      <CollectionLinks />
    </>
  )
}