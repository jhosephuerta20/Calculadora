function agregarNumeros (value){
  document.getElementById('pantalla').value += value;
}

function limpiarPantalla(){
  document.getElementById('pantalla').value='';
}

function calcular(){
  const valor= document.getElementById('pantalla').value;
  const resultado=eval(valor);
    document.getElementById('pantalla').value= resultado;
}