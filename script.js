// =========================
// ADD ROW
// =========================

function addRow(){

  const table = document.getElementById("gridTable");

  const columnCount = table.rows[0].cells.length;

  const newRow = table.insertRow();

  for(let i = 0; i < columnCount; i++){

    const cell = newRow.insertCell();

    cell.contentEditable = "true";

  }

}

// =========================
// ADD COLUMN
// =========================

function addColumn(){

  const table = document.getElementById("gridTable");

  for(let i = 0; i < table.rows.length; i++){

    const cell = table.rows[i].insertCell();

    cell.contentEditable = "true";

  }

}

// =========================
// EXPORT PDF
// =========================

function exportPDF(){

  alert("Export PDF berhasil dipanggil!");

}
