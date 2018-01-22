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
  var current = document.getElementById("div#grand-node").querySelectorAll('div');
  var next = [];

  while (current){
    if (typeof current.innerHTML === "string"){
      return current.innerHTML;
    }
    if (Array.isArray(current)){
      for (var x = 0; x < current.length; x++){
        next.push(current[x])
      }
    }
    current = next.shift()
  }
  return null;
}
