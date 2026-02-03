import React from 'react';

export default function Layout({ children, currentPageName }) {
  return (
    <>
      <style>{`
        /* Ocultar todos los elementos de branding de Base44 */
        [class*="base44"],
        [id*="base44"],
        button[aria-label*="Base44"],
        button[aria-label*="Edit with"],
        div[style*="z-index: 9999"],
        div[style*="z-index: 10000"],
        .base44-floating-button,
        iframe[src*="base44"] {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
          pointer-events: none !important;
        }
        
        /* Ocultar modales con "Built with Base44" */
        div:has(> div:has(button:contains("Go to Base44"))),
        div:has(> div:has(button:contains("Clone This App"))),
        [role="dialog"]:has(*:contains("Built with Base44")) {
          display: none !important;
        }
      `}</style>
      {children}
    </>
  );
}