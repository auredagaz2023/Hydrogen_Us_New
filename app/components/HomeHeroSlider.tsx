import Slider from 'react-slick';
import {Button, Link, Text} from '~/components';
import {useEffect, useState} from 'react';
import { useNavigate } from '@remix-run/react';

const CONTENTFUL_SPACE_ID = '7xbaxb2q56jj';
const CONTENTFUL_ACCESS_TOKEN = 'yGGCia7N7dHraGe5fsBZkSHsms6QExEKbWy0XdKIn9g';
const CONTENTFUL_HOMPAGE_ENTRY = '6BIe3DaXbSQ6TrywKsc4AL'

const contentfulEndpoint_Spotlights = `https://cdn.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${CONTENTFUL_ACCESS_TOKEN}&content_type=spotlight`;
const contentfulEndpoint_Hompage = `https://cdn.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/environments/master/entries/${CONTENTFUL_HOMPAGE_ENTRY}?access_token=${CONTENTFUL_ACCESS_TOKEN}`;

export function HomeHeroSlider() {
  const [items, setItems] = useState<any[]>([]);
  const [assets, setAssets] = useState<any[]>([]);
  const navigate = useNavigate();

  const getMegaMessage = (item:any) => {
    let msg = '';
    let content = item.description.content[0];
    while (content != undefined) {
      if (content.value != undefined) {
        msg = msg + content.value;
      }
      try {
        content = content.content[0];
      } catch {
        content = undefined;
      }
    }
    return msg
  }

  const handleClickSlide = () => {
    // Select the parent element
    const parentElement = document.querySelector('.slick-list');

    // Get all child elements
    const childElements = parentElement?.querySelectorAll('.slick-slide');

    // Initialize variables
    let index = -1;

    // Loop through child elements
    childElements?.forEach((child, i) => {
      if (child.classList.contains('slick-active')) {
        // Get the index of the child element without class "slick-active"
        const childArray = Array.from(childElements);
        index = childArray.indexOf(child);
      }
    });
    window.location.href = items[index]?.fields?.link;
  }

  useEffect(() => {
    let homeCarouselSpotlight:any; 
    (async () => {
      await fetch(contentfulEndpoint_Hompage)
        .then((res) => {
          return res.json();
        })
        .then((res: any) => {
          homeCarouselSpotlight = res.fields.homeCarousel.map((item:any)=>item.sys.id);
          (async () => {
            await fetch(contentfulEndpoint_Spotlights)
              .then((res) => {
                return res.json();
              })
              .then((res: any) => {
                const spotlightItems = res.items.sort(
                  (a:any ,b:any)=>{
                    const aid=a.sys.id;
                    const bid=b.sys.id; 
                    if(aid<bid)
                      return -1 
                    else if(aid>bid) 
                      return 1 
                    else 
                      return 0
                    }
                  )
                setItems(spotlightItems.filter((item:any)=>{return homeCarouselSpotlight.includes(item.sys.id)}))
                setAssets(res.includes.Asset)
              })
              .catch((err) => {});
          })();
        })
        .catch((err) => {});
    })();
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    fade: true,
    speed: 2000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true
  };
  return (
    <div id="HomeHero" className="w-full h-full">
      <Slider {...settings}>
        {items
          .map((item:any, index:number)=>{
            return(
              <div className="relative" key={index}>

                {item.fields.fullFrame ? (
                    <div onClick={handleClickSlide} className='w-full hover:cursor-pointer'>
                      <div className="block md:hidden">
                        { assets.filter((asset:any)=>{return asset.sys.id==item.fields.mobileCover.sys.id})[0].fields.file.url?.includes('videos.ctfassets.net') ?
                          <video autoPlay loop muted src={assets.filter((asset:any)=>{return asset.sys.id==item.fields.mobileCover.sys.id})[0].fields.file.url} alt="img1" />
                          :
                          <img src={assets.filter((asset:any)=>{return asset.sys.id==item.fields.mobileCover.sys.id})[0].fields.file.url} alt="img1" />
                        }
                      </div>
                      <div className="hidden md:block">
                        {
                          assets.filter((asset:any)=>{return asset.sys.id==item.fields.cover.sys.id})[0].fields.file.url.includes('videos.ctfassets.net') ?
                            <video autoPlay loop muted src={assets.filter((asset:any)=>{return asset.sys.id==item.fields.cover.sys.id})[0].fields.file.url}/>
                            :
                            <img src={assets.filter((asset:any)=>{return asset.sys.id==item.fields.cover.sys.id})[0].fields.file.url} alt="img2" />
                        }                       
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="w-full h-full absolute flex items-center after:absolute after:h-full after:w-full after:bg-gradient-to-r after:from-[#2a3e4f]/[0.5] after:to-[#2a3e4f]/[0]">
                        <div className="container">
                          <div className="max-w-xl my-auto mx-0 text-left relative z-10">
                            <h3 className="text-sm  md:text-sm font-semibold text-white pb-4 leading-tight">
                              {item.fields.title}
                            </h3>
                            <h2 className="text-2xl md:text-4xl mb-6 font-semibold text-white pb-4 leading-tight">
                              {/* The secret to good sleep lies at the heart of our mattresses. */}
                              {getMegaMessage(item.fields)}
                            </h2>
                            <Button
                              // to="/innovation-and-technologies"
                              to={item.fields.link}
                              className="mt-2 text-sm w-full mb-6 uppercase bg-transparent border border-white rounded-none px-8 py-4 text-white font-semibold transition ease-in-out hover:bg-2f88b1"
                            >
                              {/* Discover how */}
                              {item.fields.ctaLabel}
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="block md:hidden">
                        <img
                          srcSet={assets.filter((asset:any)=>{return asset.sys.id==item.fields.cover.sys.id})[0].fields.file.url}
                          // src={image_1}
                          className={
                            'h-[100vh] object-cover'
                            // img1 != img2
                              // ? 'w-full object-cover'
                              // : 'h-[70vh] object-cover'
                          }
                          alt="image2"
                          // style={{height: '100vh!important'}}
                        />
                      </div>
                      <div className="hidden md:block">
                        <img
                          src={assets.filter((asset:any)=>{return asset.sys.id==item.fields.cover.sys.id})[0].fields.file.url}
                          // src={image_1}
                          className="w-full object-cover"
                          alt="image2"
                          // style={{height: '100vh!important'}}
                        />
                      </div>
                    </>
                  )
                
                }
              </div>
            )
          })
        }
      </Slider>
    </div>
  );
}
