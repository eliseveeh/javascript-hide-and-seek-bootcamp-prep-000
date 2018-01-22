function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  var ran = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (var i = 0; i < ran.length; i++){
    var x = parseInt(ran[i].innerHTML);
    ran[i].innerHTML = (x + n).toString()
  }
}

function deepestChild(){
   var listOf = document.getElementById("grand-node").querySelectorAll('div');
   for (var x = 0; x < listOf.length; x++){
     console.log(listOf[x])



   }
}
