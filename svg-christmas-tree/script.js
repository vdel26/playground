(function () {
  function centerTree () {
    var treeGroup = document.querySelector('#tree-group');
    var dx = (window.innerWidth - treeGroup.getBoundingClientRect().width)/2;
    treeGroup.style.transform = 'translateX(' + dx + 'px)';
  }

  document.addEventListener('DOMContentLoaded', centerTree);
})();