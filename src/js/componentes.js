import '../css/componentes.css';

export const saludar = (nombre) => {
  console.log('Creando etiqueta h1');

  const h1 = document.createElement('h1');// creo un h1
  h1.innerText = `Hola, ${ nombre }, vas muy bien`;// agrego texto al h1

  const h2 = document.createElement('h2');// creo un h2
  h2.innerText = `aqui estoy, ${ nombre }`;// agrego texto al h2

  document.body.append(h1);// lo inserto en el body

  document.body.append(h2);// lo inserto en el body
};
