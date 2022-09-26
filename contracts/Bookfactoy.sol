// SPDX-License-Identifier: MIT-3.0

pragma solidity ^0.8.0;
pragma experimental ABIEncoderV2;

// contrato ejemplo de factory

contract Books{
    
    struct book{
        string title;
        string gender;
        uint16 edition;
        uint16 price;
    }

    //array books list
    book[] listbooks;

    //mapping book
    mapping(string => book) mapbooks;

    //funcion de la aritmetica no comprobada
    function  unsafe_inc(uint x) private pure returns(uint){
     unchecked{return x + 1;}
    }
    //
    function newBook(string memory _title, string memory _gender, uint16 _edition, uint16 _price) public {

        book[] memory newlistbook = listbooks; //declaro una variable para interactuar con ella y no con la variable en EVM,asi se ahorra gas
        for(uint256 i = 0; i < newlistbook.length; i = unsafe_inc(i)){
            require(keccak256(abi.encodePacked(_title)) != keccak256(abi.encodePacked(newlistbook[i].title)),"Book exists in the list");
        }
        listbooks.push(book(_title, _gender, _edition, _price));
        mapbooks[_title] = book(_title, _gender, _edition, _price);
    }

    //funcion para mostrar el mapping con el libro especifico
    function seeBook(string memory _title) public view returns(book memory){
        return mapbooks[_title];
    }

}
//contrato fabrica de libros
   contract booksfactory is Books{
    Books[] public books; //referenciando el contrato de libros
    function createBooks() public {
       Books newbooks = new Books();
       books.push(newbooks);     
    }

   }