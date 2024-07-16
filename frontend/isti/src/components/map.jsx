import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import redPin from '@/../public/assets/images/red_pin.png';

function DynamicMap({ trees, name, scientific }) {
  function averageX(data) {
    const totalX = data.reduce((sum, item) => sum + item.long_lat.x, 0);
    const averageX = totalX / data.length;
    console.log(trees);
    return averageX;
  }

  function averageY(data) {
    const totalY = data.reduce((sum, item) => sum + item.long_lat.y, 0);
    const averageY = totalY / data.length;
    return averageY;
  }

  const redIcon = new Icon({
    iconUrl: redPin.src,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  const blueIcon = new Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.6.0/dist/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  return (
    <MapContainer
      center={[averageX(trees), averageY(trees)]}
      zoom={15}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {trees.map((tree, index) => (
        <Marker
          key={index}
          position={[parseFloat(tree.long_lat.x), parseFloat(tree.long_lat.y)]}
          icon={tree.status ? redIcon : blueIcon}
        >
          <Popup>
            {name}
            <br />
            <em>{scientific}</em>
            <br /> {tree.long_lat.x}, {tree.long_lat.y}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default DynamicMap;
