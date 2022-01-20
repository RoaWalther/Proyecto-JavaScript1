
//ejercico: obtener los datos y mostrarlos en pantalla

document.getElementById("infoApro").addEventListener("click", ()=> {

	axios("pro.txt").then(res=>prueba(res));
	
	const prueba = (res)=> {
		document.querySelector(".num-apro").innerHTML= res.data.aprobados;
		document.querySelector(".num-des").innerHTML= res.data.desaprobados;
	}
})

// document.getElementById("infoApro").addEventListener("click", ()=> {

// 	axios("pro.txt").then(res=>prueba(res));
	
// 	const prueba = (res)=> {
// 		getApro(res);
// 		getDes(res);
// 	}
// })

// const getApro = (res)=> {
// 	let div = document.createElement("div");
// 	div.classList.add("num-aprobado");
// 	div.innerHTML = res.data.aprobados;
// 	document.querySelector(".resultados").appendChild(div);
// }


// const getDes = (res)=> {
// 	let div = document.createElement("div");
// 	div.classList.add("num-desaprobado");
// 	div.innerHTML = res.data.desaprobados;
// 	document.querySelector(".resultados").appendChild(div);
// }



