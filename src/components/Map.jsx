import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { Icon } from 'leaflet'

const iconLocation = new Icon({
    iconUrl: "https://yoimeldev.github.io/Ip-address-tracker/src/img/icon-location.svg",
    iconSize: [40, 60]
});

export const Map = ({ addressInfo }) => {
    const position = [addressInfo.lat, addressInfo.lng]

    return (
        <MapContainer
            style={{ zIndex: -1 }}
            center={position}
            zoom={15}
            scrollWheelZoom={false}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
                position={position}
                icon={iconLocation}
            />
        </MapContainer>

    )
}
