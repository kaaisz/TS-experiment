const create2DArray = (rowsNum: number, colsNum: number) => {
  let arr = [];
  for(let i = 0; i < rowsNum; i++) {
    let arrRow = [];
    for (let j = 0; j < colsNum; j++) {
      let arrCol = [];
      arrRow.push(arrCol);
    }
    arr.push(arrRow);
  }
  console.log(arr);
}

create2DArray(5, 5);

