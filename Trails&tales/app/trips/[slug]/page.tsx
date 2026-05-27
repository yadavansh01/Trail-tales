export default function TripPage({ params }: any) {
  return (
    <main className="tripPage">
      <div className="banner">
        <h1>{params.slug.replace(/-/g, ' ')}</h1>
      </div>

      <section className="info">
        <h2>Trip Overview</h2>
        <p>
          Add itinerary, stay details, adventure activities, pricing and FAQs here.
        </p>

        <div className="gallery">
          <img src="https://placehold.co/800x500?text=Trip+1" />
          <img src="https://placehold.co/800x500?text=Trip+2" />
          <img src="https://placehold.co/800x500?text=Trip+3" />
        </div>

        <a
          href="https://wa.me/911234567890"
          target="_blank"
          className="whatsapp"
        >
          Book On WhatsApp
        </a>
      </section>
    </main>
  )
}