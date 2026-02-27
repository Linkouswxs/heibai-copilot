import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黑白搭档 - 技术博客',
  description: '技术博客，记录学习与成长',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="font-reading antialiased">{children}</body>
    </html>
  );
}
