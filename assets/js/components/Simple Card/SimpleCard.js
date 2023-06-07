const SimpleCard = (img, name, location) => {

  const tempContainer = `
  <figure class="personalCard">
    <img class="personalCard-photo" src=${img} alt="foto de ${name}" loading="lazy">
    <figcaption class="personalCard-data">
      <span class="personalCard-name">${name}</span>
      <span class="personalCard-location">${location}</span>
    </figcaption>
  </figure>
  `;

  return tempContainer;
}

export default SimpleCard