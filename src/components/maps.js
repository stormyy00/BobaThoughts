"use client";
import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  Autocomplete,
} from "@react-google-maps/api";
import mapOptions from "@/styles/mapStyles";

const Maps = ({ name, initialLocation }) => {
  console.log(name + "from maps.js");
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
  const [placeDetails, setPlaceDetails] = useState(null);
  const [location, setLocation] = useState(initialLocation || "");

  const displayPlaceDetails = (place) => {
    // Fetch additional details about the place using Google Places API
    const service = new google.maps.places.PlacesService(map);

    service.getDetails(
      {
        placeId: place.place_id,
        fields: ["name", "formatted_address", "photos", "reviews"], // Specify which additional details you want to fetch
      },
      (placeResult, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          setPlaceDetails(placeResult);
        } else {
          console.log("Error fetching place details:", status); // Log any errors
        }
      },
    );
  };

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
    let infoWindow = new google.maps.InfoWindow(); // Create a new InfoWindow instance

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

        const marker = new google.maps.Marker({
          map,
          icon,
          title: place.name,
          position: place.geometry.location,
        });

        marker.addListener("click", () => {
          displayPlaceDetails(place);
          console.log("Clicked marker:", place);
          //use this to add information in the top of the marker
          infoWindow.setContent(`
            <div> 
              <h3 class="text-xl">${place.name}</h3>
              <p>${place.formatted_address}</p>
              <p>${place.rating}</p>
              <!-- You can add more details here -->
            </div>
          `);
          infoWindow.open(map, marker); // Open the InfoWindow when marker is clicked
        });

        markers.push(marker);
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
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </Autocomplete>

      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {placeDetails && (
          <div>
            <h3>{placeDetails.name}</h3>
            <p>{placeDetails.formatted_address}</p>
          </div>
        )}
      </GoogleMap>
    </>
  ) : (
    <div>Loading...</div>
  );
};

export default Maps;
