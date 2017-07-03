var array= [15,  29, 78, 29, 40, 20, 18, 100, 78, 68];
function escognum(array){
  var par;
  var impar;
  for(var i=0;i<array.length;i++) {
    if(i%2==0){
      par+=array[i];
      console.log("Par:" + par);
    }else{
      impar+=array[i];
      console.log("Impar:" + impar);
    }

  }
