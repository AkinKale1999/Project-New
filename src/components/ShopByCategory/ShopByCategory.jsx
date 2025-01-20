import { Link } from "react-router-dom";
import { ReactComponent as MenIcon } from "../../assets/MenIcon.svg";
import { ReactComponent as WomanIcon } from "../../assets/WomanIcon.svg";

export default function ShopByCategory() {
    const Category = [
        { Icon: <MenIcon />, text: "Herren" },
        { Icon: <WomanIcon />, text: "Frauen" },
    ]

    return (
        <>
            <div id="ShopByCategoryContainer">
                <div>
                    <h1>Unsere Kategorien</h1>
                </div>

                <div className="category-container">
                    {Category.map((content, index) => (
                        <div key={index} className="category-item">
                            <Link>
                                {content.Icon}
                            </Link>
                            <Link to={content.text === "Herren" ? "/Produkt/Men" : "/Produkt/Frauen"}>
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
    )
}
