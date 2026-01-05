import Link from 'next/link';

export default function Navbar() {
	return (
		<nav className='bg-white shadow-sm'>
			<div className='max-w-6xl mx-auto px-4 py-4 flex justify-between items-center'>
				<Link href='/' className='text-xl font-bold text-green-600'>
					SmartGrocer
				</Link>

				<div className='flex items-center gap-4'>
					<Link href='/cart' className='text-gray-700 hover:text-green-600'>
						Cart
					</Link>
				</div>
			</div>
		</nav>
	);
}
