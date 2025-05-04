import Head from 'next/head';

export const metadata = {
  title: 'WhiskyTales',
  description: 'ウィスキー愛好家のための共有アプリ',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
        <head><link rel='icon' href='../../public/favicon.ico' /></head>
      <body>{children}</body>
    </html>
  );
}
