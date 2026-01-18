import './Gallery.css';

export default function Gallery() {
    const galleryCategories = [
        {
            name: "Goa",
            images: [
                { id: 1, bgClass: "goa-1" },
                { id: 2, bgClass: "goa-2" },
                { id: 3, bgClass: "goa-3" },
                { id: 4, bgClass: "goa-4" }
            ]
        },
        {
            name: "India",
            images: [
                { id: 5, bgClass: "india-1" },
                { id: 6, bgClass: "india-2" },
                { id: 7, bgClass: "india-3" },
                { id: 8, bgClass: "india-4" }
            ]
        },
        {
            name: "International",
            images: [
                { id: 9, bgClass: "international-1" },
                { id: 10, bgClass: "international-2" },
                { id: 11, bgClass: "international-3" },
                { id: 12, bgClass: "international-4" }
            ]
        },
        {
            name: "Events & MICE",
            images: [
                { id: 13, bgClass: "events-1" },
                { id: 14, bgClass: "events-2" },
                { id: 15, bgClass: "events-3" },
                { id: 16, bgClass: "events-4" }
            ]
        }
    ];

    return (
        <div className="gallery-page">
            {/* Hero */}
            <section className="page-hero" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url("/images/goa_hero_premium_1768747320920.png")' }}>
                <div className="container">
                    <h1>Gallery</h1>
                    <p>Moments Captured from Our Unforgettable Journeys</p>
                </div>
            </section>

            {/* Gallery Content */}
            <section className="section-light">
                <div className="container">
                    {galleryCategories.map((category, idx) => (
                        <div key={idx} className="gallery-category">
                            <h2 className="gallery-category-title">{category.name}</h2>
                            <div className="gallery-grid">
                                {category.images.map(image => (
                                    <div key={image.id} className={`gallery-item ${image.bgClass}`}></div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
