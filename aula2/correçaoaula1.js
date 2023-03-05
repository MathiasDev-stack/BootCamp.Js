 //montar um sistema que leia 4 valores e imprima a media

   
    let n1 = prompt("informe N1")
    let n2 = prompt("informe N2")
    let n3 = prompt("informe N3")
    let n4 = prompt("informe N4")

    var media = (parseFloat(n1) + parseFloat(n2) + parseFloat(n3) + parseFloat(n4)) /4

    console.log(media)
    alert(media)
    document.getElementById("resultado").innerHTML = media

 