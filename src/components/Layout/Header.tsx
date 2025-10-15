import React from 'react';
import { Layout, Menu, Avatar, Button, MenuValue } from 'tdesign-react';
import { LogoGithubIcon, UserIcon, SettingIcon } from 'tdesign-icons-react';
import { useNavigate, useLocation } from 'react-router-dom';

const { Header: THeader } = Layout;

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      value: '/',
      label: '流程指引',
      icon: <LogoGithubIcon />
    },
    {
      value: '/templates',
      label: '模板库',
      icon: <LogoGithubIcon />
    },
    {
      value: '/modifications',
      label: '修改指引',
      icon: <LogoGithubIcon />
    }
  ];

  const handleMenuChange = (value: MenuValue) => {
    navigate(value as string);
  };

  return (
    <THeader className="bg-white shadow-sm border-b border-gray-200">
      <div className="w-full px-6 py-0">
        <div className="flex items-center justify-between h-16 w-full">
          {/* Logo 和标题 */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
              <LogoGithubIcon className="text-white text-lg" />
            </div>
            <h1 className="text-xl font-bold text-gray-800">AI建站指引平台</h1>
          </div>

          {/* 导航菜单 - 水平居中 */}
          <div className="flex-1 flex justify-center">
            <div className="flex items-center space-x-8">
              {menuItems.map(item => (
                <button
                  key={item.value}
                  onClick={() => navigate(item.value)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                    location.pathname === item.value
                      ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item.icon}
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* 用户操作区 */}
          <div className="flex items-center space-x-4 flex-shrink-0">
            <Button 
              variant="text" 
              icon={<SettingIcon />}
              className="text-gray-600 hover:text-blue-600"
            >
              设置
            </Button>
            <Avatar size="small" icon={<UserIcon />} />
          </div>
        </div>
      </div>
    </THeader>
  );
};