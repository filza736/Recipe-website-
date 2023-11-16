var selectedRow =null

function onformsubmit(e){
    event.preventDefault();
    var formdata = readformdata();
    if (selectedRow == null){
        insertNewrecord(formdata);
    }
    else{
        updateRecord(formdata);
    }
    resetform();
}

function readformdata(){
    var DATA = {};
    DATA ["productcode"]=document.getElementById("productcode").value;
    DATA ["product"]=document.getElementById("product").value;
    DATA ["qty"]=document.getElementById("qty").value;
    // DATA ["price"]=document.getElementById("price").value;
    return DATA;
}
function insertNewrecord(data) {
    // var multi = data.qty * data.price;
    var table = document.getElementById("store").getElementsByTagName("tbody")[0];

    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.productcode;

    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.product;

    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.qty;

    // cell4 = newRow.insertCell(3); 
    // newRow.setAttribute('data-original-price' , data.price);
    // cell4.innerHTML = multi;

    cell5 = newRow.insertCell(3);
    cell5.innerHTML = '<button onclick="onEdit(this)" class="btn btn-outline-danger text-light fw-bold">Edit</button>  <button onclick="onDelete(this)" class="btn btn-outline-danger text-light fw-bold">Delete</button> ';

    // calculateTotalPrice();
}  
// function calculateTotalPrice() {
//     var table = document.getElementById("store").getElementsByTagName("tbody")[0].getElementsByTagName("tr"); // Add [0] to get the first tbody
//     var total = 0;

//     for (var i = 0; i < table.length; i++) {
//          var row = table[i]; // Declare 'row' using 'var'
//          var priceCell = row.cells[3]; // Declare 'priceCell' using 'var'
//          var price = parseFloat(priceCell.innerHTML); // Declare 'price' using 'var'
//          total += price;
//     }

//     var totalPriceCell = document.getElementById("totalPrice");
//     totalPriceCell.innerHTML = "Sum: " + total;
// }





// function calculateTotalPrice(){
//     var table = document.getElementById("store").getElementsByTagName("tr");
//     var total = 0;

//     for (var i = 0; i < table.length; i++)
//     {
//          var row = table[i];
//         var priceCell = row.cells[3];
//         var price = parseFloat(priceCell.innerHTML);
//         total += price;
//     }

//     var totalPriceCell = document.getElementById("totalPrice");
//     totalPriceCell.innerHTML = "Sum: " + total;
// }
function onEdit(td){
    selectedRow=td.parentElement.parentElement;
    document.getElementById("productcode").value=selectedRow.cells[0].innerHTML;
    document.getElementById("product").value=selectedRow.cells[1].innerHTML;
    document.getElementById("qty").value=selectedRow.cells[2].innerHTML;
    // document.getElementById("price").value=selectedRow.getAttribute('data-original-price');
} 
function updateRecord(formdata){
    // var multi = formdata.qty * formdata.price;
    selectedRow.cells[0].innerHTML=formdata.productcode;
    selectedRow.cells[1].innerHTML=formdata.product;
    selectedRow.cells[2].innerHTML=formdata.qty;
    // selectedRow.cells[3].innerHTML=multi;
    resetform();
    // calculateTotalPrice();
}

function onDelete(td){
    if(confirm('Do you want to delete this record?')){
       var row = td.parentElement.parentElement;
        document.getElementById('store').deleteRow(row.rowIndex);
        resetform();
        // calculateTotalPrice();
    }
}

function resetform(){
    document.getElementById("productcode").value='';
    document.getElementById("product").value='';
    document.getElementById("qty").value='';
    // document.getElementById("price").value='';
    selectedRow = null;
}