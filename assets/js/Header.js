import personalData from "./DB/personalData.js";
import SimpleCard from "./components/Simple Card/SimpleCard.js";
import SmallCard from "./components/SmallCard/SmallCard.js";


const Header = () =>{

  const persona = personalData[0];
  const {name, img, location} = persona

  const socialData = personalData[1];

  console.log(socialData);


  const tempContainer = `
    <header class="header">
      ${SimpleCard(img, name, location)}
      <div class="subCards">
      ${
        socialData.map((data)=> {
          const {number, info}= data

          return(
            SmallCard(number,info)
            )
        }).join('')
      }
      </div>
        

    </header>
  `;

  return tempContainer.trim()
}

export default Header;