document.querySelector('.btn-crear').addEventListener('click',function(e){
  console.log(window.location.pathname)
   location.pathname='html/create.html'
})
let innerHtmlUl=``
const tasks= JSON.parse(localStorage.getItem('task'))

function clickEliminar(e){
  const tasksnew = tasks.filter((task)=>Object.keys(task)[0].toString()!==`${e}`)
  localStorage.setItem('task',JSON.stringify(tasksnew))
  window.location.reload()
}
tasks.forEach((value) => {
  const keys = Object.keys(value)[0]
  console.log(keys)
  innerHtmlUl=innerHtmlUl+`
  <li class="main__items-item">
    <p>
      ${value[`${keys}`]}
    </p>
    <button class=btn-eliminar onClick="clickEliminar(${keys})">Eliminar</button> 
    <button class="btn-actualizar">Actualizar</button>
  </li>
  ` 
});
document.querySelector('ul').innerHTML=innerHtmlUl