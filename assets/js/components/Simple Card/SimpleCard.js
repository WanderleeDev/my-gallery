const SimpleCard = (img, name, location) => {

  const tempContainer = `
  <figure class="personalCard">
    <img class="personalCard-photo" src=${img} alt="foto de ${name}" loading="lazy">
    <figcaption class="personalCard-data">
      <h1 class="personalCard-name">${name}</h1>
      <span class="personalCard-location">${location}</span>
    </figcaption>
  </figure>
  `;

  return tempContainer.trim();
}

export default SimpleCard