function Confirm() {
    var number = window.document.querySelector('#number1')
    var res = window.document.querySelector('#res')
    var numberR = number.value

    res.innerHTML = ""
    res.style.border = 'none'
    for (cont = 0; cont < 11; cont++) {
        res.innerHTML += `&#10148 ${cont} &#10006 ${numberR} &#10145 ${numberR * cont} <br> `
        res.style.border = 'dashed'
    }

    
}
function Clean(){
    res.innerHTML = ""
    res.style.border = 'none'
}