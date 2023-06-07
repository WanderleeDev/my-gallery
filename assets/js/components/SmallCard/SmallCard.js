const SmallCard = (number, text) => {

  const tempContainer = `
  <div class="smallCard">
    <span class="smallCard-number">${number}</span>
    <span class="smallCard-text">${text}</span>
  </div>
  `;

  return tempContainer;
}

export default SmallCard