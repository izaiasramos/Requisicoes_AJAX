function processa(){
    //t1 e t2 vão receber meus input, e acessar o valor deles atravez do .value;        
    var t1 = document.getElementById("termo1").value;
    var t2 = document.getElementById("termo2").value;
    //crio meu objeto de Requisição
    const xhttp = new XMLHttpRequest();
    //crio uma callback, uma função que vai ser chamada quando a resposta para essa requisição estiver pronta
    xhttp.onload = function(){
        document.getElementById("resposta").innerHTML = this.responseText;    
    }
    //abro minha requisição  xhttp.open, informo que é metodo ("GET", 
    //e coloco o endereço , "processa.php que é um arquivo php
    // e passo os parâmetros ?t1=" concatenando com as var criadas que puxam os valores dos input +t1+"&t2="+t2);
    xhttp.open("GET", "processa.php?t1="+t1+"&t2="+t2);
    //e então envio minha requisição para o arquivo processa.php que esta do lado do servidor
    xhttp.send();
    //e então qdo o servidor/arquivo processa.php me der uma resposta a função xhttp vai ser executada e vai executar a linha de codigo dentro dela
    //pegando a resposta da minha requisição this.responseText e vai atribuir como conteudo .innerHTML da minha div ("resposta")
    //então quando envio a requisição xhttp.send(); estou chamando a pagina/arquivo que está do lado servidor processa.php que quando houver um resposta de la, irá iniciar minha requisição ajax/minha função
}