/**
 * Test unitario del contrato
 */

const { expect, assert } = require('chai');
const Bookfactory = artifacts.require('booksfactory');

contract('Bookfactory',function([owner]){

    const book = ['El viejo y el mar','Aventura',16,59]; //para tester la funcion newBook
    
      beforeEach(async ()=> {
        this.instance = await Bookfactory.new({from:owner});
      });

      //Testing newBook function
      it('Should ingrase the book', async () => {
        const result = await this.instance.newBook('El viejo y el mar','Aventura',16,59, {from:owner});
        expect('Book inside of array', result,book); 
      });

      //Testing seeBook function
      it('Should return the specific book',async ()=> {
         const result = await this.instance.seeBook('El viejo y el mar',{from:owner});
         expect('Shoul show the book', result,book);
      });

      //Return error if the book does not found in the array
      it('Book does not exist',async ()=> {
           try{
              await this.instance.seeBook('The perfume');
            assert(false);
           }catch(err){
            assert(err);
           }
      });

});