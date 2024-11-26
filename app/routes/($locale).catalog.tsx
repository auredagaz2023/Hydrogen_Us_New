import React, {useEffect, useState} from 'react';

const CONTENTFUL_SPACE_ID = '7xbaxb2q56jj';
const CONTENTFUL_ACCESS_TOKEN = 'yGGCia7N7dHraGe5fsBZkSHsms6QExEKbWy0XdKIn9g';
const CONTENTFUL_HOMPAGE_ENTRY = '793GRffllImnsqufwKk6OE'
const contentfulEndpoint_catalog = `https://cdn.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/environments/master/entries/${CONTENTFUL_HOMPAGE_ENTRY}?access_token=${CONTENTFUL_ACCESS_TOKEN}`;

const Lookbook = () => {
    const [name, setName] = useState('')
    const [catalogUrl, setCatalogUrl] = useState('')

    useEffect(() => {
      let catalog:any; 
      (async () => {
        await fetch(contentfulEndpoint_catalog)
          .then((res) => {
            return res.json();
          })
          .then((res: any) => {
            const { name='', issuuUrl='' } = res?.fields || {}
            setName(name)
            const embedUrl = convertIssuuUrlToEmbedUrl(issuuUrl) || ''        
            setCatalogUrl(embedUrl)
          })
          .catch((err) => {});
      })();
    }, []);

    const convertIssuuUrlToEmbedUrl = (originalUrl: string): string => {
      try {
          // Create a URL object from the given URL
          const url = new URL(originalUrl);
          
          // Split the pathname to extract necessary parts
          const pathSegments = url.pathname.split('/');
          console.log('pathsegments', pathSegments, pathSegments.length)
  
          // The document ID is the last segment after "docs"
          const documentId = pathSegments[pathSegments.length - 1];
          // The user ID is the segment before "docs"
          const userId = pathSegments[1];
  
          // Construct the embed URL
          const embedUrl = `https://e.issuu.com/embed.html?d=${documentId}&u=${userId}&hideIssuuLogo=true&hideShareButton=true`;
  
          return embedUrl;
      } catch (error) {
          console.error('Invalid URL provided:', error);
          return '';
      }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', overflow: 'hidden' }}>
            {catalogUrl &&
              <iframe
                src={catalogUrl}
                width="100%"
                height="100%"
                style={{ border: 'none' }}
                title="PureCare Lookbook"
                allow="fullscreen"
              ></iframe>
            }
        </div>
    );
};

export default Lookbook;
