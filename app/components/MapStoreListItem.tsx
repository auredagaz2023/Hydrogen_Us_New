import {FaChevronCircleRight} from 'react-icons/fa';
import {ContentItem, ContentStoreCategory} from '~/routes/($locale).types';

type TProps = {
  item: ContentItem;
  categories: ContentStoreCategory;
  handleSelectItem: (item: ContentItem) => void;
};

export default function MapStoreListItem({
  item,
  categories,
  handleSelectItem,
}: TProps) {
  const category = categories.items.find(
    (category) => category.sys.id === item.fields.category.sys.id,
  );
  const image = categories.includes.Asset.find(
    (asset) => asset.sys.id === category?.fields.icon.sys.id,
  );

  return (
    <div
      className="flex items-start mt-4 mb-5 cursor-pointer"
      onClick={() => handleSelectItem(item)}
    >
      <img
        src={image?.fields.file.url || ''}
        alt={image?.fields.file.fileName}
        className="mt-1 w-5"
      />
      <div className="grow pl-1">
        <p className="text-gold text-xs">{item.fields.storeTypePending}</p>
        <div className="flex justify-between items-center font-semibold">
          <span className="text-dark-blue text-sm pr-2">
            {item.fields.name}
          </span>
          <FaChevronCircleRight className="w-4 h-4 min-w-4 text-dark-blue" />
        </div>
        <div className="flex items-end justify-between text-xs text-dark-blue mt-1">
          <div>
            {item.fields.address} {item.fields.city}
            <br />
            {item.fields.zip} {item.fields.state}
          </div>
          <div>{item.fields.distance}km</div>
        </div>
      </div>
    </div>
  );
}
