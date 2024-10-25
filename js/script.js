function ValidarCampos(){
    let nome = document.getElementById("nome");
    let email = document.getElementById("email");

    if(nome.value == ""){
        alert("Digite o nome!");
        nome.focus();
        return;
    }
    else
    {
        if(nome.value.length > 20){
            alert("Campo com mais de 20 caracteres!");
            nome.value = "";
            nome.focus();
            return;  
        }
    }

    if(email.value == ""){
        alert("Digite o e-mail!");
        email.focus();
        return;
    }
    else
    {
        if(!ValidaEmail(email.value.trim())){
            alert("E-mail inválido");
            email.value = "";
            email.focus();
            return;  
        }
        else
        {
            // let parteEmail = email.value.substring(0,5);
            // alert(parteEmail);

            let antesdoArroba = email.value.substring(0, email.value.indexOf("@"));
            alert(antesdoArroba);
        }
    }
}

function ValidaEmail(email){
    const regex = "/\S+@\S+\.\S+/";
    return regex.test(email);
}