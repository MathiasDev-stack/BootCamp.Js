 //montar um sistema que leia 4 valores e imprima a media

   
  //  let n1 = prompt("informe N1")
  //  let n2 = prompt("informe N2")
  //  let n3 = prompt("informe N3")
  //  let n4 = prompt("informe N4")

  function mediasimples()
{
   //alert("Teste")

  let n1 = document.getElementById("txtn1-01").value
  let n2 = document.getElementById("txtn2-01").value
  let n3 = document.getElementById("txtn3-01").value
  let n4 = document.getElementById("txtn4-01").value

    var media = (parseFloat(n1) + parseFloat(n2) + parseFloat(n3) + parseFloat(n4)) /4

    console.log(media)
    alert(media)
    document.getElementById("resultado").innerHTML = media
}

 