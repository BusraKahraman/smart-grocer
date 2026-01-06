import '../styles/globals.css';
import Navbar from '@/components/layout/Navbar';

export const metadata = {
	title: 'SmartGrocer',
	description: 'Modern grocery shopping demo',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className='min-h-screen flex flex-col bg-gray-50'>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
