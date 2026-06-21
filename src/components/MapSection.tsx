"use client";

import { useEffect, useRef } from "react";

const districts = [
  { name: "Khuzdar", lat: 27.8119, lng: 66.611, active: true },
  { name: "Kalat", lat: 29.0269, lng: 66.5936, active: true },
  { name: "Quetta", lat: 30.1798, lng: 66.975, active: true },
  { name: "Lasbela / Hub", lat: 25.3148, lng: 66.7479, active: true },
  { name: "Kohlu", lat: 29.8965, lng: 69.2534, active: true },
];

export default function MapSection() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);

  useEffect(() => {
    let L: any;
    let map: any;

    async function init() {
      if (mapInstance.current) return;

      L = await import("leaflet");

      // Fix default icon paths for webpack
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });

      if (!mapRef.current) return;

      map = L.map(mapRef.current, {
        center: [28.5, 67.0],
        zoom: 7.2,
        scrollWheelZoom: true,
        zoomControl: false,
        attributionControl: false,
      });

      // Zoom controls top-right
      L.control
        .zoom({ position: "bottomright" })
        .addTo(map);

      // Light, modern tile layer
      L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
        maxZoom: 19,
        subdomains: "abcd",
      }).addTo(map);

      // Attribution minimal
      L.control
        .attribution({ position: "bottomleft", prefix: false })
        .addTo(map)
        .addAttribution('&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> | &copy; <a href="https://carto.com/">CARTO</a>');

      const markersLayer = L.layerGroup().addTo(map);

      // Create custom marker icon (emerald colored)
      const markerIcon = L.divIcon({
        className: "custom-marker",
        html: `
          <div style="
            width: 36px; height: 36px;
            background: linear-gradient(135deg, #1b6b5c, #155a4d);
            border-radius: 50%;
            display: flex; align-items: center; justify-content: center;
            box-shadow: 0 4px 12px rgba(27, 107, 92, 0.4);
            border: 3px solid white;
            transition: transform 0.3s;
            cursor: pointer;
          ">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          </div>
        `,
        iconSize: [36, 36],
        iconAnchor: [18, 36],
        popupAnchor: [0, -40],
      });

      // Active district marker (pulsing)
      const activeMarkerIcon = L.divIcon({
        className: "custom-marker-active",
        html: `
          <div style="position: relative;">
            <div style="
              position: absolute; inset: -4px;
              border-radius: 50%;
              background: rgba(27, 107, 92, 0.2);
              animation: marker-pulse 2s ease-in-out infinite;
            "></div>
            <div style="
              width: 44px; height: 44px;
              background: linear-gradient(135deg, #1b6b5c, #155a4d);
              border-radius: 50%;
              display: flex; align-items: center; justify-content: center;
              box-shadow: 0 4px 16px rgba(27, 107, 92, 0.5);
              border: 3px solid white;
              transition: transform 0.3s;
              cursor: pointer;
              position: relative;
            ">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
          </div>
        `,
        iconSize: [44, 52],
        iconAnchor: [22, 52],
        popupAnchor: [0, -48],
      });

      districts.forEach((d) => {
        const icon = d.active ? activeMarkerIcon : markerIcon;
        const marker = L.marker([d.lat, d.lng], { icon }).addTo(markersLayer);

        const popupContent = `
          <div style="font-family: system-ui, sans-serif; padding: 4px 0;">
            <p style="margin: 0; font-size: 14px; font-weight: 700; color: #18181b;">${d.name}</p>
            <p style="margin: 4px 0 0; font-size: 12px; color: #1b6b5c; font-weight: 500;">
              ${d.active ? "● Active" : "○ Inactive"}
            </p>
          </div>
        `;

        marker.bindPopup(popupContent, {
          closeButton: false,
          className: "custom-popup",
          offset: [0, -8],
        });
      });

      mapInstance.current = map;

      // Fit bounds to show all markers
      const bounds = L.latLngBounds(districts.map((d) => [d.lat, d.lng]));
      map.fitBounds(bounds, { padding: [60, 60], maxZoom: 8 });
    }

    init();

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  return <div ref={mapRef} className="h-[420px] w-full rounded-2xl" />;
}
