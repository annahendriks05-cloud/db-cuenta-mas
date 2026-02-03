import React from 'react';

export default function Layout({ children, currentPageName }) {
  return (
    <>
      <style>{`
              /* Ocultar todos los elementos de branding de Base44 */
              [class*="base44"],
              [id*="base44"],
              [class*="Base44"],
              [id*="Base44"],
              button[aria-label*="Base44"],
              button[aria-label*="Edit with"],
              button[aria-label*="base44"],
              div[style*="z-index: 9999"],
              div[style*="z-index: 10000"],
              div[style*="z-index: 99999"],
              .base44-floating-button,
              .base44-logo,
              .base44-splash,
              .base44-loading,
              iframe[src*="base44"],
              [data-testid*="base44"],
              svg[class*="base44"] {
                display: none !important;
                visibility: hidden !important;
                opacity: 0 !important;
                pointer-events: none !important;
              }

              /* Ocultar cualquier elemento con "Built with" o "Base44" en el contenido */
              div:has(> *:contains("Built with Base44")),
              div:has(> *:contains("Clone This App")),
              div:has(> *:contains("Base44")),
              [role="dialog"]:has(*:contains("Built with Base44")) {
                display: none !important;
              }

              /* Ocultar splash screen y logos de carga */
              div[class*="splash"],
              div[class*="loading"],
              div[class*="spinner"],
              [class*="base44-branding"],
              body > div[style*="position: fixed"] {
                display: none !important;
              }
            `}</style>
      {children}
    </>
  );
}