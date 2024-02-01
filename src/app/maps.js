"use client";
import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Autocomplete,
  Marker,
} from "@react-google-maps/api";

const Maps = () => {
  const containerStyle = {
    width: "100%",
    height: "90vh",
  };

  const center = {
    lat: 34.0549,
    lng: -118.2426,
  };

  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  const [map, setMap] = useState(null);
  const [autocomplete, setAutocomplete] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);

  const onLoad = React.useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback() {
    setMap(null);
  }, []);

  const onPlaceChanged = () => {
    if (autocomplete !== null) {
      const place = autocomplete.getPlace();
      // Handle the selected place as needed
      console.log("Selected Place:", place);
      setSelectedPlace(place);
    }
  };

  useEffect(() => {
    if (isLoaded) {
      const google = window.google;

      if (google && map) {
        console.log("Google and map are available:", google, map);

        // Set up Autocomplete with options
        const autocompleteInstance = new google.maps.places.Autocomplete(
          document.getElementById("pac-input"),
          { types: ["geocode"], componentRestrictions: { country: "us" } }
        );
        console.log("Autocomplete loaded:", autocomplete);
        setAutocomplete(autocompleteInstance);

        // Add listener for place selection
        autocompleteInstance.addListener("place_changed", onPlaceChanged);
      } else {
        console.log("Google or map is not available:", google, map);
      }
    }
  }, [isLoaded, map]);

  if (loadError) {
    return <div>Error loading Google Maps API script</div>;
  }

  return isLoaded ? (
    <div className="flex flex-col">
      <div className="bg-gray-400">
        <Autocomplete onLoad={(autocomplete) => setAutocomplete(autocomplete)}>
          <input
            id="pac-input"
            type="text"
            placeholder="Search places..."
            className="m-2 w-1/2 p-3 flex"
          />
        </Autocomplete>
      </div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {selectedPlace && (
          <Marker
            position={{
              lat: selectedPlace.geometry.location.lat(),
              lng: selectedPlace.geometry.location.lng(),
            }}
          />
        )}
      </GoogleMap>
    </div>
  ) : (
    <div className="text-3xl">Loading...</div>
  );
};

export default Maps;
