const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let products = [];
let users = [];

app.get('/', (req, res) => {
  res.send('Server OK');
});

app.get('/products', (req, res) => {
  res.json(products);
});

app.post('/products', (req, res) => {
  products.push(req.body);
  res.json({ message: 'Thêm thành công' });
});

app.post('/register', (req, res) => {
  users.push(req.body);
  res.json({ message: 'Đăng ký ok' });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    u => u.email === email && u.password === password
  );

  if (user) {
    res.json({ message: 'Đăng nhập thành công' });
  } else {
    res.status(401).json({ message: 'Sai tài khoản' });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server chạy tại port ${PORT}`);
});