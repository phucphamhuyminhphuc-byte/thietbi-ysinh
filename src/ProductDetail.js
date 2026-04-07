import { useParams, useNavigate } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const devices = [
    { id: 1, name: 'Máy đo nhịp tim', price: '2.000.000đ', lifespan: '3-5 năm' },
    { id: 2, name: 'Máy đo huyết áp', price: '1.200.000đ', lifespan: '4-6 năm' },
    { id: 3, name: 'Máy đo đường huyết', price: '800.000đ', lifespan: '2-4 năm' }
  ];

  const product = devices.find(d => d.id == id);

  if (!product) return <h2>Không tìm thấy sản phẩm</h2>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>{product.name}</h2>
      <p>Giá: {product.price}</p>
      <p>Tuổi thọ: {product.lifespan}</p>

      <button onClick={() => navigate('/')}>
        Quay lại
      </button>
    </div>
  );
}

export default ProductDetail;