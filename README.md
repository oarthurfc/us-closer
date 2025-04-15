# US Closer

Aplicação web desenvolvida para o renomado YouTuber **[Gabriel de Pinho](https://www.youtube.com/@gabrieldepinho)**, com mais de **600 mil inscritos**, em parceria com a **[UsCloser](https://www.uscloser.com/pt)** — uma empresa especializada em redirecionamento de encomendas dos EUA para o Brasil.

O objetivo do projeto é oferecer uma ferramenta intuitiva e precisa para **comparação de preços com impostos e taxas**, utilizando a **cotação atualizada do dólar** via API. Dessa forma, o usuário pode verificar se vale a pena importar produtos dos Estados Unidos usando os serviços da UsCloser.

## 🚀 Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

## 📂 Estrutura de Pastas

```
us-closer-main/
├── public/
│   └── favIcon.png
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── Diference.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── InputField.jsx
│   │   ├── Main.jsx
│   │   └── PriceComparisonForm.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
```

## ⚙️ Instalação e Execução

1. **Clone o repositório:**

```bash
git clone https://github.com/seu-usuario/us-closer.git
cd us-closer
```

2. **Instale as dependências:**

```bash
npm install
```

3. **Execute o servidor de desenvolvimento:**

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`.

## 🧠 Funcionalidades

- Comparação de preços entre produtos nacionais e internacionais
- Cálculo automático de impostos e taxas
- Integração com API de cotação do dólar em tempo real
- Interface moderna e responsiva
- Indicação visual de qual opção é mais vantajosa

## 📦 Build para produção

```bash
npm run build
```

## 🧹 Limpeza de cache e dependências

```bash
npm run clean
```

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

Desenvolvido com 💙 em parceria com Gabriel de Pinho e UsCloser.
