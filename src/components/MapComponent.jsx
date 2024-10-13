import React, { useEffect } from 'react';

const loadScript = (url) => {
  const script = document.createElement('script');
  script.src = url;
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
};

const MapComponent = ({ address }) => {
  useEffect(() => {
    
    if (!window.google) {
      loadScript(
        `https://maps.googleapis.com/maps/api/js?key=AIzaSyDLTlQD7_4FGGlrTj4Yot0mQk_7A63n_KU&libraries=places`
      );
    }

    const initMap = () => {
      const map = new window.google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: { lat: -34.397, lng: 150.644 },
      });

      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address: address }, (results, status) => {
        if (status === 'OK') {
          map.setCenter(results[0].geometry.location);
          new window.google.maps.Marker({
            map: map,
            position: results[0].geometry.location,
          });
        } else {
          console.error('Geocode was not successful for the following reason: ' + status);
        }
      });
    };

    if (window.google) {
      initMap();
    } else {
      window.onload = initMap;
    }
  }, [address]);

  return <div id="map" style={{ height: '400px', width: '100%' }} />;
};

export default MapComponent;
