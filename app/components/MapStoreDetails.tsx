import { Asset, ContentItem, ContentStoreCategory } from "~/routes/($locale).types";

type TProps = {
    item: ContentItem;
    assets: Asset[];
    categories: ContentStoreCategory
}

export default function MapStoreDetails({ item, assets, categories }: TProps) {
    const category = categories.items.find((category) => category.sys.id === item.fields.category.sys.id);
    const image = categories.includes.Asset.find((asset) => asset.sys.id === category?.fields.icon.sys.id);
    
    return (
        <>
            {
            item.fields.cover && assets &&
            <div className="w-full">
                <img src={
                assets.find((asset) => asset.sys.type == item.fields.cover.sys.linkType && asset.sys.id == item.fields.cover.sys.id)?.fields.file.url
                }
                alt=""
                />
            </div>
            }
            <div className="px-4">
            <div className="px-5 relative text-dark-blue mt-5">
                <p className="text-xs">{ category?.fields.name || "" }</p>
                <span className="absolute top-5 left-0">
                    <img src={image?.fields.file.url || ""} alt={image?.fields.file.fileName || ""} className="w-5" />
                </span>
                <div className="text-lg font-bold">{item.fields.name}</div>
                <div className="my-4 text-xs">
                {item.fields.address}<br />
                {item.fields.city}, {item.fields.zip} {item.fields.state}
                </div>
                { item.fields.openingHours &&
                <div className="mb-4">
                    <p className="text-sm font-bold capitalize">opening times</p>
                    <p className="text-xs">{item.fields.openingHours}</p>
                </div>}
                { item.fields.phone &&
                <div className="mb-4">
                    <p className="text-sm font-bold capitalize">phone</p>
                    <p className="text-xs">{item.fields.phone}</p>
                </div>}
                { item.fields.eMail &&
                <div className="mb-4">
                    <p className="text-sm font-bold capitalize">E-Mail</p>
                    <p className="text-xs">{item.fields.eMail}</p>
                </div>}
                { item.fields.website &&
                <div className="mb-4">
                    <a href={item.fields.website} className="bg-dark-blue text-white px-3 py-2 text-xs">Discover more</a>
                </div>}
            </div>
            </div>
        </>
    )
}