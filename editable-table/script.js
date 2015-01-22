'use strict';

(function () {

  var table = document.querySelector('table');
  var dataCells = table.querySelectorAll('tr > td');
  var rows = table.querySelectorAll('tr');
  var code = document.querySelector('code');
  var resetButton = document.querySelector('button');
  rows = Array.prototype.slice.call(rows, 1);
  var ncols = rows[0].children.length - 1;
   
  var initialData = {0:[1,2,3,4,5],1:[6,7,8,9,10],2:[11,12,13,14,15]};
  
  // extract datasets from table
  function getTableData () {
    var d = {};
    Array.prototype.forEach.call(rows, function (row, i) {
      var rowCells = row.querySelectorAll('td');
      return Array.prototype.map.call(rowCells, function (cell, j) {
        if (!d[j]) d[j] = [];
        d[j].push(parseInt(cell.textContent, 10));
      });
    });
    return d;
  }
   
  // reset table
  function setTableData (data) {
    Array.prototype.forEach.call(rows, function (row, i) {
      var rowCells = row.querySelectorAll('td');
      return Array.prototype.map.call(rowCells, function (cell, j) {
        cell.textContent = initialData[j][i];
      });
    });
    code.innerHTML = JSON.stringify(data);
  }
   
  function initialize () {
    // make data cells editable
    Array.prototype.forEach.call(dataCells, function (cell) {
      cell.contentEditable = true;
    });
     
    // listen for edit events on the data cells
    table.addEventListener('keydown', function (e) {
      if (e.target.tagName === 'TD') {
        setTimeout(function () {
          code.innerHTML = JSON.stringify( getTableData() );
        }, 0);
      }
    });
     
    resetButton.addEventListener('click', setTableData.bind(null, initialData));
  }

  document.addEventListener('DOMContentLoaded', initialize);

})();
