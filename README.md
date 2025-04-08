# 🛠️ Markdown to HTML Backend

This is a simple Express.js backend that accepts raw Markdown (`text/plain`) and returns converted HTML using the `showdown` package.

---

## 🚀 Features

- Accepts raw Markdown via POST request
- Converts Markdown to HTML using `showdown`
- Supports `text/plain` Content-Type
- Simple and lightweight

---

## 🧰 Tech Stack

- **Backend:** Node.js, Express.js
- **Markdown Conversion:** [showdown](https://github.com/showdownjs/showdown)

---

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/markdown-to-html-backend.git
cd markdown-to-html-backend
```

### 2. Install Dependencies

```bash
npm install express  showdown
```

---

## ▶️ Usage

Start the server:

```bash
npm run start
```

Server runs on [http://localhost:5000](http://localhost:5000)

---

## 📬 API Endpoint

### `POST /markdown`

**Headers:**

```
Content-Type: text/plain
```

**Body:**

Raw markdown text.

**Response:**

Returns converted HTML string.

---

### 🧪 Example using `curl`

```bash
curl -X POST http://localhost:5000/markdown \
     -H "Content-Type: text/plain" \
     --data "## Hello World"
```

**Response:**

```html
<h2 id="helloworld">Hello World</h2>
```

---

## 🧑‍💻 Author

Built with ❤️ by **Sooraj**

---

## 📄 License

MIT License

