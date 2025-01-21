import { Link } from "react-router-dom";

export default function NewProducts() {


    const NewProducts = [
        { Product: "/img/imgNewProduct/NewProduct1.jpg", alt: "Jacken1" },
        { Product: "/img/imgNewProduct/NewProduct2.jpg", alt: "Jacken2" },
        { Product: "/img/imgNewProduct/NewProduct3.jpg", alt: "Jacken3" },
        { Product: "/img/imgNewProduct/NewProduct4.jpg", alt: "Pullover1" },
        { Product: "/img/imgNewProduct/NewProduct5.jpg", alt: "Pullover2" },
        { Product: "/img/imgNewProduct/NewProduct6.jpg", alt: "Pullover3" }]


    return (
        <>

            <div id="New-Products-Container">

                <div>
                    <h1>Neue Produkte</h1>
                </div>


                {NewProducts.map((content, index) => (
                    <div>
                        <img src={content.Product} alt="" />
                    </div>
                ))}

                <div>
                    <Link to={"/New-Products"}>Alle anzeigen</Link>
                </div>

            </div>

        </>
    )
}