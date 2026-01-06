import { products } from '@/components/data/products';
import { notFound } from 'next/navigation';

export default async function ProductDetailPage({ params }) {
	const { id } = await params;

	const product = products.find((p) => String(p.id) === id);

	if (!product) {
		notFound();
	}

	return (
		<main className='max-w-4xl mx-auto p-6'>
			<h1 className='text-3xl font-bold mb-2'>{product.name}</h1>
			<p className='text-gray-600 mb-4'>{product.category}</p>
			<p className='text-xl font-semibold'>${product.price}</p>
		</main>
	);
}
