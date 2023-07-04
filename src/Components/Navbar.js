import "./Navbarstyles.css";
import react,  {Component}  from "react";
import  {menuitems}  from "./menuitems";
import  {Link}  from "react-router-dom";

class Navbar extends Component {
  //declare the state of harmburg icon on click
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="navbar-items">
        <h1 className="navbar-logo">Trippy</h1>
        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-bars" : "fas fa-times"}
          ></i>
        </div>
        <ul className="navbar-lists">
          {menuitems.map((items, index) => {
            return (
              <li key="index">
                <Link className={items.cName} to={items.url}>
                  <i class={items.icon}></i>
                  {items.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <button>SignUp</button>
      </nav>
    );
  }
}
export default Navbar;
