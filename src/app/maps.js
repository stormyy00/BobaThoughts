import React, { useState } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

export default function Maps() {
  const containerStyle = {
    width: "100%",
    height: "90vh",
  };

  const center = {
    lat: -3.745,
    lng: -38.523,
  };

  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  const [map, setMap] = useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // Once the map is loaded, set the map state
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback() {
    // Clean up resources when the component is unmounted
    setMap(null);
  }, []);

  if (loadError) {
    return <div>Error loading Google Maps API script</div>;
  }

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Optional: Add additional map components or features here */}
    </GoogleMap>
  ) : (
    <div>Loading...</div>
  );
}