import {useEffect, useRef, useState, ReactElement} from 'react';
import {BsSearch} from 'react-icons/bs';
import {MdMyLocation} from 'react-icons/md';
import {RiFilter3Line} from 'react-icons/ri';
import {RxCross1} from 'react-icons/rx';
import {
  Asset,
  ContentItem,
  ContentStoreCategory,
  ContentfulParagraph,
} from './($locale).types';
import MapComponent from '~/components/MapComponent';
import {LoaderArgs, json} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import MapStoreDetails from '~/components/MapStoreDetails';
import MapFilterListItem from '~/components/MapFilterListItem';
import MapStoreListItem from '~/components/MapStoreListItem';
import MapSearchBox from '~/components/MapSearchBox';
import {useSetState} from 'react-use';

import {Form} from 'react-bootstrap';

export const handle = {
  seo: {
    title: 'Find a Retailer Near You | Magniflex | Magniflex | Magniflex',
    titleTemplate:
      'Find a Retailer Near You | Magniflex | Magniflex | Magniflex',
    description:
      'Find a Magniflex Retailer near you now! Explore our authorized dealers and experience Italian sleep excellence.',
    handle: '@shopify',
    url: `https://magniflex.us/store-locator`,
  },
};

export const loader = async ({request, context: {storefront}}: LoaderArgs) => {
  const CONTENTFUL_SPACE_ID = '7xbaxb2q56jj';
  const CONTENTFUL_ACCESS_TOKEN = 'yGGCia7N7dHraGe5fsBZkSHsms6QExEKbWy0XdKIn9g';

  const contentfulStoresEndpoint = `https://cdn.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${CONTENTFUL_ACCESS_TOKEN}&content_type=store`;

  const storesResponse = await fetch(contentfulStoresEndpoint).then((res) => {
    return res.json();
  });

  const contentfulStoreCategoryEndpoint = `https://cdn.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/environments/master/entries?select=fields.name,fields.description,fields.icon,sys.id&access_token=${CONTENTFUL_ACCESS_TOKEN}&content_type=storeCategory`;

  const storeCategoryResponse = await fetch(
    contentfulStoreCategoryEndpoint,
  ).then((res) => {
    return res.json();
  });

  return json({
    stores: storesResponse as ContentfulResponse,
    storeCategories: storeCategoryResponse as ContentStoreCategory,
  });
};

interface ContentfulResponse {
  items: ContentItem[];
  includes: {
    Asset: Asset[];
  };
}

export default function ShopLocator() {
  const [detailItem, setDetailItem] = useState<ContentItem | undefined>(
    undefined,
  );
  const {stores, storeCategories} = useLoaderData<typeof loader>();
  const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);
  const [items, setItems] = useState<ContentItem[]>(stores?.items ?? []);
  const [selectedItem, setSelectedItem] = useState<ContentItem | undefined>(
    undefined,
  );
  const [filterShow, setFilterShow] = useState(false);
  const [center, setCenter] = useState<{lat: number; lng: number}>({
    lat: 41.23647,
    lng: -102.964617,
  });
  const [zoom, setZoom] = useState<number>(5);
  const assets = stores?.includes?.Asset ?? [];

  useEffect(() => {
    const tempItems: ContentItem[] = [];
    (stores?.items ?? []).forEach((item) => {
      const distance = calculateDistance(item.fields.location);
      tempItems.push({
        ...item,
        fields: {
          ...item.fields,
          distance: distance,
        },
      });
    });
    setItems(
      tempItems.sort(
        (a, b) => parseFloat(a.fields.distance) - parseFloat(b.fields.distance),
      ),
    );
  }, [center, stores]);

  const handleSelectItem = (item: ContentItem) => {
    setSelectedItem(item);
    setDetailItem(item);
    setCenter({lat: item.fields.location.lat, lng: item.fields.location.lon});
    setZoom(15);
  };

  const handleDeselectItem = () => {
    setSelectedItem(undefined);
    setZoom(5);
  };

  const handleSelectFilter = (index: number, category: ContentItem) => {
    // console.log(category.fields.name);
    const filteredItems = stores.items.filter(
      (item) => category.sys.id === item.fields.category.sys.id,
    );
    setItems(filteredItems);
    setSelectedFilterIndex(index + 1);
    setFilterShow(!filterShow);
  };

  const handleFilter = () => {
    setFilterShow(!filterShow);
  };

  const handleSetCenter = (center: {lat: number; lng: number}) => {
    setCenter(center);
    setZoom(5);
  };

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCenter({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
      setZoom(5);
    });
  };

  var rad = function (x: number) {
    return (x * Math.PI) / 180;
  };

  var calculateDistance = function (location: {lat: number; lon: number}) {
    const p1 = {lat: location.lat, lng: location.lon};
    const p2 = center;

    var R = 6378; // Earth’s mean radius in km
    var dLat = rad(p2.lat - p1.lat);
    var dLong = rad(p2.lng - p1.lng);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(rad(p1.lat)) *
        Math.cos(rad(p2.lat)) *
        Math.sin(dLong / 2) *
        Math.sin(dLong / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d.toFixed(2); // returns the distance in km
  };

  const handleShowDetails = (item: ContentItem) => {
    setDetailItem(item);
  };

  const handleHideDetails = () => {
    setDetailItem(undefined);
  };

  return (
    <>
      <div className="header h-[300px] bg-[url('../assets/world-map-night.jpg')] bg-center bg-cover flex items-center justify-center">
        <h1 className="text-4xl text-white font-semibold">Store locator</h1>
      </div>
      <div className="container px-2 md:px-5 lg:px-7 py-8 md:py-16">
        <div className="text-D09467 uppercase text-center">
          select the stores displayed on the map
        </div>
        <div className="mt-8 grid grid-cols-2 gap-6 lg:grid-cols-3">
          {(storeCategories?.items ?? []).map((category, index: number) => (
            <div className="flex items-start" key={index}>
              <img
                src={
                  storeCategories?.includes?.Asset?.find(
                    (asset) => asset.sys.id === category.fields.icon.sys.id,
                  )?.fields.file.url || ''
                }
                alt=""
                className="w-9 mr-2"
              />
              <div className="mt-1">
                <p className="text-dark-blue font-semibold text-xl leading-5">
                  {category.fields.name}
                </p>
                <p className="text-gold text-sm">
                  {category.fields.description.content.map(
                    (content: ContentfulParagraph, index: number) => (
                      <p
                        className="text-gray-800 text-sm mt-[10px]"
                        key={index}
                      >
                        {content.content.map((text, index) => (
                          <span key={index}>{text.value}</span>
                        ))}
                      </p>
                    ),
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="h-[1800px] md:h-banner-sm relative bg-green-300 mb-24">
        <MapComponent
          items={items}
          categories={storeCategories}
          center={center}
          zoom={zoom}
          setZoom={(zoom) => setZoom(zoom)}
          detailItem={detailItem}
          showDetails={(item) => handleShowDetails(item)}
          hideDetails={() => handleHideDetails()}
        />
        <div className="absolute top-0 left-0 md:left-5 bottom-0 w-80 pt-0 pl-0 md:pt-5 md:pl-5 flex flex-col justify-between">
          <div className="input relative">
            <MapSearchBox setCenter={(center) => handleSetCenter(center)} />
            <div className="absolute top-0 bottom-0 left-2 flex items-center justify-center">
              <BsSearch className="w-4 h-4 text-dark-blue" />
            </div>
            <div className="absolute top-0 bottom-0 right-0 w-[38px] flex items-center justify-center border-l border-dark-blue">
              <MdMyLocation
                className="w-4 h-4 text-dark-blue"
                onClick={() => getCurrentLocation()}
              />
            </div>
          </div>
          <div className="grow pt-5 flex flex-col items-stretch">
            <div className="bg-dark-blue text-white text-sm font-medium px-3 py-3">
              <div className="w-full flex justify-between">
                {selectedItem ? (
                  <>
                    <span className="uppercase">store</span>
                    <span className="flex items-center cursor-pointer">
                      <RxCross1
                        className="w-5 h-5 ml-2"
                        onClick={() => handleDeselectItem()}
                      />
                    </span>
                  </>
                ) : (
                  <>
                    {filterShow && (
                      <span>Store found: {items && items?.length}</span>
                    )}
                    {filterShow ? (
                      <span className="flex flex-row">
                        Filters{' '}
                        <RiFilter3Line
                          onClick={() => handleFilter()}
                          className="w-5 h-5 ml-2"
                        />
                      </span>
                    ) : (
                      <span className="flex w-full">
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            width: '100%',
                          }}
                        >
                          <h1>Filters</h1>
                          <RxCross1
                            onClick={() => handleFilter()}
                            className="w-5 h-5 ml-2"
                          />
                        </div>
                      </span>
                    )}
                  </>
                )}
              </div>
            </div>
            <div className="bg-white overflow-auto max-h-locator">
              {
                filterShow ? (
                  selectedItem ? (
                    <MapStoreDetails
                      item={selectedItem}
                      assets={assets}
                      categories={storeCategories}
                    />
                  ) : (
                    <div className="px-4">
                      {items &&
                        items.map((item: ContentItem, index: number) => (
                          <MapStoreListItem
                            key={index}
                            item={item}
                            categories={storeCategories}
                            handleSelectItem={handleSelectItem}
                          />
                        ))}
                    </div>
                  )
                ) : selectedItem ? (
                  <h1>Mapfilter</h1>
                ) : (
                  <div className="p-4">
                    <div
                      style={{
                        fontSize: '14px',
                        fontWeight: '500',
                        color: '#b09987',
                      }}
                    >
                      TYPE OF STORE
                    </div>
                    <div>
                      {(storeCategories?.items ?? []).map((category, index: number) => (
                        // <h1>Category{category.fields.name}</h1>
                        <MapFilterListItem
                          style={{padding: '10px 0px'}}
                          isValid={index + 1 === selectedFilterIndex}
                          items={stores.items}
                          category={category}
                          categories={storeCategories}
                          index={index}
                          handleSelectFilter={handleSelectFilter}
                        />
                      ))}
                    </div>
                  </div>
                )
                // <h1>Filtered Store</h1>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
