import addBlock from "./assets/js/utils/addBlock.js";
import Main from "./assets/js/Main.js";
import Footer from "./assets/js/Footer.js";
import Header from "./assets/js/Header.js";

addBlock('.hero', Main(), 'afterbegin');
addBlock('.hero', Header(), 'afterbegin');
addBlock('.hero', Footer(), 'beforeend');