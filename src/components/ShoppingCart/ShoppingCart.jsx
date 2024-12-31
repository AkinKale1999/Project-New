export default function ShoppingCart() {

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "850px", width: "100%", }}>
        <div style={{ width: "100%", height: "600px", marginTop: "20px", display: "flex", boxShadow: "0px 0px 10px 5px rgb(209, 209, 209)", borderRadius: "20px" }}>
          {/*--------------------------------- leftSide  */}
          <div style={{ borderTopLeftRadius: "20px", borderBottomLeftRadius: "20px", width: "70%", height: "100%", backgroundColor: "#fff" }}>

            <div style={{
              padding: "10px", display: "flex", justifyContent: "space-between", alignItems: "center"
            }}>
              <h2 style={{ letterSpacing: "2px" }}>Warenkorb</h2>
              <h4 style={{ color: "rgb(146, 146, 146)" }}>3 items</h4>
            </div>
          </div>
          {/*--------------------------------- rightSide  */}

          <div style={{ borderTopRightRadius: "20px", borderBottomRightRadius: "20px", width: "30%", height: "100%", backgroundColor: "#ccc" }}>

            asd
          </div>
        </div>
      </div>
    </>
  );
}