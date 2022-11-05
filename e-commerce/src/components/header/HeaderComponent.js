import React from "react";
import {
  HeaderWrapper,
  HeaderContainer,
  ShowcaseContainer,
} from "../../assets/styles/header-style/index";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";

const styleNav = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: ".52rem",
};

const HeaderComponent = () => {
  return (
    <HeaderWrapper>
      <div className="overlay">
        <HeaderContainer>
          <div className="logo-container">
            <h1>LOGO</h1>
          </div>
          <nav>
            <ul>
              <li style={styleNav}>
                <PersonIcon
                  style={{
                    color: "white",
                  }}
                />
                <a href="#te">Account</a>
                <ArrowDropDownOutlinedIcon style={{ color: "white" }} />
              </li>
              <li style={styleNav}>
                <HelpOutlineIcon style={{ color: "white" }} />
                <a href="#fd">Help</a>
                <ArrowDropDownOutlinedIcon style={{ color: "white" }} />
              </li>
              <li style={styleNav}>
                <ShoppingCartIcon style={{ color: "white" }} />
                <a href="#fd">Cart</a>
              </li>
            </ul>
          </nav>
        </HeaderContainer>
        <ShowcaseContainer>
          <section className="primary">
            <h1>
              Welcome to the World Best Digital <span>Market</span>
            </h1>
            <p>Looking for something? Search below...</p>
          </section>
          <section className="secondary">
            <div className="input">
              <input
                type="text"
                name="search"
                id="search"
                placeholder="You can search for any brand..."
              />
              <img
                src={require("../../assets/images/853.png")}
                alt={"search"}
              />
            </div>
          </section>
        </ShowcaseContainer>
      </div>
    </HeaderWrapper>
  );
};

export default HeaderComponent;
