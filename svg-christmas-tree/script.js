(function () {
  function centerTree () {
    var treeGroup = document.querySelector('#tree-group');
    var dx = (window.innerWidth - treeGroup.getBoundingClientRect().width)/2;
    var transform = 'transform' in document.body.style ? 'transform' : 'webkitTransform';
    treeGroup.style[transform] = 'translateX(' + dx + 'px)';
  }

  document.addEventListener('DOMContentLoaded', centerTree);
})();