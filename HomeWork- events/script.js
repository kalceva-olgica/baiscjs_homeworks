document.getElementById("myButton").addEventListener("click", myTable); // koga kopceto e kliknato, se povikuva funkcijata createTable

function myTable() {
  const rows = parseInt(document.getElementById("rows").value);
  const columns = parseInt(document.getElementById("columns").value);

  // Validate input
  if (!rows || !columns || rows <= 0 || columns <= 0) {
    // ovde kazuvam ako ne vnesime broj na redica/kolona (prazno pole) ili vnesime broj pomal od 0 da isprinta alert
    alert("Enter vaild number of rows and columns!!");
    return;
  }

  const myDiv = document.getElementById("myDiv");
  myDiv.innerHTML = ""; // ovde stavam prazen string bidejki ovde ke ja izgeneriram tabelata

  let table = '<table border="4">';
  for (let i = 1; i <= rows; i++) {
    table += "<tr>"; // sekoj <tr> tablerow e dodaden na tabelata table
    for (let j = 1; j <= columns; j++) {
      table += `<td>Row-${i} Column-${j}</td>`; // <td> tableCell odnosno row-od i ni presmetuva na koj red sme a column- od j na koja kolona
    }
    table += "</tr>";
  }
  table += "</table>"; // ovde ja zatvarame tabelata

  myDiv.innerHTML = table;
}
