
function t(lang){
    let user = document.getElementById("username");
    let pass = document.getElementById("password");
    let uhold = document.getElementById("user-place");
    let phold = document.getElementById("pass-place");
    switch(lang) {
        case 0:
            user.innerText = "Username";
            pass.innerText = "Password";
            uhold.placeholder = "Username";
            phold.placeholder = "Password";
            break;
        case 1:
            user.innerText = "El Nombre de Usuario";
            pass.innerText = "La Contraseña";
            uhold.placeholder = "El Nombre de Usuario";
            phold.placeholder = "La Contraseña";
            break;
        case 2:
            user.innerText = "Nom d'utilisateur"
            pass.innerText = "Mot de Passe"
            uhold.placeholder = "Nom d'utilisateur";
            phold.placeholder = "Mot de Passe";
            break;
        case 3:
            user.innerText = "Nutzername";
            pass.innerText = "Passwort";
            uhold.placeholder = "Nutzername";
            phold.placeholder = "Passwort";
            break;
        case 4:
            user.innerText = "Nome Utente";
            pass.innerText = "Parola d'ordine";
            uhold.placeholder = "Nome Utente";
            phold.placeholder = "Parola d'ordine";
            break;
        case 5:
            user.innerText = "Nome de usuário";
            pass.innerText = "Senha";
            uhold.placeholder = "Nome de usuário";
            phold.placeholder = "Senha";
            break;
        default:
            break;
    }
}
let entryO = 1.0;
let entryI = 0;

function fOut(){
    let entry = document.getElementById('entry');
    entry.style.opacity = entryO;
    entryO -= 0.01;
    if(entryO >= 0){
        window.requestAnimationFrame(fOut);
    }
    else{
        entry.style.display = 'none';
        document.getElementById('welcome').style.display = 'block';
        fIn();
    }
}

function fIn(){
    let entry = document.getElementById('welcome');
    entry.style.opacity = entryI;
    entryI += 0.01;
    if(entryI <=1){
        window.requestAnimationFrame(fIn);
    }
    else{
        entry.style.display = 'block';
    }
}

function evap(){
    console.log("Hello there Ducky, glad you could make it. I don't know if you know this, but I've been waiting for this moment for a very long time now. Nono, don't be shy, I don't bite.")
    
    let g = document.getElementById('entry').children;
    for (const i of g) {
     
     if (i.tagName === 'H1'){
        i.classList.add('big')
     }else
     {
         i.classList.add('hide');
     }
    }
    fOut();
}

function chanLang(){
    let x = document.getElementById('dropbtn');
    if (x.className.indexOf("w3-show") == -1){
        x.className += " w3-show";
    }
    else{
        x.className = x.className.replace(" w3-show", "");
    }
}