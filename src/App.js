import { useNavigate, Routes, Route } from 'react-router-dom';
import ProductDetail from './ProductDetail';
import Login from './Login';
import Register from './Register';

function App() {
  const navigate = useNavigate();

  const devices = [
    {
      id: 1,
      name: 'Máy đo nhịp tim',
      price: '2.000.000đ',
      lifespan: '3-5 năm'
    },
    {
      id: 2,
      name: 'Máy đo huyết áp',
      price: '1.200.000đ',
      lifespan: '4-6 năm'
    },
    {
      id: 3,
      name: 'Máy đo đường huyết',
      price: '800.000đ',
      lifespan: '2-4 năm'
    }
  ];

  return (
    <Routes>
      {/* Trang chính */}
      <Route
        path="/"
        element={
          <div style={{ fontFamily: 'Arial', padding: '20px' }}>
            <h1>Thiết bị y sinh</h1>

            {/* nút login */}
            <button onClick={() => navigate('/login')}>
              Đăng nhập
            </button>
            <button onClick={() => navigate('/register')} style={{ marginLeft: '10px' }}>
              Đăng ký
            </button>

            <hr />

            {/* danh sách sản phẩm */}
            <div style={{ display: 'flex', gap: '20px' }}>
              {devices.map(item => (
                <div key={item.id} style={{
                  border: '1px solid #ccc',
                  padding: '10px',
                  borderRadius: '10px',
                  width: '200px'
                }}>
                  <h3>{item.name}</h3>
                  <p>Giá: {item.price}</p>
                  <p>Tuổi thọ: {item.lifespan}</p>

                  <button onClick={() => navigate(`/product/${item.id}`)}>
                    Xem chi tiết
                  </button>
                </div>
              ))}
            </div>
          </div>
        }
      />

      {/* Trang chi tiết */}
      <Route path="/product/:id" element={<ProductDetail />} />

      {/* Login */}
      <Route path="/login" element={<Login />} />

      {/* Register */}
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;