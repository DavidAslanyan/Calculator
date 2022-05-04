function clearUp() {
    document.getElementById("text1").value = "";
    document.getElementById("text2").value = "";
    document.getElementById("result").innerHTML = "";
  }
  
  function add() {
    let input1 = document.getElementById("text1").value;
    let input2 = document.getElementById("text2").value;
    input1 = parseInt(input1);
    input2 = parseInt(input2);
    document.getElementById("result").innerHTML= input1 + input2;
  }
  
  function subtract() {
    let input1 = document.getElementById("text1").value;
    let input2 = document.getElementById("text2").value;
    document.getElementById("result").innerHTML= input1 - input2;
  }
  
  function multiply() {
    let input1 = document.getElementById("text1").value;
    let input2 = document.getElementById("text2").value;
    document.getElementById("result").innerHTML= input1 * input2;
  }
  
  function divide() {
    let input1 = document.getElementById("text1").value;
    let input2 = document.getElementById("text2").value;
    document.getElementById("result").innerHTML= input1 / input2;
  } 
