const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// dữ liệu tạm
let products = [];
let users = [];

// test server
app.get('/', (req, res) => {
  res.send('Server OK');
});

// lấy danh sách sản phẩm (QUAN TRỌNG)
app.get('/products', (req, res) => {
  res.json(products);
});

// thêm sản phẩm
app.post('/products', (req, res) => {
  products.push(req.body);
  res.json({ message: 'Thêm thành công', data: products });
});

// đăng ký
app.post('/register', (req, res) => {
  users.push(req.body);
  res.json({ message: 'Đăng ký ok' });
});

// đăng nhập
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

// PORT cho Render
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server chạy tại port ${PORT}`);
});