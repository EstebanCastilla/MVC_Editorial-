document.querySelector('.btn-addTask').addEventListener('click',function(e){
  const newtask = document.querySelector('input').value
  const task = JSON.parse(localStorage.getItem('task')) || []

  if(task.length===0){
    task.push(
      {
        '0':newtask
      }
    )
  }
  else{
    let ultimoElemento = task[task.length-1]
    let  key = Object.keys(ultimoElemento)[0];
    key = parseInt(key)+1
    task.push(
      {
        [key.toString()]:newtask
      } 
    )
  }

  localStorage.setItem('task',JSON.stringify(task))
  document.querySelector('.succes').innerHTML=`task Save
    volviendo al inicion en 3 segundos.
  `
  setTimeout(function(){
    window.location.pathname='html/main.html'   
  },3000)
})

document.querySelector('.btn-atras').addEventListener('click',function(e){
  window.location.pathname='html/main.html'
})



// console.log(innerHtmlUl)