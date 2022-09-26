/*
  Con este script mostramos los datos que existen dentro del arrat struc books
 */


module.exports = async function main(callback){

  try{
      const booksfactoy = artifacts.require("booksfactory");
      const instance = await booksfactoy.deployed();
      
      //obteniendo los libros dentro de la cadena de bloque

      let books = ['El viejo y el mar','The Perfume']; //estos son los nombres de los libros que se introdujo en la blockchain
      for(let i = 0; i < books.length; ++i){
         console.log("Mostando el libro:", (await instance.seeBook(books[i])).toString());
      }
      

    callback(0);
  } catch(err){
    console.error(err);
    callback(1);

  } 

};