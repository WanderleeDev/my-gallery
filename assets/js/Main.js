import Gallery from "./components/Gallery/Gallery.js"

const Main = () => {

  const tempContainer  = `
    <main class="hero-main">
    ${Gallery()} 
    </main>
  `;

  return tempContainer.trim()
}

export default Main