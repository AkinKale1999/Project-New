import MaleOrFemaleArea from "../../MaleOrFemaleArea/MaleOrFemaleArea.jsx";
import NewProducts from "../../NewProducts/NewProducts.jsx";
import SecretAnimation from "../../SecretAnimation/SecretAnimation.jsx"
import ShopByCategory from "../../ShopByCategory/ShopByCategory.jsx";

export default function Home() {

    return (
        <>
            <div id="Home">
                <SecretAnimation />
                <ShopByCategory />
                <NewProducts />
                <MaleOrFemaleArea />

            </div>
        </>
    );
}
