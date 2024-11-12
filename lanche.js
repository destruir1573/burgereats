
//animaçoes produto
window.sr = ScrollReveal({reset: true});
sr.reveal('.produto1', {
  origin: 'left',
  distance: '100px',
  duration: 1500,
  reset: true
});

sr.reveal('.produto2', {
  origin: 'right',
  distance: '100px',
  duration: 1500,
  reset: true
});

sr.reveal('.produto3', {
  origin: 'left',
  distance: '100px',
  duration: 1500,
  reset: true
});

sr.reveal('.produto4', {
  origin: 'right',
  distance: '100px',
  duration: 1500,
  reset: true
});

/*const produtos = [
    { nome: "X-BURGER", preco: 10.99 },
    { nome: "X-SALADA", preco: 12.99 },
    { nome: "X-BACON", preco: 15.99 },
    { nome: "X-TUDO", preco: 20.99 }
  ];

  // Carrinho de compras
  let carrinho = [];

  // Função para adicionar produto ao carrinho
  function adicionarAoCarrinho(indexProduto) {
    const contagem= {};
    const produto = produtos[indexProduto];
    carrinho.push(produto);
    indexProduto.forEach(produto=>{
    contagem[produto]=(contagem[produto] ||0)+1;
  });

    atualizarContador();
    mostrarNotaFiscal();
  }

  // Função para atualizar o contador de itens no carrinho
  function atualizarContador() {
    const contador = document.getElementById('contador');
    const quantidade = carrinho.length;

    if (quantidade > 0) {
      contador.style.display = 'block';
      contador.innerText = quantidade;
    } else {
      contador.style.display = 'none';
    }
  }

  function close(){
    const close = document.getElementById('nota-fiscal')
    close.style.display= 'none';
  }

  // Função para exibir a nota fiscal
  function mostrarNotaFiscal() {
    const notaFiscal = document.getElementById('nota-fiscal');
    let total = 0;
    let conteudoNota = `<h2>Nota Fiscal</h2><ul>`;

    // Listar os produtos comprados
    carrinho.forEach((produto) => {
      conteudoNota += `<li>${produto.nome}  R$ ${produto.preco.toFixed(2)}</li>`;
      total += produto.preco;
    });

    conteudoNota += `</ul><p><strong>Total: R$ ${total.toFixed(2)}</strong></p>
    <strong>Digite seu endereco:</strong>
    <input id="endereco" class="endereco" type="text" placeholder="Digite aqui">
    <br><br>
    <button onclick="mensagemPedido()">Adicionar Pedido</button>`;
    notaFiscal.innerHTML = conteudoNota;
  }

  // Função para exibir ou ocultar a nota fiscal
  function toggleNotaFiscal() {
    const notaFiscal = document.getElementById('nota-fiscal');
    notaFiscal.style.display = notaFiscal.style.display === 'none' || notaFiscal.style.display === '' ? 'block' : 'none';
  }

 function mensagemPedido(){
    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }
    const endereco= document.getElementById('endereco').value;
    
   

    let mensagem = `Olá, gostaria de fazer um pedido para entregar no endereço: ${endereco}\nAqui estão os itens:\n`;
    // Usando forEach para iterar sobre os produtos no carrinho
    carrinho.forEach((produto) => {
        mensagem += `${produto.nome} - R$ ${produto.preco.toFixed(2)}\n`;
    });

    const total = carrinho.reduce((acc, produto) => acc + produto.preco, 0);
    mensagem += `\nTotal: R$ ${total.toFixed(2)}`;

    const numeroWhatsApp = "5511953374317"; // Substitua pelo seu número de WhatsApp
    const urlWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensagem)}`;
    
    window.open(urlWhatsApp, '_blank'); // Abre o link em uma nova aba
 }
    */
 const produtos = [
  { nome: "X-BURGER", preco: 10.99 },
  { nome: "X-SALADA", preco: 12.99 },
  { nome: "X-BACON", preco: 15.99 },
  { nome: "X-TUDO", preco: 20.99 }
];

// Carrinho de compras
let carrinho = [];

// Função para adicionar produto ao carrinho
function adicionarAoCarrinho(indexProduto) {
  const produto = produtos[indexProduto];
  carrinho.push(produto);
  atualizarContador();
  mostrarNotaFiscal();
}

// Função para remover produto do carrinho
function removerDoCarrinho(nomeProduto) {
  const index = carrinho.findIndex(produto => produto.nome === nomeProduto);
  if (index !== -1) {
      carrinho.splice(index, 1); // Remove o primeiro item encontrado com o nome especificado
      atualizarContador();
      mostrarNotaFiscal();
  }
}

// Função para atualizar o contador de itens no carrinho
function atualizarContador() {
  const contador = document.getElementById('contador');
  const quantidade = carrinho.length;

  if (quantidade > 0) {
      contador.style.display = 'block';
      contador.innerText = quantidade;
  } else {
      contador.style.display = 'none';
  }
}

// Função para exibir a nota fiscal
function mostrarNotaFiscal() {
  const notaFiscal = document.getElementById('nota-fiscal');
  let total = 0;
  let conteudoNota = `<h2>Nota Fiscal</h2><ul>`;

  // Agrupar e contar os produtos no carrinho
  const contagemProdutos = {};
  carrinho.forEach(produto => {
      if (contagemProdutos[produto.nome]) {
          contagemProdutos[produto.nome].quantidade++;
      } else {
          contagemProdutos[produto.nome] = { ...produto, quantidade: 1 };
      }
  });

  // Listar os produtos agrupados com a quantidade e botão de remoção
  Object.values(contagemProdutos).forEach(produto => {
      const subtotal = produto.preco * produto.quantidade;
      conteudoNota += `
          <li>${produto.quantidade}x ${produto.nome} - R$ ${subtotal.toFixed(2)}
          <button class="remover" onclick="removerDoCarrinho('${produto.nome}')">-</button></li>`;
      total += subtotal;
  });

  conteudoNota += `</ul><p><strong>Total: R$ ${total.toFixed(2)}</strong></p>
  <strong>Digite seu endereço:</strong>
  <input id="endereco" class="endereco" type="text" placeholder="Digite aqui">
  <br><br>
  <button onclick="mensagemPedido()">Adicionar Pedido</button>`;
  notaFiscal.innerHTML = conteudoNota;
}

// Função para exibir ou ocultar a nota fiscal
function toggleNotaFiscal() {
  const notaFiscal = document.getElementById('nota-fiscal');
  notaFiscal.style.display = notaFiscal.style.display === 'none' || notaFiscal.style.display === '' ? 'block' : 'none';
}

function mensagemPedido() {
  if (carrinho.length === 0) {
      alert("Seu carrinho está vazio!");
      return;
  }

  const endereco = document.getElementById('endereco').value;

  let mensagem = `Olá, gostaria de fazer um pedido para entregar no endereço: ${endereco}\nAqui estão os itens:\n`;
  
  // Agrupar e contar produtos para exibir na mensagem
  const contagemProdutos = {};
  carrinho.forEach(produto => {
      if (contagemProdutos[produto.nome]) {
          contagemProdutos[produto.nome].quantidade++;
      } else {
          contagemProdutos[produto.nome] = { ...produto, quantidade: 1 };
      }
  });

  // Adicionar itens agrupados na mensagem
  Object.values(contagemProdutos).forEach(produto => {
      mensagem += `${produto.quantidade}x ${produto.nome} - R$ ${(produto.preco * produto.quantidade).toFixed(2)}\n`;
  });

  const total = carrinho.reduce((acc, produto) => acc + produto.preco, 0);
  mensagem += `\nTotal: R$ ${total.toFixed(2)}`;

  const numeroWhatsApp = "5511953374317"; // Substitua pelo seu número de WhatsApp
  const urlWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensagem)}`;
  
  window.open(urlWhatsApp, '_blank'); // Abre o link em uma nova aba
}
