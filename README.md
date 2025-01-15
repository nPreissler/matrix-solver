# Matrix Solver

Matrix Solver é uma aplicação web que permite realizar operações matemáticas em matrizes (adição, subtração e multiplicação). A aplicação utiliza Flask no backend e HTML/CSS/JavaScript no frontend.

## Funcionalidades
- Geração de matrizes personalizáveis com base nas dimensões inseridas pelo usuário.
- Realização de operações matemáticas entre matrizes:
  - Soma
  - Subtração
  - Multiplicação
- Retorno dos resultados das operações diretamente na página.

## Tecnologias Utilizadas
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Flask (Python)
- **Outras dependências**: JSON para troca de dados entre frontend e backend

## Como Executar o Projeto Localmente

### Pré-requisitos
- Python 3.x instalado
- Pip (gerenciador de pacotes do Python)
- Navegador web

### Passo a passo
1. Clone o repositório do projeto:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd matrix-solver
   ```

2. Crie e ative um ambiente virtual (opcional, mas recomendado):
   ```bash
   python -m venv venv
   source venv/bin/activate # No Windows: venv\Scripts\activate
   ```

3. Instale as dependências do projeto:
   ```bash
   pip install -r requirements.txt
   ```

4. Execute o servidor Flask:
   ```bash
   flask run
   ```

5. Abra o navegador e acesse:
   ```
http://127.0.0.1:5000
   ```

## Estrutura do Projeto

```
matrix-solver/
├── app/
│   ├── __init__.py          # Inicialização do aplicativo Flask
│   ├── routes.py            # Configuração das rotas e lógica principal
│   ├── utils/
│   │   └── matrix_operations.py  # Funções para manipulação de matrizes
├── static/
│   ├── css/
│   │   └── styles.css       # Estilização do frontend
│   ├── js/
│   │   └── matrix.js        # Lógica do frontend em JavaScript
├── templates/
│   └── index.html           # Página inicial
├── tests/
│   ├── test_operations.py   # Testes unitários para operações de matrizes
├── requirements.txt         # Dependências do projeto
├── README.md                # Documentação do projeto
└── run.py                   # Arquivo principal para executar a aplicação
```

## Testes

O projeto inclui testes automatizados para validar as operações de matrizes.

### Como executar os testes
1. Certifique-se de estar no ambiente virtual (se configurado).
2. Execute o seguinte comando na raiz do projeto:
   ```bash
   pytest tests/
   ```

Os resultados dos testes serão exibidos no terminal.

## Próximos Passos
- Realizar o deploy em plataformas como Heroku, Render ou Vercel.
- Adicionar mais operações matemáticas (determinante, transposição, inversa).
- Melhorar a interface do usuário.

## Licença
Este projeto está sob a licença MIT. Consulte o arquivo `LICENSE` para mais informações.