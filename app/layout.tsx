import './globals.css';

export const metadata = {
  title: 'Moe Kyaw Aung - Supreme Digital God',
  description: 'Senior Android Engineer | 111 Public Repositories | Supreme Digital God',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="my">
      <body>{children}</body>
    </html>
  );

}
