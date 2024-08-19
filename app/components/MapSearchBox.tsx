import { useState } from "react";
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng
} from "react-places-autocomplete";

type TProps = {
    setCenter: (center: {lat: number, lng: number}) => void;
}
export default function MapSearchBox({ setCenter }: TProps) {
    const [ address, setAddress ] = useState<string>("");

    const handleChange = (value: string) => {
        setAddress(value);
    }

    const handleSelect = (value: string) => {
        setAddress(value);
        geocodeByAddress(value)
            .then((results) => getLatLng(results[0]))
            .then((latLng) => setCenter({ lat: latLng.lat, lng: latLng.lng }))
            .catch((error) => console.error('Error', error));
    }

    return (
        <PlacesAutocomplete
            value={ address }
            onChange={(value: string) => handleChange(value)}
            onSelect={(value: string) => handleSelect(value)}
        >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <div className="relative">
                    <input
                        { ...getInputProps({
                            placeholder: 'Search Places ...',
                            className: 'w-full border border-dark-blue px-8 text-sm text-dark-blue'
                        }) }
                    />
                    <div className="w-full absolute top-[100%] border border-dark-blue">
                        {loading && <div>Loading...</div>}
                        {suggestions.map(suggestion => {
                            const className = suggestion.active
                            ? 'suggestion-item--active text-sm px-2'
                            : 'suggestion-item text-sm px-2';
                            // inline style for demonstration purpose
                            const style = suggestion.active
                            ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                            : { backgroundColor: '#ffffff', cursor: 'pointer' };
                            return (
                            <div
                                {...getSuggestionItemProps(suggestion, {
                                className,
                                style,
                                })}
                            >
                                <span>{suggestion.description}</span>
                            </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </PlacesAutocomplete>
    )
}