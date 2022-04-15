const converted = {
    "@import-normalize": true,
    ".logo": {
      width: "150px",
      alignSelf: "center",
      position: "fixed",
      top: "30px"
    },
    ".cart": {
      width: "27px",
      top: "33px",
      height: "27px",
      position: "fixed",
      alignSelf: "flex-end"
    },
    body: {
      fontFamily: "'Questrial_400Regular'",
      color: "'#545454'",
      backgroundColor: "#f3f3f3"
    },
    a: { fontFamily: '"Questrial_400Regular"', textDecoration: "none" },
    "button:hover": { boxShadow: "none" },
    ".navBar": { position: "relative" },
    ".navBar button": {
      position: "fixed",
      zIndex: 100,
      cursor: "pointer",
      border: "none",
      fontSize: "40px",
      opacity: 1,
      background: "none",
      width: "fit-content"
    },
    ".navBar button:hover": { boxShadow: "none" },
    ".menuNav": {
      overflowY: "scroll",
      listStyle: "none",
      position: "fixed",
      top: "0",
      left: "0",
      bottom: "0",
      height: "100vh",
      width: "0",
      overflow: "hidden",
      maxWidth: "290px"
    },
    ".menuNav.showMenu": {
      width: "100%",
      display: "block",
      padding: "10px 40px",
      textDecoration: "none",
      textTransform: "uppercase",
      fontWeight: "bold",
      fontFamily: '"Questrial_400Regular"',
      color: "#545454",
      zIndex: 1000
    },
    ".menuNav.hideMenu": { display: "none" },
    ".menuNav li:first-child": { marginTop: "7rem" },
    "button div.close span, button div.open span": {
      display: "block",
      height: "2px",
      width: "20px",
      backgroundColor: "#545454",
      marginBottom: "4px",
      opacity: 1,
      WebkitTransform: "rotate(0deg)",
      MozTransform: "rotate(0deg)",
      OTransform: "rotate(0deg)",
      transform: "rotate(0deg)",
      WebkitTransition: ".25s ease-in-out",
      MozTransition: ".25s ease-in-out",
      OTransition: ".25s ease-in-out",
      transition: ".25s ease-in-out",
      zIndex: 100
    },
    "button div.close span:nth-child(3)": { width: "15px" },
    "button div.open span:nth-child(1)": {
      WebkitTransform: "rotate(45deg)",
      MozTransform: "rotate(45deg)",
      OTransform: "rotate(45deg)",
      transform: "rotate(45deg)",
      marginTop: "4px"
    },
    "button div.open span:nth-child(2)": { opacity: 0, left: "-60px" },
    "button div.open span:nth-child(3)": {
      WebkitTransform: "rotate(-45deg)",
      MozTransform: "rotate(-45deg)",
      OTransform: "rotate(-45deg)",
      transform: "rotate(-45deg)",
      marginTop: "-12px"
    },
    ".box": {
      width: "123px",
      height: "241px",
      position: "absolute",
      border: "solid 1px #F5C121",
      marginTop: "20px",
      zIndex: -1
    },
    ".box.bibimbap": { marginLeft: "10%" },
    ".box.storefront": { marginTop: "-95px", marginLeft: "0" },
    ".bannerimg": {
      position: "relative",
      width: "120px",
      zIndex: 2,
      flex: "1 1 50%"
    },
    ".grayBG": {
      position: "relative",
      width: '"100%"',
      height: "250px",
      backgroundColor: "#545454",
      top: "-200px",
      zIndex: -10
    },
    ".storefrontimg": {
      width: "150px",
      marginLeft: "25px",
      flex: "1 1 50%",
      position: "relative"
    },
    ".storefront": { width: "153px", height: "113px", marginLeft: "159px" },
    ".address": {
      color: "#545454",
      fontFamily: '"Questrial_400Regular"',
      fontSize: "20px",
      lineHeight: 1.5
    },
    ".socialIcon": { width: "30px", padding: "15px" },
    ".socials": { alignSelf: "flex-end", paddingBottom: "5px" },
    "a.contactInfo": {
      marginBottom: "7px",
      color: "white",
      textDecoration: "none"
    },
    "a.contactInfo:hover": { textDecoration: "underline" },
    Button: { width: "100%", transition: "all 300ms ease-in" },
    "Button:hover": {
      boxShadow: "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)"
    },
    "div .cart-count": {
      textDecoration: "0",
      color: "white",
      textAlign: "center",
      backgroundColor: "#ffa551",
      borderRadius: "30px",
      height: "18px",
      width: "18px",
      paddingTop: "4px",
      paddingRight: "4px",
      fontSize: "12px"
    },
    "div.cart-icon": {
      display: "flex",
      justifyContent: "flex-end",
      position: "fixed"
    },
    "div.cart-icon img": { flex: "-5px" },
    "a.headerLogo": { width: "max-content", maxHeight: "max-content" },
    "button.addToOrderBtn , button.added": {
      width: "200px",
      paddingBottom: "7px",
      color: "#545454",
      backgroundColor: "white",
      fontFamily: '"Questrial_400Regular"',
      fontSize: "25px",
      fontStretch: "expanded",
      borderRadius: "40px",
      height: "50px",
      border: "2px solid #F5C121",
      cursor: "pointer"
    },
    "button.added": { fontSize: "17px" },
    ".cartBtn": {
      position: "fixed",
      width: "100px",
      top: "80%",
      padding: "3px",
      borderRadius: "50px",
      right: "5%"
    },
    ".product-image": { width: "250px" }
  }
  