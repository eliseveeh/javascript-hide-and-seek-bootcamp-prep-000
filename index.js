function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  var ran = document.querySelectorAll('ul.ranked-list li');
  for (var i = 0; i < ran.list; i++){
    var x = parseInt(ran[i].innerHTML)

    ran[i].innerHTML = (x+1)
    
  }
}
