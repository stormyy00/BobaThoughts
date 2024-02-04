"use client";
import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  Autocomplete,
} from "@react-google-maps/api";
import mapOptions from "./mapStyles";


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
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY,
    libraries: ["places"],
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

  const initAutocomplete = (google, map) => {
    const input = document.getElementById("pac-input");
    const searchBox = new google.maps.places.SearchBox(input);

    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    map.addListener("bounds_changed", () => {
      searchBox.setBounds(map.getBounds());
    });

    let markers = [];

    searchBox.addListener("places_changed", () => {
      const places = searchBox.getPlaces();

      if (places.length === 0) {
        return;
      }

      markers.forEach((marker) => {
        marker.setMap(null);
      });
      markers = [];

      const bounds = new google.maps.LatLngBounds();

      places.forEach((place) => {
        if (!place.geometry || !place.geometry.location) {
          console.log("Returned place contains no geometry");
          return;
        }

        const icon = {
          url: place.icon,
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(25, 25),
        };

        markers.push(
          new google.maps.Marker({
            map,
            icon,
            title: place.name,
            position: place.geometry.location,
          })
        );
        if (place.geometry.viewport) {
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
      });
      map.fitBounds(bounds);
    });
  };

  useEffect(() => {
    if (isLoaded) {
      const google = window.google;

      if (google && map) {
        console.log("Google and map are available:", google, map);
        initAutocomplete(google, map);
        map.setOptions(mapOptions);
      } else {
        console.log("Google or map is not available:", google, map);
      }
    }
  }, [isLoaded, map]);

  if (loadError) {
    return <div>Error loading Google Maps API script</div>;
  }

  return isLoaded ? (
    <>
      <Autocomplete>
        <input
          id="pac-input"
          type="text"
          placeholder="Search places..."
          className="m-2 w-1/2 p-3"
        />
      </Autocomplete>

      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {/* Optional: Add additional map components or features here */}
      </GoogleMap>
    </>
  ) : (
    <div>Loading...</div>
  );
};

export default Maps;
