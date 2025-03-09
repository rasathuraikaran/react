import "./Header.css";
import styles from "./Header.module.css";
function Header() {
 const myStyle = {
  color: "red",
  backgroundColor: "lightblue",
  padding: "10px",
  fontFamily: "Sans-Serif",
 };
 return (
  <div>
   <h1 className={styles.bigBlue}>this is heading</h1>
   <p>this is para</p>
  </div>
 );
}

export default Header;
