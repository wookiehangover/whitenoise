(function(){
  var b = document.body;
  b.className = Math.random() * 2 > 1 ? 'a' : 'b';
  b.addEventListener && b.addEventListener('click', function(e){
    var req = Modernizr.prefixed('RequestFullScreen', b);
    req && req();
  }, true);

})();
