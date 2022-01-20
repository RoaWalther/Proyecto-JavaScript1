					//PETICIONES A HTTP se envia a un servicio y nos devuelve la petisicion.

let peticion;
let peticionGet;//variable para la peticion Get

if (window.XMLHttpRequest) {
	peticion = new XMLHttpRequest();
	peticionGet = new XMLHttpRequest();
} else {
	peticion = new ActiveXOBject("Microsoft.XMLHTTP");
	peticionGet = new ActiveXOBject("Microsoft.XMLHTTP");
}

	//ENVIOS CON GET
peticionGet.addEventListener("load", ()=> {
	let res;
	if (peticionGet.status == 200 || peticionGet.status==201) {
		res = peticionGet.response;
	} else {
		res= "no se encontro archivo"
	}	
	console.log(JSON.parse(res));	
});

peticionGet.open("GET","https://reqres.in/api/users?page=2");
//peticionGet.open("GET", "problema11.txt");
peticionGet.send();

// envios con POST

peticion.addEventListener("load", ()=> {//se crea un evento para la peticion
	let res;
	if (peticion.status == 200 || peticion.status ==201) {
		res = peticion.response;
	} else {
		res= "no se encontro archivo"
	}		
	console.log(JSON.parse(res));	
});

peticion.open("POST", "https://reqres.in/api/users");//se genera una petidion y se especifica el tipo de envio post
peticion.setRequestHeader("Content-type","aplication/json;charset=UTF8");
peticion.send(JSON.stringify({
    "name": "morpheus",
    "job": "leader"
})
);

//los envios con fetch() no necesitan crear el window.XMLHttpRequest
				//ENVIOS CON fetch() tipo= GET()

fetch("https://reqres.in/api/users?page=2")
	.then(res=>res.json())
	.then(res=>console.log(res));


// 				//ENVIOS CON fetch() Tipo= POST es mejor que el de la peticion


fetch("https://reqres.in/api/users", {
	method: "POST",
	body : JSON.stringify({
		"name": "morpheus",
    	"job": "leader"
	}),
	headers : {"Content-type":"aplication/json"} //no es necesario este valor pero igual se coloca
}).then(resPost=>resPost.json())
	.then(resPost=>alert(resPost.id))

		//OBTENER IMAGEN CON GET

const imagen = document.querySelector(".imagen");

fetch("./img/descarga1.jpg")
	.then(resImg=>resImg.blob())
	.then(img=>imagen.src = URL.createObjectURL(img))










