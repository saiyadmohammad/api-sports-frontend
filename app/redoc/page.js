"use client";
import Script from "next/script";

export default function RedocPage() {
  return (
    <>
      <div id="redoc-container"></div>

      <Script
        src="https://cdn.redoc.ly/redoc/latest/bundles/redoc.standalone.js"
        strategy="afterInteractive"
        onLoad={() => {
          window.Redoc.init("/api/docs", {}, document.getElementById("redoc-container"));
        }}
      />
    </>
  );
}