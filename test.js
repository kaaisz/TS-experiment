"use strict";
var create2DArray = function (rowsNum, colsNum) {
    var arr = [];
    for (var i = 0; i < rowsNum; i++) {
        var arrRow = [];
        for (var j = 0; j < colsNum; j++) {
            var arrCol = [];
            arrRow.push(arrCol);
        }
        arr.push(arrRow);
    }
    console.log(arr);
};
create2DArray(5, 5);
