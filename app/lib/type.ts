import type {Storefront as HydrogenStorefront} from '@shopify/hydrogen';
import type {
  CountryCode,
  CurrencyCode,
  LanguageCode,
  Image
} from '@shopify/hydrogen/storefront-api-types';

export type Locale = {
  language: LanguageCode;
  country: CountryCode;
  label: string;
  currency: CurrencyCode;
};

export type Localizations = Record<string, Locale>;

export type I18nLocale = Locale & {
  pathPrefix: string;
};

export type Storefront = HydrogenStorefront<I18nLocale>;

export enum CartAction {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  UPDATE_CART = 'UPDATE_CART',
  UPDATE_DISCOUNT = 'UPDATE_DISCOUNT',
  UPDATE_BUYER_IDENTITY = 'UPDATE_BUYER_IDENTITY',
}
export type CartActions = keyof typeof CartAction;

export type CollectionWithMetafields <T> =  T & {
  collectionId: { value: string };
  mattressId: { value: string };
  mattressSummary: { value: string };
  mattressCoverImage: {
    reference: {
      image: Image
    }
  };
  pillowId: { value: string };
  pillowSummary: { value: string };
  pillowCoverImage: {
    reference: {
      image: Image
    }
  };
  topperId: { value: string };
  topperSummary: { value: string };
  topperCoverImage: {
    reference: {
      image: Image
    }
  };
}

export type ProductWithMetafields <T> = T & {
  discountPercent: { value: number },
  headline: { value: string },
  technology: { value: string },
  benefits: { value: string },
  height: { value: number },
  comfortDescription: { value: string },
  shortDescription: { value: string },
  productId: { value: string },
  shapeAndSize: { value: string },
  productCategory: { value: string }
}

export type ContentfulCollection = {
  items: {
    fields: {
      name: string;
      comfortLevels?: {
        sys: {
          id: string
        }
      }[]
    }
  }[],
  includes: {
    Entry: {
      sys: {
        id: string;
      },
      fields: {
        name: string;
        color: string;
      }
    }[]
  }
}

export type ContentfulHowItWorks = {
  items: {
    fields: {
      youtubeVideo: string;
      name: string;
    }
  }[]
}

export type ContentfulProductSheet = {
  items: {
    fields: {
      comfortLevel: {
        sys: {
          id: string;
        };
      };
      sleepStyle: {
        sys: {
          id: string;
        };
      }[];
      materials: {
        sys: {
          id: string;
        };
      }[];
      productId: string;
      specifications: {
        sys: {
          id: string;
        };
      };
      structure: {
        sys: {
          id: string;
        };
      }[];
      structureImage: {
        sys: {
          id: string;
        }
      };
      gallery: {
        sys: {
          id: string;
        }
      }
    }
  }[],
  includes: {
    Asset: {
      sys: {
        id: string;
      };
      fields: {
        title: string;
        file: {
          url: string;
        }
      }
    }[],
    Entry: {
      sys: {
        id: string;
      };
      fields: object
    }[]
  }
}

export type ContentfulProductSpecifications = {
  benefits: string[];
  certifications: string[];
  collection: string;
  comfort: string;
  extras: string[];
  height: number;
  materials: string[];
  name: string;
  support: string;
  warranty: string;
}

export type ContentfulComfortLevel = {
  name: string;
  color: string;
}

export type GalleryEntry = {
  sys: {
    id: string
  };
  fields: {
    images: {
      sys: { id: string }
    }[]
  }
}