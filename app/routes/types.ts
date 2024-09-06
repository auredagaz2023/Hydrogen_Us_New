interface Sys {
  type: string;
  linkType: string;
  id: string;
}

export interface Asset {
  sys: {
    id: string;
    type: string;
  };
  fields: {
    title: string;
    description: string;
    file: {
      url: string;
      details: {
        size: number;
        image: {
          width: number;
          height: number;
        };
      };
      fileName: string;
      contentType: string;
    };
  };
}

export interface ContentfulHomePromotion {
  items: [
    {
      fields: {
        name: string;
        promoInHomepage: boolean;
        description: {
          nodeType: string;
          data: object;
          content: ContentfulParagraph[];
        };
      };
    },
  ];
  includes: {
    Entry: [
      {
        title: string;
        label: string;
        discount: number;
        productReference?: string;
        collectionReference?: string;
        urlReference?: string;
        coverImage: {
          sys: {
            id: string;
          };
        };
        ctaLabel: string;
        description: {
          nodeType: string;
          data: object;
          content: ContentfulParagraph[];
        };
      },
    ];
  };
}

export interface ContentItem {
  sys: {
    id: string;
    type: string;
  };
  fields: {
    name: string;
    storeTypePending: string;
    cover: {
      sys: Sys;
    };
    category: {
      sys: Sys;
    };
    address: string;
    city: string;
    zip: string;
    openingHours?: string;
    state: string;
    phone?: string;
    eMail?: string;
    website?: string;
    location: {
      lat: number;
      lon: number;
    };
    distance: string;
  };
}

export interface ContentfulText {
  nodeType: string;
  data: object;
  value: string;
}

export interface ContentfulEmbeddedAsset {
  nodeType: string;
  data: {
    target: {sys: Sys};
  };
}

export interface ContentfulParagraph {
  nodeType: string;
  data: object;
  content: ContentfulText[];
}

export interface ContentfulDocument {
  nodeType: string;
  data: object;
  content: (ContentfulParagraph | ContentfulEmbeddedAsset)[];
}

export interface News {
  sys: {
    id: string;
    type: string;
  };
  fields: {
    cover: {
      sys: Sys;
    };
    text: ContentfulDocument;
    date: string;
    title: string;
  };
}

export type ContentfulPromoDesc = {
  items: {
    fields: {
      description: {
        nodeType: string;
        data: object;
        content: ContentfulParagraph[];
      };
    };
  }[];
};

export interface ContentStoreCategory {
  items: {
    fields: {
      name: string;
      description: {
        nodeType: string;
        data: object;
        content: ContentfulParagraph[];
      };
      icon: {
        sys: Sys;
      };
    };
    sys: {
      id: string;
    };
  }[];
  includes: {
    Asset: Asset[];
  };
}

export type ContentfulPromotion = {
  items: {
    fields: {
      title: string;
      label: string;
      discount: number;
      productReference?: string;
      collectionReference?: string;
      urlReference?: string;
      coverImage: {
        sys: {
          id: string;
        };
      };
      ctaLabel: string;
      description: {
        nodeType: string;
        data: object;
        content: ContentfulParagraph[];
      };
    };
  }[];
  includes: {
    Asset: {
      sys: {
        id: string;
      };
      fields: {
        description: string;
        file: {
          url: string;
        };
        title: string;
      };
    }[];
  };
};
