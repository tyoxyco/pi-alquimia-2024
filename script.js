function verificarIdade() {
    var idade = document.getElementById('idadeInput');
        var idade = idadeInput.value;    
 
    if (idade >=18) {
        
        var dialogBox = document.querySelector('.dialog-box');
            dialogBox.computedStyleMap.display = "none";
        
        alert("Seja Bem Vindo");
        
        window.location.href = "https://alquimiacervejaria.com.br/index.html";   

    }   
        else {
        window.location.href = "https://google.com";
    }
}
