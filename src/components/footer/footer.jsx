function Footer() {

  const ArrayFooter = [
    { Header: "Telefonnummer", text: "+49 15734558748" },
    { Header: "E-mail-Adresse", text: "akinkale054@hotmail.de" },
    { Header: "LinkedIn", text: "www.linkedin.com/in/akinkale1999" }
  ]

  return (
    <>
      <div id="Footer">
        <div>
          {ArrayFooter.map((content, index) => (
            <div key={index}>
              <h3>{content.Header}</h3>
              {content.text === "www.linkedin.com/in/akinkale1999" ? <a href={"https://www.linkedin.com/in/akinkale1999"} target="blank">LinkedIn</a> : <p>{content.text}</p>}
              <br />
            </div>
          ))}
        </div>

        <div id="FooterBottomElements">

          <table>

            <th>sdad
              <tr>
                sadad
              </tr>
            </th>
          </table>
        </div>
      </div>
    </>
  );
}

export default Footer;
