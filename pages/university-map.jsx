import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';

const MapContainer = dynamic(
  () => import('react-leaflet').then(mod => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

const universityPosition = [41.3111, 69.2797];

export default function UniversityMap() {
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    // Bu kod faqat brauzerda ishlaydi
    const L = require('leaflet');
    const customIcon = new L.Icon({
      iconUrl: '/university-marker.png',
      iconSize: [40, 40],
    });
    setIcon(customIcon);
  }, []);

  return (
    <div className='w- pb-10 pt-10'>
      <div className='text-center py-2 text-sm text-gray-600 italic'>
        Use <b>Ctrl + Scroll</b> to zoom the map
      </div>
      <MapContainer center={universityPosition} zoom={17} scrollWheelZoom={false} className='py-[200px] rounded-xl w-full'>
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {icon && (
          <Marker position={universityPosition} icon={icon}>
            <Popup>
              Our University <br /> Click to explore!
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
}
