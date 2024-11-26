// app/routes/lookbook.tsx

import React from 'react';

const Lookbook = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', overflow: 'hidden' }}>
            <iframe
                src="https://e.issuu.com/embed.html?d=issuu_lookbook_purecare&u=purecare&hideIssuuLogo=true&hideShareButton=true"
                width="100%"
                height="100%"
                style={{ border: 'none' }}
                title="PureCare Lookbook"
                allow="fullscreen"
            ></iframe>
        </div>
    );
};

export default Lookbook;
