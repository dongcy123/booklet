import React from 'react';
import { Layout as TLayout } from 'tdesign-react';
import { Header } from './Header';

const { Content } = TLayout;

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <TLayout className="min-h-screen bg-gray-50">
      <Header />
      <Content className="flex-1">
        <div className="container mx-auto px-6 py-8">
          {children}
        </div>
      </Content>
    </TLayout>
  );
};