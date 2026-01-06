export default function ProductCard({ product }) {
	return (
		<div style={{ border: '1px solid #ddd', padding: '12px' }}>
			<h3>{product.name}</h3>
			<p>{product.category}</p>
			<strong>${product.price}</strong>
		</div>
	);
}
