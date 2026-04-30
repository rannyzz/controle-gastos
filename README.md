# 💸 Controle de Gastos

Sistema simples de controle financeiro com login de usuário, cadastro e gerenciamento de gastos.

---

## 🚀 Funcionalidades

- 🔐 Login de usuário (PHP + MySQL)
- 📝 Cadastro de novos usuários
- 💰 Adição de valores (entrada)
- 📉 Registro de gastos (saída)
- 📊 Atualização de saldo em tempo real
- 💾 Persistência de dados com LocalStorage
- 👁️ Mostrar/ocultar senha no login

---

## 🛠️ Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- PHP
- MySQL (phpMyAdmin)
- Git e GitHub

---

## 📁 Estrutura do projeto
```text
login/
├── index.html        # Tela de login
├── cadastro.html     # Tela de cadastro
├── home.html         # Sistema de controle de gastos
├── css/
│   ├── style.css
│   └── home.css
├── script/
│   ├── login.js
│   └── home.js
└── bd/
    ├── bd.php        # Login
    └── cadastro.php  # Cadastro

---

## ⚙️ Como rodar o projeto

1. Instale o XAMPP
2. Coloque a pasta do projeto em: C:\xampp\htdocs\
3. Inicie o Apache e MySQL
4. Acesse no navegador:
http://localhost:(portadoxampp)/login/index.html

---

## 🗄️ Banco de dados

Crie um banco chamado:
bdlogin

E execute:

```sql
CREATE TABLE tblogin (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(100),
    senha VARCHAR(100)
);
```
🔑 Usuário para teste
Email: igor@gmail.com
Senha: 123456

---

## 👁Observações

Os dados de gastos são salvos no navegador (LocalStorage)
Futuramente pode ser integrado totalmente com banco de dados
Projeto feito para fins de aprendizado

---

## ✍Autor

Igor Morato

---

## ⭐ Status

🚧 Em desenvolvimento / melhoria contínua
