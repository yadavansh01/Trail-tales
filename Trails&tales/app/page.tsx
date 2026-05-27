import Link from 'next/link'

const trips = [
  { name: 'Bir Billing', state: 'Himachal' },
  { name: 'Chandratal', state: 'Himachal' },
  { name: 'Jibhi Shoja', state: 'Himachal' },
  { name: 'Kanatal', state: 'Uttarakhand' },
  { name: 'Tungnath', state: 'Uttarakhand' },
  { name: 'Rishikesh', state: 'Uttarakhand' },
  { name: 'Thailand', state: 'International' },
  { name: 'Bali', state: 'International' }
]

export default function Home() {
  return (
    <main>
      <section className="hero">
        <h1>Travel With Strangers. Return With Family.</h1>
        <p>Premium community trips across India & International destinations.</p>
      </section>

      <section className="section">
        <h2>Explore Trips</h2>

        <div className="grid">
          {trips.map((trip) => (
            <div className="card" key={trip.name}>
              <img src={`https://placehold.co/600x400?text=${trip.name}`} />
              <div className="content">
                <h3>{trip.name}</h3>
                <p>{trip.state}</p>
                <p className="price">₹ XX,XXX</p>

                <Link href={`/trips/${trip.name.toLowerCase().replace(/ /g, '-')}`}>
                  <button>View Details</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}