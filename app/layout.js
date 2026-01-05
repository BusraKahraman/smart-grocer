import '../styles/globals.css';

export const metadata = {
	title: 'SmartGrocer',
	description: 'Modern grocery shopping demo',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className='min-h-screen flex flex-col bg-gray-50'>{children}</body>
		</html>
	);
}
