			//librerias axios para petisiones 
			//basado en promesa como fetch()
//metodo get con libreria axio

axios("txt.txt")
	.then(res=>console.log(res.data))


//metodo post con libreria axio
axios.post("https://reqres.in/api/users", {
	"nombre": "Walther",
	"apellido": "Roa"
})
	.then(res=>console.log(res.data));



	//fetch y axio con await y async
//Primero ejecutamos con fetch()

// const getNombre = async ()=> {
// 	let peticion = await fetch("txt.txt");
// 	let res = await peticion.json();
// 	let div = document.createElement("DIV");
// 	div.classList.add("nombre");
// 	div.innerHTML = res.name;
// 	document.body.appendChild(div);
// }

const getNombre = async ()=> {
	let peticion = await fetch("txt.txt");
	let res = await peticion.json();
	let inp= document.createElement("DIV");
	inp.classList.add("nombre");
	inp.innerHTML=  res.name;
	document.body.appendChild(inp);
}

document.getElementById("nombre").addEventListener("click", getNombre);

const getEdad = async ()=> {
	let peticion = await fetch("txt.txt");
	let res = await peticion.json();
	let div = document.createElement("DIV");
	div.classList.add("edad");
	div.innerHTML = res.edad;
	document.body.appendChild(div);
}

document.getElementById('edad').addEventListener("click", getEdad);

//Segundo ejecutamos con axio

// const cargarNombre = async ()=> {
// 	let res = await axios("txt.txt");
// 	let div = document.createElement("DIV");
// 	div.classList.add("nombre");
// 	div.innerHTML=res.data.name;
// 	document.body.appendChild(div);
// }

// document.getElementById("nombre").addEventListener("click", cargarNombre)

// const cargarEdad = async ()=> {
// 	let res = await axios("txt.txt");
// 	let div = document.createElement("DIV");
// 	div.classList.add("nombre");
// 	div.innerHTML= res.data.edad;
// 	document.body.appendChild(div)
// }

// document.getElementById("edad").addEventListener("click",cargarEdad);