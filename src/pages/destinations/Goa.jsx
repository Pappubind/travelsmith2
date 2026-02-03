import { Link } from 'react-router-dom';
import { MapPin, Phone } from 'lucide-react';
import SEO from '../../components/SEO';
import './Destinations.css';

export default function Goa() {
    const tours = [
        {
            title: "Bird Watching Tour",
            description: "Goa has an enchanting bird life with over 450 species. Visit Carambolim lake, home to Purple Swamphen, Bronze-winged Jacana, and numerous Egrets.",
            highlights: "Bird watching at Carambolim Lake & Mayem Lake",
            duration: "05 Hours Approx.",
            operation: "Daily from November to April",
            image: "/images/bird_watching_custom.png"
        },
        {
            title: "Diving",
            description: "Welcome to the delightful underwater world of Goa. Explore attractive corals and ship wreckages. The safe waters make it ideal for beginners.",
            highlights: "Deep sea diving",
            duration: "05 Hours and above",
            operation: "Daily from mid October to April",
            image: "/images/diving_custom.png"
        },
        {
            title: "Fishing Trip",
            description: "A great opportunity for anglers to practice their sport. Fish off the coast of Goa by trawling on the Arabian Sea. Enjoy a barbeque of your fresh catch.",
            highlights: "Deep Sea Fishing & Bar-be-que of Fresh Catch Fish",
            duration: "05 Hours Approx",
            operation: "Daily throughout the year",
            image: "/images/fishing_trip_custom.png"
        },
        {
            title: "Deep Sea Cruising",
            description: "Our luxury Yacht trip has many fascinations, one of these being the chance to spot dolphins, anchor in a quiet bay, and swim around the yacht and thereafter enjoy a Lunch / Snacks on board with chilled beer or a cocktail.",
            highlights: "Deep Sea Cruising",
            duration: "05 / 06 Hours Approx",
            operation: "Daily from Mid October to April",
            image: "/images/deep_sea_cruising_goa.png"
        },
        {
            title: "Backwater Cruise",
            description: "Houseboat in Goa offers you the most unique experience & takes you on a truly magical journey through Goa’s villages along the river, while cruising the backwaters. Cruise through the palm fringed banks and mirror still lagoons.",
            highlights: "Backwater Cruising",
            duration: "Day Trip & Overnight Tour also available",
            operation: "Daily from November to April",
            image: "/images/kerala_backwaters.jpg"
        },
        {
            title: "Dandeli Wildlife",
            description: "If you are a wildlife lover, then Dandeli is a perfect playground for your wildlife tour while you are in Goa. A drive through lush green forests to the neighboring state of Karnataka takes you to Dandeli Wildlife Sanctuary.",
            highlights: "Jungle Safari",
            duration: "Overnight Tour",
            operation: "Daily throughout the year",
            image: "/images/dandeli_wildlife_custom.png"
        },
        {
            title: "Hampi Tour",
            description: "The capital of the 14th Century Vijayanagara Empire, Hampi sits upon a ruin-strewn landscape where once one of the richest and largest cities stood. A world heritage site reminder of a legacy that lives on in stone.",
            highlights: "Explore the ancient ruins & Architecture",
            duration: "Overnight Tour",
            operation: "Daily throughout the year",
            image: "/images/hampi_ruins_custom.png"
        },
        {
            title: "Kayaking Expeditions",
            description: "Kayaking expeditions into the rivers, backwaters, mangroves and along the coast is simply the best way to see, enjoy and explore Goa. Morning starts with wonderful solitude, serenity and calm waters.",
            highlights: "Explore the untouched backwaters of Goa",
            duration: "05 Hours Approx",
            operation: "Daily from November to April",
            image: "/images/kayaking_goa_custom.png"
        },
        {
            title: "Dudhsagar Waterfalls",
            description: "Dudhsagar Waterfalls is the highest fall in Goa and is singular in all its milky splendor, located at the Goa – Karnataka border. Experience the thrilling off-road drive through the jungle in a 4 wheel drive jeep.",
            highlights: "Drive through Goan Jungles & Swim in a cool clean water",
            duration: "08 Hours Approx",
            operation: "Daily from mid October to April",
            image: "/images/dudhsagar_waterfalls_custom.png"
        },
        {
            title: "Art & Architecture",
            description: "Discover a vintage ride through Goa's rich art and architectural heritage, exploring the nuances of its colonial past and vibrant artistic present. This tour takes you through the heart of Goan culture, showcasing its unique blend of Indian and Portuguese influences.",
            highlights: "Vintage ride experience, Architectural tours",
            duration: "04 Hours Approx",
            image: "/images/architecture.png"
        },
        {
            title: "Hot Balloon Safari",
            description: "A hot air balloon ride has got to be the ultimate sky adventure one could enjoy while holidaying in Goa. The trip starts with inflation of balloon with motorized fan and once the envelopes filled with air it is ignited using burner. The balloon is ready in no more than 30 mins and this itself is a lovely seeing the balloon getting ready. The luxurious and spacious basket has room for a lot of people to enjoy the amazing experience. Your pilot will explore a variety of altitudes, up to 900 feet in the air for a marvellous overview of Goa villages, white washed Churches, Colonial Mansions and lush green agricultural areas. Enjoy floating around where you are able to see the sights and sounds of the beautiful state in 60 minutes.",
            highlights: "Enjoy unobstructed 360 view of Goa’s hinterlands",
            duration: "60 minutes on balloon",
            operation: "Daily from mid October to April (weather dependent)",
            image: "/images/hot_air_balloon_goa.png"
        },
        {
            title: "Rome of Orient",
            description: "The half day tour of North Goa covers magnificent churches of Old Goa – Se Cathedral the erstwhile seat of Portuguese Bishop and one of the biggest Churches in Asia as well as the Basilica of Bom Jesus where the sacred relics of St. Francis Xavier are enshrined. Drive further to Panjim (lately renamed as Panaji), one of the India’s smallest and most pleasant state capitals located on the southern banks of River Mandovi. The town has preserved its Portuguese heritage remarkably well and there’s a whole Latin Quarter with narrow winding streets, Old Mansions with over Hanging Balconies, Red-tiled Roofs, numerous Taverns, Bars and Cafés.",
            highlights: "Old Goa Churches & Panjim City",
            duration: "04/05 Hours",
            operation: "Daily throughout the year",
            image: "/images/rome-orient.png"
        },
        {
            title: "Heritage Trails",
            description: "Experience an European touch here in this tranquil environment and admire rare antique treasures. Walk into the Braganza Mansion, and as you spend time with the family every stone has a story to tell of its colonial past. Continue your drive to visit to 230 year old 'PALACIO DO DEAO' Palace. It was built by a Portuguese nobleman who was the Dean of the church and the founder of Quepem town. Enjoy delicious Goan family cooked meal in a unique homely atmosphere. Later visit Goa Chitra Museum, which had 200 privately collected items, the collections have now grown to more than 4000 objects on display. The museum never fails to impress its visitors with its collections of artifacts representing the cultural heritage of Goa.",
            highlights: "Menezes Braganza Mansion, Palacio Do Deao Mansion & Goa Chitra Museum",
            duration: "05/06 Hours Approx",
            operation: "Daily throughout the year",
            image: "/images/heritage.png"
        },
        {
            title: "Temple & Spice Tour",
            description: "Goa is the perfect place where you will find a blend of traditional and modern aspects of life. These tours will truly show you an entirely new side of Goa that is sure to take you by surprise. Start your drive to explore the historical temple, Mangueshi temple at the Mangeshi hamlet of Ponda in Antruz Mahal which has a distinctively beautiful temple dedicated to Shree Mangeshi a major tourist attraction of Goa. Continue your drive to Priory village situated on the fringe of Ponda, leading village is a frequently undiscovered part of Goa. This guided walk provides a comprehensive introduction to the village, its vibrant cultural scene, and its residents, enriched by fascinating tales and trivia about the village. A trip to Spice Plantation is very refreshing and rejuvenating. Learn how spices and herbs are grown organically while you take a guided tour around the plantation. Enjoy the sumptuous Goan lunch on a banana leaf in an open-air restaurant surrounded by nature.",
            highlights: "Enjoy traditional Goan Lunch",
            duration: "06 Hours Approx.",
            operation: "Daily throughout the year",
            image: "/images/spice_plantation_goa.png"
        },
        {
            title: "Cola Beach Tour",
            description: "Cola Beach is an exceptional escapade. The scenic drive to this hideout is an unforgettable experience in itself, the first glimpse of the beach tells you it’s a true heaven, a place that takes your breath away. Besides the natural splendor, the beautiful tents located at the bottom of the hill where you will be spoiled with couple of nights will steal your heart. Cola Beach will give you the ultimate beach experience with a large dose of peace, relaxation and exotic beauty.",
            highlights: "Stay at peaceful Beach",
            duration: "Overnight Tour",
            operation: "Daily from November to April",
            image: "/images/coal-beach.png"
        },
        {
            title: "Anjuna Flea Market",
            description: "Anjuna Flea Market is an open flea market open from sunrise to sunset only on Wednesdays. Started by hippies decades ago, today this popular market is the biggest attraction for tourists specifically if you are shopping for Souvenirs, Handicrafts, etc. It's a vibrant experience where the cultures of the world meet, offering everything from traditional Indian wear to bohemian trinkets.",
            highlights: "Explore the market with Indian jewellery, Handicrafts etc.",
            duration: "05/06 Hours Approx",
            operation: "Wednesday from November to April",
            image: "/images/anjuna.png"
        },
        {
            title: "Secrets of Divar Island on Cycle",
            description: "Ride the winding roads of Divar Island, passing through rice fields, mangroves, and ancient structures. Experience traditional occupations like fishing and bread making. Interact with locals, learn early Goan savours at a local bakery, and quench your thirst with Indian beer.",
            highlights: "Ride bicycle through the scenic Goan Island Village",
            duration: "4:30 hours approx.",
            operation: "Daily throughout the year",
            image: "/images/divar_island_cycle_custom.png"
        },
        {
            title: "Culinary Delights",
            description: "Immerse yourself in local culture through delightful authentic Goan cuisine. Walk through the local bazaar with the chef, pick fresh ingredients, and enjoy a cooking demonstration. Try your hand at some finest Goan delicacies and savor a sumptuous meal.",
            highlights: "Try your hands on Goan delicacies",
            duration: "06 Hours Approx",
            operation: "Daily throughout the year",
            image: "/images/goa_culinary_feni.png"
        },
        {
            title: "The Essential Whiskey Experience",
            description: "Unravel the mystery behind Paul John Single Malts. Witness the craft and time-honored process, relish signature expressions, and discover intricate flavours. Later, visit an Indo-Portuguese Mansion for a delicious Goan family cooked meal.",
            highlights: "Discover how Indian Whiskey is made using traditional methods",
            duration: "05 hours",
            operation: "Daily throughout the year",
            image: "/images/whiskey_experience_custom.png"
        },
        {
            title: "Island Fantasy",
            description: "Sail into the Arabian sea towards Grande Island to behold dolphins. Enjoy snorkeling and fishing in clear waters. A beach barbeque with exotic seafood completes this memorable sojourn.",
            highlights: "View Dolphins, Snorkeling & Swim At Virgin Beach",
            duration: "06 Hours Approx",
            operation: "Daily from November to April",
            image: "/images/island_fantasy_custom.png"
        },
        {
            title: "Crocodile Dundee",
            description: "Spend a day exploring Goa’s picturesque backwaters. Spot river crocodiles and a variety of bird species along the River Zuari. Visit a Goan Farm for a sumptuous lunch of authentic flavours.",
            highlights: "Backwater Crocodiles, Bird Watching & Spice Plantation",
            duration: "Full Day",
            operation: "Daily from November to April",
            image: "/images/goa_wildlife_crocodile.png"
        },
        {
            title: "White Water Rafting",
            description: "Located on the scenic banks of River Kali. Enjoy activities like jungle safaris and thrilling white water rafting. Stay at Bison River Resort implies a nature-filled getaway.",
            highlights: "White Water Rafting",
            duration: "Overnight Tour",
            operation: "Daily throughout the year",
            image: "/images/white_water_rafting_goa.png"
        },
        {
            title: "The Goan Village Tour",
            description: "Enjoy a first-hand look at village life in South Goa. Watch local fishermen, meet the village potter and toddy tapper, and see coconut de-husking. Visit a village baker and conclude with an invitation into a local family's home for snacks.",
            highlights: "Discover the real authentic village life experience",
            duration: "06 hours",
            operation: "Daily from November till April",
            image: "/images/goan_village_tour_custom.png"
        },
        {
            title: "Feni & Food",
            description: "Discover the true spirit of Goa. Walk through a farm and distillery for a hands-on experience. Taste the finest Cashew and Coconut Feni with a masterclass. Learn to mix cocktails and feast on a traditional Goan Tapas platter.",
            highlights: "Visit World’s Only Feni Cellar in Goa",
            duration: "4:30 hours approx.",
            operation: "Daily from Mid October till end of May",
            image: "/images/fenni_and_food_custom.png"
        },
    ];

    return (
        <div className="destinations-page">
            <SEO
                title="Goa Beyond Beaches - TravelSmith"
                description="Explore the sunny side of life in Goa. Beyond beaches, discover Viva Carnaval, heritage, adventure, and culinary delights."
                keywords="Goa Tourism, Hot Air Balloon Goa, Heritage Trails Goa, Goa Village Tour, Scuba Diving Goa, TravelSmith Goa"
            />
            {/* Hero */}
            <section className="dest-hero goa-hero">
                <div className="dest-hero-overlay" />
                <div className="container dest-hero-content">
                    <h1>GOA BEYOND BEACHES</h1>
                </div>
            </section>

            {/* Welcome */}
            <section className="section-light">
                <div className="container">
                    <h2 className="section-title">Welcome to Goa</h2>
                    <p className="section-subtitle">
                        A beautiful land blessed with Sun, Sea and Surf, nestled on the west coast of India with swaying palms, fabulous beaches and laid back lifestyle of the warm hearted Goans make it an unique holiday destination. Goa’s 120 kms coastline boasts of exotic Restaurants, rustic Beach Shacks which serve sumptuous cuisine and give you a front row view of Arabian Sea brimming with Water Sports and Pleasure Trips, with Night Clubs in plenty.
                    </p>
                    <p className="section-subtitle">
                        The hinterland too beckons visitors to Spice Gardens, Serene Lakes, Waterfalls and Jungle Safaris at the Mollem and Cotigao Sanctuaries where the wildly abundant wildlife roams free. Goa also has some fabulous Portuguese – Goan heritage Mansions and Forts dating back to 1700’s. There is much to explore in Goa besides relaxing on the sun kissed beaches. Discover the most amazing Goan experience, indulge in exciting adventures and exotic excursions in and around Goa.
                    </p>
                </div>
            </section>

            {/* Tours Grid */}
            <section className="section-gray">
                <div className="container">
                    <h2 className="section-title">Tours & Experiences</h2>
                    <div className="grid grid-2" style={{ gap: '2.5rem' }}>
                        {tours.map((tour, index) => (
                            <div
                                key={index}
                                className="glass-card"
                                style={{
                                    padding: 0,
                                    overflow: 'hidden',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: '100%',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                {/* Image Section */}
                                <div style={{
                                    height: '300px',
                                    overflow: 'hidden',
                                    position: 'relative'
                                }}>
                                    <div
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            backgroundImage: `url(${tour.image})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            transition: 'transform 0.5s ease'
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                    />
                                    <div style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 70%, transparent 100%)',
                                        padding: '1.5rem'
                                    }}>
                                        <h3 style={{
                                            color: 'white',
                                            fontSize: '1.5rem',
                                            fontWeight: 'bold',
                                            margin: 0,
                                            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                                        }}>
                                            {tour.title}
                                        </h3>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div style={{
                                    padding: '1.75rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    flexGrow: 1
                                }}>
                                    <p style={{
                                        color: 'var(--gray-700)',
                                        marginBottom: '1.5rem',
                                        flexGrow: 1,
                                        textAlign: 'center',
                                        lineHeight: '1.7',
                                        fontSize: '0.95rem'
                                    }}>
                                        {tour.description}
                                    </p>

                                    {/* Details Section */}
                                    <div style={{
                                        borderTop: '2px solid var(--gray-200)',
                                        paddingTop: '1.25rem',
                                        marginTop: 'auto'
                                    }}>
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            gap: '0.75rem',
                                            marginBottom: '0.75rem'
                                        }}>
                                            <span style={{
                                                fontWeight: 'bold',
                                                color: 'var(--primary-orange)',
                                                minWidth: '100px',
                                                fontSize: '0.9rem'
                                            }}>
                                                Highlights:
                                            </span>
                                            <span style={{
                                                fontSize: '0.9rem',
                                                color: 'var(--gray-700)',
                                                lineHeight: '1.5'
                                            }}>
                                                {tour.highlights}
                                            </span>
                                        </div>
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.75rem',
                                            marginBottom: '0.75rem'
                                        }}>
                                            <span style={{
                                                fontWeight: 'bold',
                                                color: 'var(--primary-orange)',
                                                minWidth: '100px',
                                                fontSize: '0.9rem'
                                            }}>
                                                Duration:
                                            </span>
                                            <span style={{
                                                fontSize: '0.9rem',
                                                color: 'var(--gray-700)'
                                            }}>
                                                {tour.duration}
                                            </span>
                                        </div>
                                        {tour.operation && (
                                            <div style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.75rem',
                                                marginBottom: '0.75rem'
                                            }}>
                                                <span style={{
                                                    fontWeight: 'bold',
                                                    color: 'var(--primary-orange)',
                                                    minWidth: '100px',
                                                    fontSize: '0.9rem'
                                                }}>
                                                    Operation:
                                                </span>
                                                <span style={{
                                                    fontSize: '0.9rem',
                                                    color: 'var(--gray-700)'
                                                }}>
                                                    {tour.operation}
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    {/* CTA Button */}
                                    <Link
                                        to="/contact"
                                        className="btn btn-primary"
                                        style={{
                                            marginTop: '1.5rem',
                                            width: '100%',
                                            textAlign: 'center',
                                            display: 'block',
                                            padding: '0.875rem 1.5rem',
                                            fontSize: '0.95rem',
                                            fontWeight: '600'
                                        }}
                                    >
                                        Book This Experience
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="dest-cta">
                <div className="container">
                    <h2>Ready to Explore Goa?</h2>
                    <p>Let us plan your perfect Goan getaway</p>
                    <Link to="/contact" className="btn btn-primary btn-lg">Plan Goa Trip</Link>
                </div>
            </section>
        </div>
    );
}
