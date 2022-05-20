
//Livery-27
var dropdown27 = document.createElement("li");
dropdown27.innerHTML = "RAAF Boeing P8A Poseidon"
    document.getElementsByClassName("geofs-aircraft-list")[0].appendChild(dropdown27);
    let dropdown27Settings = document.createElement("div");
dropdown27.setAttribute("onclick", 'geofs.aircraft.instance.loadLivery("2")');




let lastLivId = 0;
let lastMpLId = 0;
let a321id = null
let b747id = null
//find id of the 747 and a321 automatically
document.querySelectorAll('[data-aircraft]').forEach(function(e){
  if (e.innerText.includes("A321"))
    a321id = e.attributes["data-aircraft"].value
})
 
document.querySelectorAll('[data-aircraft]').forEach(function(e){
  if (e.innerText.includes("747"))
    b747id = e.attributes["data-aircraft"].value

 
//737 Trsavia
newDiv10 = document.createElement("div");
 
newDiv10.setAttribute("data-aircraft", 4);
newDiv10.setAttribute("data-livery", 17);
 
newDiv10.innerHTML = 'raaf';
 

 
if (document.getElementsByClassName("geofs-aircraft-list")[0].children[5].childElementCount == 7){
  document.getElementsByClassName("geofs-aircraft-list")[0].children[5].appendChild(newDiv);
  document.getElementsByClassName("geofs-aircraft-list")[0].children[5].appendChild(newDiv1);
  document.getElementsByClassName("geofs-aircraft-list")[0].children[5].appendChild(newDiv2);
  document.getElementsByClassName("geofs-aircraft-list")[0].children[5].appendChild(newDiv3);
    document.getElementsByClassName("geofs-aircraft-list")[0].children[5].appendChild(newDiv9);
    document.getElementsByClassName("geofs-aircraft-list")[0].children[5].appendChild(newDiv10);
    document.getElementsByClassName("geofs-aircraft-list")[0].children[5].appendChild(newDiv11);
    document.getElementsByClassName("geofs-aircraft-list")[0].children[5].appendChild(newDiv12);
}
 
if (document.getElementsByClassName("geofs-aircraft-list")[0].children[4].childElementCount == 7){
  document.getElementsByClassName("geofs-aircraft-list")[0].children[4].appendChild(newDiv);
  document.getElementsByClassName("geofs-aircraft-list")[0].children[4].appendChild(newDiv1);
  document.getElementsByClassName("geofs-aircraft-list")[0].children[4].appendChild(newDiv2);
  document.getElementsByClassName("geofs-aircraft-list")[0].children[4].appendChild(newDiv3);
      document.getElementsByClassName("geofs-aircraft-list")[0].children[4].appendChild(newDiv9);
    document.getElementsByClassName("geofs-aircraft-list")[0].children[4].appendChild(newDiv10);
    document.getElementsByClassName("geofs-aircraft-list")[0].children[4].appendChild(newDiv11);
    document.getElementsByClassName("geofs-aircraft-list")[0].children[4].appendChild(newDiv12);
}
 
 
  if (document.getElementsByClassName("geofs-aircraft-list")[0].children[10].childElementCount == 4){
document.getElementsByClassName("geofs-aircraft-list")[0].children[10].appendChild(newDiv4)
  }
  if (document.getElementsByClassName("geofs-aircraft-list")[0].children[11].childElementCount == 4){
document.getElementsByClassName("geofs-aircraft-list")[0].children[11].appendChild(newDiv4)
  }
 
 
document.querySelectorAll('[data-aircraft]').forEach(function(e){
  if (e.innerText.includes("A321"))
    e.appendChild(newDiv6)
})
document.querySelectorAll('[data-aircraft]').forEach(function(e){
  if (e.innerText.includes("A350-1000"))
    e.appendChild(newDiv5)
})
document.querySelectorAll('[data-aircraft]').forEach(function(e){
  if (e.innerText.includes("747"))
    e.appendChild(newDiv7)
})
 
document.getElementsByClassName("geofs-list-collapsible-item geofs-notstudent-role")[0].children[0].children[14].appendChild(newDiv8)
// master livery function
 
if (geofs.version == 2.9){
  function updateLivery(){
          if (parseInt(geofs.aircraft.instance.liveryId) == 14){
 
Object.values(geofs.api.models._primitives).forEach(function(e){
if (e._apiLla[0] - geofs.aircraft.instance.llaLocation[0] == 0){
console.log(e);
geofs.api.Model.prototype.changeTexture("https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/id181__1_.png", 0, e)
  if (!e._resource._url.includes("748f.gltf")) {
          geofs.api.Model.prototype.changeTexture("https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/id163__1_.png", 0, e)
        }
}})
            
  }

 
if (parseInt(geofs.aircraft.instance.id) == 4 && parseInt(geofs.aircraft.instance.liveryId) == 17){
geofs.api.changeModelTexture(geofs.aircraft.instance.definition.parts[0]["3dmodel"]._model, "https://i.ibb.co/wJX7YXV/raaf.jpg", 3);
  }

    e.lastLivery = e.currentLivery
  })
}
}
 
setInterval(function(){
  if (lastLivId != parseInt(geofs.aircraft.instance.liveryId)){
  updateLivery();
  }
  lastLivId = parseInt(geofs.aircraft.instance.liveryId)
}, 500)
setInterval(function(){
  updateMultiplayer();
}, 10000)
