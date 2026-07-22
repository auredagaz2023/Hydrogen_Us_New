import {Form} from 'react-bootstrap';
import type {CSSProperties} from 'react';
import {ContentItem, ContentStoreCategory} from '~/routes/($locale).types';

type TProps = {
  isValid: boolean;
  index: number;
  items: ContentItem[];
  category: ContentStoreCategory['items'][number];
  categories: ContentStoreCategory;
  style?: CSSProperties;
  handleSelectFilter: (
    index: number,
    category: ContentStoreCategory['items'][number],
  ) => void;
};

export default function MapFilterListItem({
  isValid,
  index,
  items,
  categories,
  category,
  style,
  handleSelectFilter,
}: TProps) {
  const filteredItems = items.filter(
    (item) => category.sys.id === item.fields.category?.sys.id,
  );

  const image = (categories?.includes?.Asset ?? []).find(
    (asset) => asset.sys.id === category?.fields.icon?.sys.id,
  );

  const onSelect = () => {
    handleSelectFilter(index, category);
  };

  return (
    <>
      <Form.Check name="group1" type="radio" id={`reverse-radio-1`}>
        <input type="radio" checked={isValid} onChange={() => onSelect()} />
        <Form.Check.Label>
          <div style={{display: 'flex', gap: '10px', ...style}}>
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
