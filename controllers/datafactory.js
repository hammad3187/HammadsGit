angular
        .module('myapp')
        .factory('myfactory',function(){

var  appdata = [
 
           {
            "type": " appartment",
            "price": "180000",
            "address":"DHA",
            "description": " a very laxouris place to live in, comfortable as fuck"
           }
           ,

           {
            "type": " house",
            "price": "3200",
            "address":"orangi town",
           "description": " a very laxouris place to live in, comfortable as fuck"

           }

           ,

           {
            "type": " condo ",
            "price": "3200",
            "address":"orangi town",
            "description": " a very laxouris place to live in, comfortable as fuck"


           }




         ];
function getdata() {
 return appdata;
}
return{

getdata: getdata  }   
       }
    
    
    
    );