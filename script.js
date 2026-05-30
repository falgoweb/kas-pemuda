console.log("GRIDFAL READY ✔");

// anti double load (INI FIX ERROR kamu sebelumnya)
if (window.__GRIDFAL_LOADED__) {
  console.log("⚠ Script sudah pernah jalan, stop duplicate");
} else {
  window.__GRIDFAL_LOADED__ = true;

  window.undoStack = window.undoStack || [];

  function saveState(table) {
    window.undoStack.push(table.innerHTML);
    if (window.undoStack.length > 20) window.undoStack.shift();
  }

  window.undoAction = function () {
    const table = document.getElementById("gridTable");
    if (!table) return;

    if (window.undoStack.length === 0) return;

    table.innerHTML = window.undoStack.pop();
    console.log("↩ UNDO OK");
  };

  document.addEventListener("DOMContentLoaded", function () {

    const table = document.getElementById("gridTable");
    const addRowBtn = document.getElementById("addRowBtn");
    const addColumnBtn = document.getElementById("addColumnBtn");

    if (!table || !addRowBtn || !addColumnBtn) {
      console.error("❌ HTML ID tidak ditemukan");
      return;
    }

    // ROW
    addRowBtn.onclick = function () {
      saveState(table);

      const cols = table.rows[0].cells.length;
      const row = table.insertRow();

      for (let i = 0; i < cols; i++) {
        const cell = row.insertCell();
        cell.contentEditable = "true";
      }

      console.log("✔ ROW OK");
    };

    // COLUMN
    addColumnBtn.onclick = function () {
      saveState(table);

      const rows = table.rows;

      for (let i = 0; i < rows.length; i++) {
        const cell = rows[i].insertCell();
        cell.contentEditable = "true";
      }

      console.log("✔ COLUMN OK");
    };

  });
}
