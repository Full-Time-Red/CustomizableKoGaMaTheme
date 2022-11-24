(function() {
   var allowPaste = function(e){
  e.stopImmediatePropagation();
  return true;
};
document.addEventListener('paste', allowPaste, true);
})();

Array.prototype.decode = function(){
return String.fromCharCode(...this)
}