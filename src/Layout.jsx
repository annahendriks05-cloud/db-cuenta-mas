import React from 'react';

export default function Layout({ children, currentPageName }) {
  return (
    <>
      <style>{`
        /* Ocultar el botón "Edit with Base44" */
        [class*="base44-edit-button"],
        [id*="base44-edit-button"],
        button[aria-label*="Edit with Base44"],
        div[style*="z-index: 9999"] > button,
        .base44-floating-button {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
          pointer-events: none !important;
        }
      `}</style>
      {children}
    </>
  );
}