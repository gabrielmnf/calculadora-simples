function soma(){
    let num1, num2, resp, exibicao;
    num1 = document.getElementById("Num1").value;
    num2 = document.getElementById("Num2").value;
    resp=parseFloat(num1)+parseFloat(num2);
    alert(resp);
    exibicao=document.getElementById("exibicao").innerText = "Resultado: " + resp;
}

function subtrai(){
    let num1, num2, resp, exibicao;
    num1 = document.getElementById("Num1").value;
    num2 = document.getElementById("Num2").value;
    resp=parseFloat(num1)-parseFloat(num2);
    alert(resp);
    exibicao=document.getElementById("exibicao").innerText = "Resultado: " + resp;
}

function multiplica(){
    let num1, num2, resp, exibicao;
    num1 = document.getElementById("Num1").value;
    num2 = document.getElementById("Num2").value;
    resp=parseFloat(num1)*parseFloat(num2);
    alert(resp);
    exibicao=document.getElementById("exibicao").innerText = "Resultado: " + resp;
}

function divide(){
    let num1, num2, resp, exibicao;
    num1 = document.getElementById("Num1").value;
    num2 = document.getElementById("Num2").value;
    if(num2!=0){
    resp=parseFloat(num1)/parseFloat(num2);
    alert(resp);
    exibicao=document.getElementById("exibicao").innerText = "Resultado: " + resp;
    } else if(num2==0){
        exibicao=document.getElementById("exibicao").innerText = "Valor invalido ";
    }
}