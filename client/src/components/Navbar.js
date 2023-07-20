import { useRef } from "react";
import "./Navbar.css";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from "@mui/material";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle(
      "responsive_nav"
    );
  };

  return (
    <header>
      <div
        className="logo"
      >
        <img
          src="https://images.squarespace-cdn.com/content/v1/5f64a4f657d4ea1d44d92b63/1607270045845-FMVDZL96YXNHAMSEC9UQ/Bleezur_Colour%2BheaderTM.png?format=1500w"
          width={220}
          style={{ marginRight: "220px", marginLeft: "33px" }}
          class="large"
        ></img>
        <img
          src="//images.squarespace-cdn.com/content/v1/5f64a4f657d4ea1d44d92b63/1607270071024-KVC51YTW63X9VBPIBEQC/App+Logo.png?format=1500w"
          width={50}
          style={{ marginRight: "220px", marginLeft: "33px" }}
          class="small"
        >
        </img>
      </div>
      <nav ref={navRef} >
        <div>
          <a href="https://www.bleezur.ai/bleezur-in-action" data-animation-role="header-element">
            Bleezur in action
          </a>
        </div>
        <div>
          <a href="https://www.bleezur.ai/about-us" data-animation-role="header-element">
            Who we are
          </a>
        </div>
        <div>
          <a href="https://www.bleezur.ai/contact-us" data-animation-role="header-element">
            Contact Us
          </a>
        </div>
        <div>
          <Button variant="contained" style={{ background: "#f6745a", height: 55, color: "white", width: 200, marginLeft: "20px", marginRight: "0" }}>Schedule a Demo</Button>
        </div>
        <button
          className="nav-btn nav-close-btn"
          onClick={showNavbar}>
          <CloseIcon />
        </button>
      </nav>
      <button
        className="nav-btn"
        onClick={showNavbar}>
        <MenuIcon />
      </button>
    </header>
  );
}

export default Navbar;