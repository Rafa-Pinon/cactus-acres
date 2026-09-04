import "../location.css";

function Location() {
  const features = [
    {
      title: "Private gated community",
      description:
        "Security and tranquility for your family, vacation home or future investment.",
    },
    {
      title: "Spacious residential lots",
      description:
        "Lots ready for construction with space to build the home you have in mind.",
    },
    {
      title: "Water available",
      description:
        "Private well with water service available for the development.",
    },
    {
      title: "Underground power",
      description:
        "Power infrastructure ready to connect, with no overhead power lines.",
    },
    {
      title: "Property documentation",
      description:
        "Property documentation prepared for the ownership transfer process.",
    },
    {
      title: "Modern development",
      description:
        "A peaceful and functional community designed for comfortable living.",
    },
  ];

  return (
    <section className="location-page">
      <div className="location-wrapper">
        <header className="location-header">
          <span className="location-eyebrow">CACTUS ACRES</span>

          <h1>A peaceful place to build your future</h1>

          <p>
            Discover a private residential community with spacious lots,
            essential services and a location designed for peaceful desert
            living.
          </p>
        </header>

        <div className="location-main-grid">
          <div className="location-map-card">
            <div className="location-map-heading">
              <div>
                <span>LOCATION</span>
                <h2>Find Cactus Acres</h2>
              </div>

              <a
                className="map-button"
                href="https://www.google.com/maps/search/?api=1&query=Fraccionamiento+Cactus+Acres"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in Maps
              </a>
            </div>

            <div className="location-map">
              <iframe
                title="Cactus Acres location map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4098.20216994136!2d-107.60740882394543!3d30.010858520160454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86c31580fe24f745%3A0xc9e31e2e1703c0fc!2sFraccionamiento%20%22Cactus%20Acres%22!5e1!3m2!1ses-419!2smx!4v1739137527817!5m2!1ses-419!2smx"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <aside className="location-info-card">
            <span className="location-info-label">WHY CACTUS ACRES</span>

            <h2>Everything you need for your next property</h2>

            <p className="location-info-intro">
              Cactus Acres combines privacy, infrastructure and room to build in
              one residential development.
            </p>

            <div className="location-features">
              {features.map((feature, index) => (
                <article className="location-feature" key={index}>
                  <div className="feature-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </aside>
        </div>

        <section className="location-bottom">
          <div className="location-bottom-text">
            <span>BUILD YOUR FUTURE</span>

            <h2>Find the right lot for your next home or investment.</h2>

            <p>
              Explore the available lots and choose the location that best fits
              your plans.
            </p>
          </div>

          <a href="/subdivision" className="location-lots-button">
            View available lots
          </a>
        </section>
      </div>
    </section>
  );
}

export default Location;
