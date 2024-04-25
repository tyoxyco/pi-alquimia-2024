function verificarIdade() {
    var idade = document.getElementById('idadeInput');
        var idade = idadeInput.value;    
 
    if (idade >=18) {
        
        var dialogBox = document.querySelector('.dialog-box');
            dialogBox.computedStyleMap.display = "none";
        
        window.location.href = "https://alquimiacervejaria.com.br/index.html";   

        alert("Seja Bem Vindo");
    }   
        else {
        window.location.href = "https://google.com";
    }
}
