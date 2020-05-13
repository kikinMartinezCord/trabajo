let nombreCliente = document.getElementById("nombre");
let nombreRuc = document.getElementById("ruc");
let fecha = document.getElementById("fecha");
let inputNro = document.getElementById("nro");

let inputCantidad = document.getElementById("inputCantidad");
let inputDescripcion = document.getElementById("inputDescripcion");
let inputPunit = document.getElementById("inputPunit");
let inputPtotal = document.getElementById("inputPtotal");
let tbody = document.getElementById("tbody");
let inputTotal = document.getElementById("inputTotal")

let form = document.getElementById("factura");
let btnGuardar = document.getElementById("btnGuardar");

let arregloFact = []
let itemFactura = [];
let total = 0;


const itemsdelaFACTURA = () => {
    tbody.innerHTML = "";
    itemFactura.forEach(f => {
        let tr= document.createElement("tr");

        let td1 = document.createElement("td");
        td1.innerText = f.cantidad;
        tr.appendChild(td1);
    
        let td2 = document.createElement("td");
        td2.innerText = f.descripcion;
        tr.appendChild(td2);
    
        let td3 = document.createElement("td");
        td3.innerText = f.pUnit;
        tr.appendChild(td3);
    
        let td4 = document.createElement("td");
        td4.innerText = f.pTotal;
        tr.appendChild(td4);     
    
    
        tbody.appendChild(tr);



    })
  
   }

   const borrarFilas = () => {
    nombreCliente.value = "";
    nombreRuc.value = "";
    fecha.value = "";
    inputNro.value = "";
    inputTotal.innerText = "";
    
    for (let i = 0; i < itemFactura.length+1; i++) {
        let tr = document.querySelector("tr");
        tr.remove();
        
    }
    
    
   }


inputPunit.onchange = () =>{
    inputPtotal.value = inputCantidad.value*inputPunit.value;
}

inputPunit.onkeyup = () =>{
    inputPtotal.value = inputCantidad.value*inputPunit.value;
}

inputCantidad.onchange = () =>{
    inputPtotal.value = inputCantidad.value*inputPunit.value;
}

inputCantidad.onkeyup = () =>{
    inputPtotal.value = inputCantidad.value*inputPunit.value;
}

form.onsubmit = (e) => {
    e.preventDefault();
    let objFila = {
        cantidad: inputCantidad.value,
        descripcion : inputDescripcion.value,
        pUnit: inputPunit.value,
        pTotal : inputCantidad.value*inputPunit.value
    }
    console.log(objFila);
    
    itemFactura.push(objFila);
    inputCantidad.value = "";
    inputDescripcion.value = "";
    inputPunit.value = "";
    inputPtotal.value = "";
    
    
    total += objFila.pTotal;
    console.log(total);
    
    itemsdelaFACTURA();
    inputTotal.innerText = total;
   }

btnGuardar.onclick = () => {
    let objFactura = {
        nombre : nombreCliente.value,
        ruc : nombreRuc.value,
        fecha : fecha.value,
        nro : inputNro.value,
        total ,
        itemFactura 
    }

    arregloFact.push(objFactura)
    let arregloFactString = JSON.stringify(arregloFact);
    localStorage.setItem("arregloFact", arregloFactString);
    
    borrarFilas();
    itemFactura = [];
}