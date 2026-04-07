import { useNavigate, Routes, Route } from 'react-router-dom';
import ProductDetail from './ProductDetail';
import Login from './Login';

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

  // 🔥 gọi API thêm sản phẩm
  const addToServer = (item) => {
    fetch('http://localhost:5000/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item)
    })
      .then(res => res.json())
      .then(data => alert(data.message))
      .catch(() => alert('Lỗi kết nối server'));
  };

  return (
    <Routes>

      {/* Trang chính */}
      <Route
        path="/"
        element={
          <div style={{ fontFamily: 'Arial', background: '#f5f5f5', minHeight: '100vh' }}>

            {/* Header */}
            <div style={{
              background: '#2c3e50',
              color: 'white',
              padding: '15px 20px',
              fontSize: '20px',
              display: 'flex',
              justifyContent: 'space-between'
            }}>
              <span>Thiết bị y sinh</span>

              <button
                onClick={() => navigate('/login')}
                style={{
                  background: '#3498db',
                  color: 'white',
                  border: 'none',
                  padding: '8px 12px',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
              >
                Đăng nhập
              </button>
            </div>

            {/* Danh sách sản phẩm */}
            <div style={{
              display: 'flex',
              gap: '20px',
              padding: '20px'
            }}>
              {devices.map(item => (
                <div key={item.id} style={{
                  background: 'white',
                  padding: '15px',
                  borderRadius: '10px',
                  width: '250px',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                }}>
                  <h3>{item.name}</h3>
                  <p>Giá: {item.price}</p>
                  <p>Tuổi thọ: {item.lifespan}</p>

                  {/* xem chi tiết */}
                  <button
                    onClick={() => navigate(`/product/${item.id}`)}
                    style={{
                      background: '#3498db',
                      color: 'white',
                      border: 'none',
                      padding: '8px 12px',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      marginRight: '10px'
                    }}
                  >
                    Xem chi tiết
                  </button>

                  {/* thêm lên server */}
                  <button
                    onClick={() => addToServer(item)}
                    style={{
                      background: '#2ecc71',
                      color: 'white',
                      border: 'none',
                      padding: '8px 12px',
                      borderRadius: '5px',
                      cursor: 'pointer'
                    }}
                  >
                    Thêm server
                  </button>
                </div>
              ))}
            </div>
          </div>
        }
      />

      {/* Trang chi tiết */}
      <Route path="/product/:id" element={<ProductDetail />} />

      {/* Trang login */}
      <Route path="/login" element={<Login />} />

    </Routes>
  );
}

export default App;