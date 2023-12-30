function generateTable() {
  var number = document.getElementById("number").value;
  var tableContainer = document.getElementById("table-container");

  //Clear previous table
  tableContainer.innerHTML = "";

  //Create a table element
  var table = document.createElement("table");

  //Create table header
  var headerRow = table.insertRow(0);
  var headerCell = headerRow.insertCell(0);
  headerCell.textContent = "Multiplication Table";

  //Create table rows
  for (var i = 1; i <= 10; i++) {
    var row = table.insertRow(i);
    var cell = row.insertCell(0);
    cell.textContent = `${number} * ${i} = ${i * number}`;
  }
  //Append the table to the container
  tableContainer.appendChild(table);
}
