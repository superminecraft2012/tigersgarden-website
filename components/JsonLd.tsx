/**
 * Emits one JSON-LD block. Server-rendered, so the markup is in the HTML a
 * crawler receives rather than injected after hydration.
 */
export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      // Content is built from repo constants, never user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
