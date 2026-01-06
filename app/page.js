import { products } from '@/components/data/products';
import ProductCard from '@/components/ui/ProductCard';

export default function Home() {
	return (
		<>
			<main style={{ padding: '16px' }}>
				<h1>Products</h1>
				<div
					style={{
						display: 'grid',
						gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
						gap: '16px',
						marginTop: '16px',
					}}
				>
					{products.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			</main>
		</>
	);
}
