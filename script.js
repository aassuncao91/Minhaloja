class Produto { //Criando a classe do produto

  constructor() {  
    this.id = 1; //Atributos
    this.arrayProdutos = []; //produto vazio
    
  }

  salvar() { //Quando clica no botão chama a salvar
    let produto = this.lerDados();

    if (this.validaCampo(produto)){ // a Salvar chama a valida campos
      this.adicionar(produto); //chamando método adicionar e enviar o produto se tiver preenchido
        
    }
    
    this.listatabela();
    this.cancelar(); //salvar e limpar os campos

  }

  listatabela() { //para listar os dados em modo tabela
    let tbody = document.getElementById("tbody");
    tbody.innerText = ""; //tirando a duplicidade do registro

    for (let i=0; i < this.arrayProdutos.length; i++ ){ //percorrendo elementos no array
        let tr = tbody.insertRow(); //funcao parar criar uma linha dentro da tabela (tbody)
        
        let td_id = tr.insertCell(); //criar colunas da tabela
        let td_produto = tr.insertCell();
        let td_valor = tr.insertCell();
        let td_acoes = tr.insertCell();

        td_id.innerText = this.arrayProdutos[i].id;
        td_produto.innerText = this.arrayProdutos[i].nomeProduto;
        td_valor.innerText = this.arrayProdutos[i].preco;

        td_id.classList.add("center") // criando classe para alinhar a formatação ao centro de forma dinamica
        
        let imgEdit = document.createElement("img"); //Criando elemento do tipo imagem
        imgEdit.src= "img/edit.png"; //Inserindo img
        
        td_acoes.appendChild(imgEdit); //Falando que é filha do Td.

        let imgDelete = document.createElement("img");
        imgDelete.src= "img/delete1.png";
        imgDelete.setAttribute("onclick", "produto.deletar("+this.arrayProdutos[i].id +")");

        td_acoes.appendChild(imgDelete);
        
   }
  }

  adicionar(produto) { //quando usuário apertar em salvar vai chamar o método adicionar o elemento
    this.arrayProdutos.push(produto); //colocar os produtos no array vazio que criamos
    this.id++; //incrimentar o valor
  }

  lerDados () {
    let produto = {}

    produto.id = this.id;
    produto.nomeProduto = document.getElementById(`produto`).value; // pegando valor do campo produto
    produto.preco = document.getElementById(`preco`).value;

    return produto;
  
  }

  validaCampo (produto) { 
    let msg = ""; 

    if (produto.nomeproduto == "") {
      msg += "Informe o nome do produto \n";
    }

    if (produto.preco == "") {
      msg += "Informe o preco do produto \n";
    }

    if(msg != "") { //for diferente de vazio o usuário nao preencheu o campo
      alert(msg);
      return false
    }

    return true; 
  }

  cancelar() {
      document.getElementById("produto").value = ""; // usuário aperta cancelar, ele limpa os campos
      document.getElementById("preco").value = "";
  }

  deletar(id) {

    let tbody = document.getElementById("tbody")

    for (let i = 0; i < this.arrayProdutos.length; i++) { 
      if(this.arrayProdutos[i].id == id){
        this.arrayProdutos.splice(i, 1) //qual indice que vamos deletar e quantos sao
        tbody.deleteRow(i); //deletando o array 
      }
    }
  }
}

var produto = new Produto();