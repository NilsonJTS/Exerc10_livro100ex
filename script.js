const btnCalcular=document.getElementById("calcular")
const btnLimpar=document.getElementById("limpar")
const container=document.getElementById("container")
let ladoA, ladoB, ladoC, altura


btnCalcular.addEventListener('click',()=>{
    calcular()
})


function calcular(){
    ladoA=parseFloat(frm.lado_a.value.replace(",","."))
    ladoB=parseFloat(frm.lado_b.value.replace(",","."))
    ladoC=parseFloat(frm.lado_c.value.replace(",","."))
    altura=parseFloat(frm.altura.value.replace(",","."))

    let resultPerimetro = ladoA+ladoB+ladoC
    let resultArea = (ladoA*altura)/2

    const divResultado=document.createElement('div')
    const textoRestult=`A área do triângulo é: ${resultArea}cm²
                        <br> O perímetro do triângulo é: ${resultPerimetro}cm.`
    divResultado.innerHTML= textoRestult
    divResultado.classList.add("btn")
    container.appendChild(divResultado)
   
}