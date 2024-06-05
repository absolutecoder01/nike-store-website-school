var adventureList = [];
var adventures = document.getElementsByClassName('adventure');


for (var i = 0; i < adventures.length; i++) {
    var advName = adventures[i].innerHTML;
    adventureList.push(advName)
};

var searchBar = document.getElementById('search-bar');
searchBar.addEventListener('keyup', function(event) {
    var text = searchBar.value;

    for (var i = 0; i < adventureList.length; i++) {
        if (adventureList[i].indexOf(text) < 0) {
            adventures[i].style.display = 'none'; 
        } else {
            adventures[i].style.display = 'block'; 
        }
    };
    
})

$(function(){
    $('.adventures-container').hide();
    $('#search-bar').on('focus',function(){
        $('.adventures-container').show();
    });
    $('#search-bar').on('focusout',function(){
        setTimeout(
            function() 
            {
                $('.adventures-container').hide();
            }, 90);
          
       
    });
  })