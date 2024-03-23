var cats= ['Milo','Otis','Garfield'] 


function destructivelyAppendKitten(name) {
    kittens.push(name);
    return kittens;
 }
 
 function destructivelyPrependKitten(name){
   kittens.unshift(name);
   return kittens;
 }
 
 function destructivelyRemoveLastKitten(){
   kittens.pop();
   return kittens
 }
 
 function destructivelyRemoveFirstKitten(){
   kittens.shift();
   return kittens;
 }
 
 function appendKitten(name){
   var name_1= [...kittens,name];
   return name_1;
 }
 
 function prependKitten(name){
   var name_2=[name, ...kittens];
   return name_2
 }
 
 function removeLastKitten(){
   var cats= kittens.slice(0,kittens.length-1);
   return cats;
 }
 
 function removeFirstKitten(){
   var cats= kittens.slice(1)
   return cats
 }
 


