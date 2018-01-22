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
  return document.querySelector('#grand-node div div div div')






}

  