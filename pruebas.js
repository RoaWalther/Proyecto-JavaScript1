
//peticiones con fetch() de tipo Get y Post  donde traeremos el archivo informacion

//get
fetch("txt.txt")
  .then(res=>res.json())
  .then(res=> console.log("get normal: "+ res.edad));

//post
fetch("https://reqres.in/api/users" , {
  method: "POST",
  body: JSON.stringify({
    "name": "walther",
    "job": "programador"
  }),
  headers: {"Content-type": "aplication/json"}
}).then(resPost=> resPost.json())
  .then(resPost=> console.log("post normal: "+ resPost.id));

 //peticiones con fetch() de tipo Get y Post async

 const getAsync = async ()=>{
   let peticion = await fetch("pro.txt");
   let res = await peticion.json();
   console.log("get async: "+ res.aprobados);
 } 
getAsync();

const postAsync = async ()=>{
  let peticion = await fetch("https://reqres.in/api/users",{
    method: "POST",
    body: JSON.stringify({
      "name": "walther",
      "job": "programador"
    }),
    headers: {"Content-type":"aplication/jason"}
  })
  let resPost = await peticion.json();
  console.log("post async: "+ resPost.id)
}

postAsync();

//peticiones con la libreria axios de tipo Get y Post recuerda importar la libreria en el archivo html
//get
axios("txt.txt").then(res=> console.log("get axios: "+ res.data.name))
//post

axios.post("https://reqres.in/api/users", {
  "name": "walther",
  "job": "programador"
}).then(resPost => console.log("post axios: "+resPost.data.name))

//peticiones con la libreria axios de tipo Get y Post async

//get
const getAyncAxio = async ()=>{
  let res = await axios("txt.txt");
  console.log("get axios async: " + res.data.job)
}

getAyncAxio();

//post

const postAsyncAxio = async ()=> {
  resPost = await axios.post("https://reqres.in/api/users", {
    "name": "walther",
    "job": "programador"
  })
  console.log("post async axios: "+resPost.data.job)
}


postAsyncAxio();