import { Link } from "react-router-dom";

export default function NewProducts() {

    const NewProducts = [
        { Product: "/img/imgNewProducts/New-Product1.png", alt: "Pullover1", header: "Polo Ralph Lauren", text: "Sweatshirt mit Logo-Stitching", price: "169,99€" },
        { Product: "/img/imgNewProducts/New-Product2.png", alt: "Pullover2", header: "Adidas Originals", text: "Hoodie aus reiner Baumwolle", price: "59,99€" },
        { Product: "/img/imgNewProducts/New-Product4.png", alt: "Jacke1", header: "Gant", text: "Steppjacke mit Label-Patch", price: "349,99€" },
        { Product: "/img/imgNewProducts/New-Product5.png", alt: "Jacke2", header: "Blauer Usa", text: "Steppjacke mit Kapuze Modell", price: "379.99€" },
    ]
    return (
        <>
            <div id="NewProductsContainer">
                <div>
                    <h1>Neue Produkte</h1>
                </div>
                <div>
                    {NewProducts.map((content, index) => (
                        <div key={index}>
                            <Link to={"/Product/New-Products"}>
                                <div>
                                    <img src={content.Product} alt={content.alt} loading="lazy" />
                                    <h3>{content.header}</h3>
                                    <h3>{content.text}</h3>
                                    <h3>{content.price}</h3>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

                <div>
                    <Link to={"/New-Products"}>Alle anzeigen</Link>
                </div>
            </div>
        </>
    )
}