function carregar(){
    //O primeiro passo é pegar a data com todos os dados
    var data = new Date()
    //depois é pegar apenas a hora de dentro da data
    var hora = data.getHours()
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')

    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 4 && hora < 12 ){
        //manipulação de elementos
        img.src = "manhã.png"
        //manipulação de estilo
        document.body.style.backgroundColor = 'green'
    }else if(hora >= 12 && hora < 18 ){
        //manipulação de elementos
        img.src = "tarde.png"
        //manipulação de estilo
        document.body.style.backgroundColor = "Orange"
    }else{
        //manipulação de elementos
        img.src = 'noite.png'
        //manipulação de estilo
        document.body.style.backgroundColor = 'darkBlue'
    }

    
    
    
    
}