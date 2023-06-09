const Gallery = () => {

  const images = [
    {
      "imagen": "./assets/img/photo1.png",
      "alt": "Imagen 1"
    },
    {
      "imagen": "./assets/img/photo2.png",
      "alt": "Imagen 2"
    },
    {
      "imagen": "./assets/img/photo3.png",
      "alt": "Imagen 3"
    },
    {
      "imagen": "./assets/img/photo4.png",
      "alt": "Imagen 4"
    },
    {
      "imagen": "./assets/img/photo5.png",
      "alt": "Imagen 5"
    },
    {
      "imagen": "./assets/img/photo6.png",
      "alt": "Imagen 6"
    }
  ]
  

  const tempContainer = `
    <div class="gallery">
      ${
        images.map((img)=>{
          const { imagen, alt} = img;

          return(`
            <img loading="lazy" src=${imagen} alt=${alt}>
          `).join('');
        }).trim()
      }
    </div>
  `;

  return tempContainer
}