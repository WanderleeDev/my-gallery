function addBlock(target, content, position = 'beforebegin') {

  const targetElement = document.querySelector(target);

  if (content instanceof HTMLElement) {
    targetElement.insertAdjacentElement(position, content);
  }else if (typeof content === 'string' && content.startsWith('<') && content.endsWith('>')){
    targetElement.insertAdjacentHTML(position, content);
  }else{
    console.error('Contenido válido: HTML en cadenas de texto o elementos HTML. Posiciones válidas: afterbegin, afterend, beforebegin o beforeend');
  }
}

export default addBlock