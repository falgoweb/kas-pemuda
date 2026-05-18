/* ================= UPDATE HEADER ================= */

function updateHeader(){

    document.getElementById("th1")
    .innerText =
    document.getElementById("header1").value
    || "Kolom 1";

    document.getElementById("th2")
    .innerText =
    document.getElementById("header2").value
    || "Kolom 2";

    document.getElementById("th3")
    .innerText =
    document.getElementById("header3").value
    || "Kolom 3";

}

/* ================= NOMOR OTOMATIS ================= */

let nomor = 1;

/* ================= TAMBAH DATA ================= */

function tambahData(){

    let v1 =
    document.getElementById("input1").value;

    let v2 =
    document.getElementById("input2").value;

    let v3 =
    document.getElementById("input3").value;

    let body =
    document.getElementById("tableBody");

    let row = `
    
    <tr>

        <td 
            class="col-number"
            contenteditable="true"
        >
            ${nomor}
        </td>

        <td contenteditable="true">
            ${v1}
        </td>

        <td contenteditable="true">
            ${v2}
        </td>

        <td contenteditable="true">
            ${v3}
        </td>

    </tr>

    `;

    body.innerHTML += row;

    nomor++;

    // RESET INPUT

    document.getElementById("input1").value="";
    document.getElementById("input2").value="";
    document.getElementById("input3").value="";

}
/* ================= ZOOM ================= */

let zoomLevel = 1;

function zoomIn(){

    zoomLevel += 0.1;

    document.getElementById("paper")
    .style.transform =
    `scale(${zoomLevel})`;
}

function zoomOut(){

    if(zoomLevel > 0.5){

        zoomLevel -= 0.1;

        document.getElementById("paper")
        .style.transform =
        `scale(${zoomLevel})`;
    }

}