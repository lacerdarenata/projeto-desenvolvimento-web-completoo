# projeto-desenvolvimento-web-completoo
Created with CodeSandbox

Sistema de Controle de Manutenção (SCM)

Este projeto é um sistema simples de controle de manutenção para a empresa InfoTech IFPB. Ele permite que os clientes visualizem os serviços oferecidos e abram chamados de manutenção.

 Funcionalidades:

- Página Inicial: Apresentação da empresa e informações sobre os serviços.
- Serviços: Detalhamento dos serviços oferecidos pela InfoTech (Hardware, Software, Redes).
- Abrir Chamado: Formulário para o cliente abrir um chamado de manutenção.

 Tecnologias Utilizadas:

- HTML5: Para a estruturação do conteúdo semântico.
- CSS3: Para o estilo visual da página.
- Flexbox: Utilizado no layout de componentes.
- Grid Layout: Usado para a organização dos serviços em cartões.
- HTML5 Forms: Para a criação de formulários e validação básica.

Como Usar: 

1. Acesse a página inicial para ver os serviços oferecidos pela InfoTech IFPB.
2. Na página de **Serviços**, você pode ver detalhes sobre **Suporte Técnico**, **Problemas de Rede**, e **Erro em Sistemas**.
3. Na página de **Abrir Chamado**, preencha o formulário com as informações solicitadas (Nome, Email, Telefone, Tipo de Serviço, etc.), e envie o seu chamado de manutenção.

Personalizações: O design do site pode ser facilmente alterado através das variáveis CSS no arquivo `style.css`, localizado na pasta `css/`. O sistema está estruturado de maneira que a inclusão de novos serviços ou modificações no formulário de chamado seja simples de implementar.

Visão Geral do Site

O site é uma loja Gamer virtual que possui produtos de informática e games, e foi desenvolvida em HTML, CSS e JavaScript. O Site permite que um usuário:
- Visualize os produtos organizados em categorias;
- Filtro os produtos de acordo com o tipo;
- Acesse página individual feita para cada produto;
- Utilize o chatbot para dúvidas;
- Para que possa adicionar produtos ao carrinho;

Entre os produtos disponíveis temos:
-Roteador Mesh;
-Teclado Gamer RGB;
-Mouse Gamer;
-Headset Gamer;
-Placa de Vídeo;
-Processador.


Funcionamento da Loja

 Página principal da Loja

Ao entrar e acessar o site, o usuário visualizar a página principal onde estão listados e exibidos todos os produtos em forma de cards. E cada carda apresenta:
-Imagem do produto;
-Nome do produto;
-Preço;

Filtro de Produto 

A parte superior da loja, contém botões que permitem que o usuário visualize apenas os produtos de uma determinada categoria. Entre os botões de filtros temos:
- Todos: Exibe todos os produtos da loja;
- Hardware: Exibe placa de vídeo e processador;
- Periféricos: Exibe teclado, mouses e headset gamer;
- Rede: Exibe o roteador mesh.

Esse filtro funciona através do JavaScript, que utiliza o atributo data-category em cada produto. Ao clicar em um botão, apenas os produtos da categoria selecionada permaneceram visíveis na tela.

Acesso à Página do Produto

Ao escolher e clicar em um produto da loja, o usuário é direcionado para página exclusiva daquele produto. Cada produto possui sua própria página HTML, garantindo simplicidade e organização no código. Na página do produto, estão exibidas as seguintes informações:
-Nome do produto;
-Imagem em tamanho maior;
-Descrição técnica do produto;
-Preço antigo(quando está com desconto);
-Preço atual em destaque;
-Botão "Comprar".
-Voltar para a loja, o que facilita a navegação.

 Funcionamento do Chatbot (Assistente Virtual)

O site conta com um chatbot integrado via Chatling, que serve com um assistente virtual qur auxilia o usuário durante a navegação pela loja.

O que o Chatbot faz?

Ele foi treinando com informações sobre todos os produtos da loja e pode responder às dúvidas de cada usuário, como por exemplo perguntas de :
- "Esse produto é bom para jogos?"
- "Essa placa de vídeo roda GTA V?"

Ele funciona para ajudar o usuário a tirar dúvidas rapidamente sem que haja necessidade de procurar manualmente as informações. 

Por que o Chatbot é importante?

Pois ele melhora a experiência do usuário, tornando o site mais interativo e profissional, e além disso ele também simula um atendimento automatizado que se assemelha ao de lojas presenciais.


Funcionamento do Carrinho de compras

 Botão Comprar 

Cada página de produto possui um botão "comprar" que ao ser clicado, o produto é direcionado ao carrinho, o contador é atualizado com o valor e uma mensagem de confirmação é exibida ao usuário. 

Contador do Carrinho

O Carrinho possui um contador visível no topo da página, que indica quantos produtos foram adicionados. Esse contador é atualizado pelo JavaScript, e funciona de forma simulada sendo ideal para fins educacionais e em demonstração de funcionamento de um e-commerce.

Organização e Padronização do site.

O site foi feito seguindo algumas práticas, como:
- Layout responsivo ( desenvolvido para celular e computadores);
- Organização de cores e fontes;
- Separação entre HTML, CSS e JavaScript;
- Utilização de páginas próprias para cada produto ;
Essa organização acaba facilitando a manutenção do site e deixa assim o projeto mais profissional e organizado.

Considerações Finais 

O site da loja Gamer mostra o funcionamento básico de uma loja virtual real, integrando listas de produtos, filtros por categorias, páginas de detalhes, chatbot e carrinho de compras. O projeto assim, atende as necessidades educacionais, mostrando conhecimento em desenvolvimento web, sendo adequado para apresentação e avaliações acadêmicas.


> Projeto desenvolvido como parte da disciplina de Desenvolvimento Web pelas alunas: Maria das Graças Modesto Barbosa, Maria Vitória Rodrigues da Silva, Natália de Abreu Silva e Renata Lacerda Dantas.


