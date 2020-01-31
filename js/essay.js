
var btn = document.getElementsByClassName('like');
for (var i =0 ; i<btn.length ; i++){
    var clicked = btn[i];
    clicked.addEventListener('click' , function(event){
        var redd = event.target;
        redd.classList.toggle('red1');
    })
}
