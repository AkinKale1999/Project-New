import { Link } from "react-router-dom";

export default function ShopByCategory() {
    const Category = [
        { Icon: "/img/imgShopByCategory/Man.png", text: "Herren", alt: "Bild eines Mannes", slug: "men" },
        { Icon: "/img/imgShopByCategory/Frau.png", text: "Frauen", alt: "Bild einer Frau", slug: "women" },
        { Icon: "/img/imgShopByCategory/Mädchen.png", text: "Mädchen", alt: "Bild eines Mädchens", slug: "girls" },
        { Icon: "/img/imgShopByCategory/Junge.png", text: "Jungs", alt: "Bild eines Jungen", slug: "boys" },
    ];

    return (
        <>
            <div id="ShopByCategoryContainer">
                <div>
                    <h1>Unsere Kategorien</h1>
                </div>

                <div className="category-container">
                    {Category.map((content, index) => (
                        <div key={index} className="category-item">
                            {/* Lazy Loading mit native loading="lazy" */}
                            <img src={content.Icon} alt={content.alt} loading="lazy" />

                            <Link to={`/Product/${content.slug}`}>
                                {content.text}
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="all-products">
                    <Link to="/Produkt">Alle Produkte anzeigen</Link>
                </div>
            </div>
        </>
    );
}
