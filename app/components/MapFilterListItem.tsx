import {Form} from 'react-bootstrap';
import {Asset, ContentItem, ContentStoreCategory} from '~/routes/types';

type TProps = {
  isValid: boolean;
  index: number;
  items: ContentItem[];
  category: ContentItem;
  categories: ContentStoreCategory;
  assets: Asset[];
  handleSelectFilter: Function;
};

export default function MapFilterListItem({
  isValid,
  index,
  items,
  categories,
  category,
  assets,
  handleSelectFilter,
}: TProps) {
  const filteredItems = items.filter(
    (item) => category.sys.id === item.fields.category.sys.id,
  );

  const image = categories.includes.Asset.find(
    (asset) => asset.sys.id === category?.fields.icon.sys.id,
  );

  const onSelect = () => {
    handleSelectFilter(index, category);
  };

  return (
    <>
      <Form.Check name="group1" type="radio" id={`reverse-radio-1`}>
        <input type="radio" checked={isValid} onClick={() => onSelect()} />
        <Form.Check.Label>
          <div style={{display: 'flex', gap: '10px'}}>
            <img
              src={image?.fields.file.url || ''}
              alt={image?.fields.file.fileName}
              className="mt-1 w-5"
            />
            <strong>
              {category.fields.name + '(' + filteredItems.length + ')'}
            </strong>
          </div>
        </Form.Check.Label>
      </Form.Check>
    </>
  );
}
