import Link from 'next/link';

export default function NotFound() {
	return (
		<main className='p-6'>
			<h2 className='text-xl font-semibold mb-2'>Product not found</h2>
			<p className='text-gray-600 mb-4'>
				The product you are looking for does not exist.
			</p>
			<Link href='/' className='text-green-600 hover:underline'>
				Go back to products
			</Link>
		</main>
	);
}
