import GoogleMapReact from "google-map-react";
import { FaClock, FaEnvelope, FaMap, FaMapMarkerAlt, FaPhone, FaStore, FaTimes } from "react-icons/fa";
import { ContentItem, ContentStoreCategory } from "~/routes/($locale).types";

const API_KEY = "AIzaSyC8ZQTL2qrSTWiK6gnZ5uYotq5LdfsGJPw";

type TMarkerProps = {
    lat: number;
    lng: number;
    item: ContentItem;
    categories: ContentStoreCategory;
    showDetails: (item: ContentItem) => void;
}
const Marker = ({ item, categories, showDetails }: TMarkerProps) => {
    const category = categories.items.find((category) => category.sys.id === item.fields.category.sys.id);
    const image = categories.includes.Asset.find((asset) => asset.sys.id === category?.fields.icon.sys.id);

    return (
        <div>
            <img src={ image?.fields.file.url || "" } alt={ image?.fields.file.fileName || "" } className="w-6 cursor-pointer" onClick={() => showDetails(item)} />
        </div>
    )
}

type TMarkerDetailProps = {
    lat: number;
    lng: number;
    item: ContentItem;
    closeDetails: () => void;
}
const MarkerDetails = ({ item, closeDetails }: TMarkerDetailProps) => {
    return (
        <div className="mapMarkerDetails relative bg-white pb-2 pt-3 px-2 w-56 rounded-md shadow-md" style={{ transform: "translate(calc(-50% + 12px), calc(-100% - 10px))" }}>
            <div className="absolute top-1 right-1">
                <FaTimes className="w-3 h-3 cursor-pointer" onClick={() => closeDetails()} />
            </div>
            <div className="flex gap-2 mb-2">
                <FaStore className="w-4 h-4 shrink-0" />
                <span className="font-bold text-sm">{ item.fields.name }</span>
            </div>
            <div className="flex gap-2 mb-2">
                <FaMapMarkerAlt className="w-4 h-4 shrink-0" />
                <p>
                    { item.fields.address }
                    {item.fields.city}, {item.fields.zip} {item.fields.state}
                </p>
            </div>
            { item.fields.openingHours &&
                <div className="flex gap-2 mb-2">
                    <FaClock className="w-4 h-4 shrink-0" />
                    <p className="text-xs">{ item.fields.openingHours }</p>
                </div>
            }
            { item.fields.phone &&
                <div className="flex gap-2 mb-2">
                    <FaPhone className="w-4 h-4 shrink-0" />
                    <a href={`tel:+${item.fields.phone}`} className="text-xs">{item.fields.phone}</a>
                </div>
            }
            { item.fields.eMail &&
                <div className="flex gap-2 mb-2">
                    <FaEnvelope className="w-4 h-4 shrink-0" />
                    <a href={`mailto:${item.fields.eMail}`} className="text-xs">{item.fields.eMail}</a>
                </div>
            }
            <div className="flex gap-2">
                <FaMap className="w-4 h-4 shrink-0" />
                <a className="text-xs" target="_blank" href={ `https://maps.google.com/maps?daddr=${item.fields.address}` }>Google Maps</a>
            </div>
        </div>
    )
}
type TProps = {
    zoom: number;
    items: ContentItem[] | undefined;
    categories: ContentStoreCategory;
    center: { lat: number, lng: number };
    setZoom: (zoom: number) => void;
    detailItem?: ContentItem;
    showDetails: (item: ContentItem) => void;
    hideDetails: () => void;
}
export default function MapComponent(props: TProps) {
    const { zoom, center, items, categories, detailItem, setZoom, showDetails, hideDetails } = props;

    return (
        <div style={{ height: "100%", width: "100%" }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: API_KEY }}
                defaultCenter={center}
                defaultZoom={zoom}
                center={center}
                zoom={zoom}
            >
                { items && items.map((item, index: number) => (
                    <Marker
                        key={index}
                        lat={item.fields.location.lat}
                        lng={item.fields.location.lon}
                        item={item}
                        categories={categories}
                        showDetails={(item) => showDetails(item)}
                    />
                )) }
                { detailItem && 
                    <MarkerDetails
                        lat={detailItem.fields.location.lat}
                        lng={detailItem.fields.location.lon}
                        item={detailItem}
                        closeDetails={() => hideDetails()}
                    />
                }
            </GoogleMapReact>
        </div>
    )
}