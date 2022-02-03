if(window.SimpleSlide){ // passa uma vereficação que esse slide só vai funcionar se existir na pagine o SimpleSlide assim n da mais erro no console 
new SimpleSlide({
  slide : 'quote' ,  // nome do atributo data-slide = "principal" 
  tempo : 5000 ,  // tempo de transição dos slides 
  pauseOnHover : true ,  // pausa a transição automática 
})
new SimpleSlide({
  slide : 'portfolio' , 
  tempo : 5000 ,  
  nav : true,
})
}

if(window.SimpleAnime){ 
 new SimpleAnime()
}

if(window.SimpleForm){
new SimpleForm({
  form: ".formphp", // seletor do formulário
  button: "#enviar", // seletor do botão
  erro: "<div id='form-erro'><h2> Erro no envio!</h2><p>Um erro ocorreu, tente para o email contato@bikcraft.com.</p></div>", // mensagem de erro
  sucesso: "<div id='form-sucesso'><h2>Formulário enviado com sucesso</h2><p>Em breve entraremos em contato com você.</p></div>", // mensagem de sucesso
});
}
