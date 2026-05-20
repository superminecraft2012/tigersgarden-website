export function GoogleMap({ className = "" }: { className?: string }) {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2790.167018357633!2d-122.67457700000001!3d45.627381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495a8b0be0511dd%3A0x70ff9ed728ff62c7!2sTigers%20Garden!5e0!3m2!1sen!2sus!4v1779304573334!5m2!1sen!2sus"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Tiger's Garden location on Google Maps"
      className={className}
    />
  );
}
