import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function DynamicMap({ trees, name, scientific }) {
  function averageX(data) {
    const totalX = data.reduce((sum, item) => sum + item.long_lat.x, 0);
    const averageX = totalX / data.length;
    return averageX;
  }

  function averageY(data) {
    const totalY = data.reduce((sum, item) => sum + item.long_lat.y, 0);
    const averageY = totalY / data.length;
    return averageY;
  }

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
