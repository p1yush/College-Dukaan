import { styled } from "styled-components";
import { Link } from "react-scroll";

export const Footer = () => {
  return (
    <Wrapper id="Footer">
      <div className="footer">
        <div className="custom-container">
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4 ">
            <div className="p-6 widget">
              <div>
                <a href="/">
                  <img src="images/dark_logo.png" className="w-32" alt="logo" />
                </a>
              </div>
            </div>
            <div className="footer-column mb-4">
              <h4 className="mb-4 font-bold">Quick Link</h4>
              <ul className="menu-footer">
                <li className="menu-item">
                  <Link to="Home">Home</Link>
                </li>
                <li className="menu-item">
                  <Link to="About">About Us</Link>
                </li>
                <li className="menu-item">
                  <Link to="Contact">Contact Us</Link>
                </li>
                <li className="menu-item">
                  <a href="/">Privacy Policy</a>
                </li>
                <li className="menu-item">
                  <a href="/">Terms of Use</a>
                </li>
              </ul>
            </div>

            <div className="footer-column mb-4">
              <h4 className="mb-4 font-bold">ACCOUNT</h4>
              <ul className="menu-footer">
                <li className="menu-item">
                  <a href="/">My account</a>
                </li>
                <li className="menu-item">
                  <a href="/">Login / Register</a>
                </li>
                <li className="menu-item">
                  <a href="/">Shop</a>
                </li>
              </ul>
            </div>

            {/* <div className="footer-column mb-4">
            <h5 className="mb-4 font-bold">COMPANY</h5>
             <ul className="menu-footer">
                <li className="menu-item">
                 <a href="#">About Us</a>
                </li>
                <li className="menu-item">
                 <a href="#">Contact Us</a>
                </li>
                <li className="menu-item">
                 <a href="#">About Us</a>
                </li>
             </ul>
        </div> */}

            <div className="footer-column mb-4">
              <h4 className="mb-4 font-bold">FOLLOW US</h4>
              <ul className="menu-footer">
                <li className="menu-item">
                  <a href="/">About Us</a>
                </li>
                <li className="menu-item">
                  <a href="/">Contact Us</a>
                </li>
                <li className="menu-item">
                  <a href="/">About Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="sub-footer">
        <div className="container">
            <div className="text-center py-7">
            <p>© 2023. All rights reserved</p>
            </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100%;
  color: white;

  .footer {
    width: 100vw;
    display: flex;
    justify-content: center;
    background-color: #122b3c;
    background-image: url("images/footer_bg-1.png");
    background-repeat: repeat-x;
    background-size: auto;
    background-position: center 101%;

    .custom-container {
    padding: 90px 0 150px;
    width: 100%;
    height: auto;
    /* display: flex;
    justify-content: space-between;
    flex-wrap: wrap; */

    .footer-column {
      h4 {
        line-height: 25px;
      }
    }
    .menu-footer {
      .menu-item {
        a {
          font-weight: 400;
          line-height: 2rem;
          font-size: 1rem;
          cursor: pointer;
        }
        font-size: 1rem;
      }
    }
  }
  .widget {
    min-width: 205px;
  }
  .footer-column {
    padding: 0 12px;
    min-width: 16%;
  }

  }

  .sub-footer{
    background-color: #1f1b30;
  }
  
  @media (min-width: 1400px) {
    .custom-container {
      max-width: 1400px;
    }
  }
  @media (min-width: 992px) and (max-width: 1400px) {
    .custom-container {
      max-width: 1320px;
    }
  }

  @media only screen and (max-width: 580px) {
    .custom-container {
      padding: 50px 0 20px;
    }
  }
`;
