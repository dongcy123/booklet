import React, { useState, useEffect } from 'react';
import { Card, Input, Collapse, Tag, Button, Space, Dialog, Form, Select, Textarea, MessagePlugin, Upload, Image, Pagination } from 'tdesign-react';
import { SearchIcon, CopyIcon, CodeIcon, AddIcon, EditIcon, DeleteIcon, ImageIcon, CloseIcon, PlayCircleFilledIcon } from 'tdesign-icons-react';
import { ModificationGuide as ModificationGuideType } from '../../types';

// 导入视频文件
import video1 from '../../assets/mp4/关于我们-图像替换.mp4';
import video2 from '../../assets/mp4/轮播图-图片替换.mp4';
import video3 from '../../assets/mp4/三大业务-文本修改.mp4';
import video4 from '../../assets/mp4/标题小字-文本修改.mp4';
import video5 from '../../assets/mp4/打开项目.mp4';

const mockGuides: ModificationGuideType[] = [
  {
    id: 'replace-image',
    question: '如何替换一张图片？',
    category: '图片调整-改',
    answer: '要替换网站中的图片，您需要向AI提供新图片的URL或描述，并指明要替换的位置。',
    code: '在首页横幅区域，将"old_image_description.jpg"这张图片替换为位于[图片URL或路径]的新图片。',
    tags: ['图片', '替换', '基础'],
    videos: [
      video1,
      video2
    ]
  },
  {
    id: 'add-image-gallery',
    question: '如何在模块内新增一个图片？',
    category: '图片调整-增',
    answer: '在现有模块中新增图片，需要指定具体的模块位置和新图片的描述或路径。以轮播图为例，可以在现有轮播图中添加新的图片。',
    code: '在首页轮播图模块中，新增一张图片，图片路径为"/src/assets/images/new-banner.jpg"，图片标题为"新产品发布"，描述文字为"探索我们最新的创新解决方案"。',
    tags: ['图片', '新增', '轮播图', '模块']
  },
  {
    id: 'circular-images',
    question: '如何给图片加上圆角？',
    category: '图片调整-改',
    answer: '通过CSS样式可以轻松实现图片的圆角效果，包括完全圆形。',
    code: '将团队成员区域的所有图片设置为圆形样式。',
    tags: ['图片', '样式', '圆角']
  },
  {
    id: 'delete-image',
    question: '如何删除不需要的图片？',
    category: '图片调整-删',
    answer: '删除网站中不需要的图片，需要明确指出要删除的图片位置或描述。',
    code: '删除首页横幅区域右侧的装饰图片。',
    tags: ['图片', '删除', '清理']
  },
  {
    id: 'change-navigation',
    question: '如何修改模块内的文字？',
    category: '文字调整-改',
    answer: '修改网站模块内的文字内容，需要明确指定要修改的模块位置、原文字内容和新的文字内容。可以是标题、描述、按钮文字等任何文本元素。',
    code: '将"三大业务"模块中的标题文字从"Our Services"修改为"我们的核心业务"，将描述文字从"We provide comprehensive solutions"修改为"提供全方位的专业解决方案"。',
    tags: ['文字', '修改', '模块', '标题'],
    videos: [
      video3,
      video4
    ]
  },
  {
    id: 'change-button-text',
    question: '如何修改按钮上的文字？',
    category: '文字调整-改',
    answer: '修改按钮文字时需要指定按钮的位置和新的文字内容。',
    code: '在价格区域，将按钮文字从"Sign Up"更改为"立即免费试用"。',
    tags: ['按钮', '文字', '本地化']
  },
  {
    id: 'add-paragraph',
    question: '如何增加一个新的段落？',
    category: '文字调整-增',
    answer: '在任意位置添加新的文本段落，需要指定位置和具体内容。',
    code: '在主标题下方，添加一个包含以下文本的段落："[在此处粘贴您的文本内容]"。',
    tags: ['段落', '文字', '内容']
  },
  {
    id: 'delete-text',
    question: '如何删除多余的文字内容？',
    category: '文字调整-删',
    answer: '删除网站中不需要的文字内容，需要明确指出要删除的文字位置。',
    code: '删除关于我们页面中第二段的介绍文字。',
    tags: ['文字', '删除', '精简']
  },
  {
    id: 'change-primary-color',
    question: '如何更改网站的主题色？',
    category: '板块调整-改',
    answer: '修改网站主题色会影响所有相关元素，包括按钮、链接和强调色。',
    code: '将网站的主色调从蓝色(#007BFF)更改为深紫色(#3A00A7)。更新所有按钮、链接和高亮元素使用这个新颜色。',
    tags: ['颜色', '主题', '全局'],
    images: [
      'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjE1MCIgeT0iMzAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiMzNzQxNTEiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSJib2xkIj7kuLvpopjlpZTmm7TmjaI8L3RleHQ+Cjx0ZXh0IHg9IjUwIiB5PSI2MCIgZmlsbD0iIzM3NDE1MSIgZm9udC1zaXplPSIxMiI+5pu05pS55YmNOjwvdGV4dD4KPHA+PHJlY3QgeD0iNTAiIHk9IjcwIiB3aWR0aD0iNDAiIGhlaWdodD0iMjAiIGZpbGw9IiMwMDdCRkYiLz4KPHA+PHRleHQgeD0iMTAwIiB5PSI4NSIgZmlsbD0iIzM3NDE1MSIgZm9udC1zaXplPSIxMiI+IzAwN0JGRiAo6JOd6ImyKTwvdGV4dD4KPHA+PHRleHQgeD0iNTAiIHk9IjExMCIgZmlsbD0iIzM3NDE1MSIgZm9udC1zaXplPSIxMiI+5pu05pS55ZCOOjwvdGV4dD4KPHA+PHJlY3QgeD0iNTAiIHk9IjEyMCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjM0EwMEE3Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTM1IiBmaWxsPSIjMzc0MTUxIiBmb250LXNpemU9IjEyIj4jM0EwMEE3ICjmt7HntKvoibIpPC90ZXh0Pgo8cGF0aCBkPSJNMTUwIDgwIEwxNzAgMTAwIEwxNTAgMTIwIiBzdHJva2U9IiM2Qjc2ODAiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIvPgo8L3N2Zz4='
    ]
  },
  {
    id: 'change-layout-columns',
    question: '如何将三列布局改为四列布局？',
    category: '板块调整-改',
    answer: '布局列数的修改会重新排列内容的展示方式，需要指定具体的区域。',
    code: '在"我们的特色"区域，将布局从3列网格更改为4列网格。',
    tags: ['布局', '列数', '网格']
  },
  {
    id: 'add-new-section',
    question: '如何新增一个内容板块？',
    category: '板块调整-增',
    answer: '在网站中添加新的内容板块，需要指定位置、内容类型和具体要求。',
    code: '在服务介绍和联系我们之间，添加一个客户评价板块，包含3个客户评价卡片。',
    tags: ['板块', '新增', '布局']
  },
  {
    id: 'delete-section',
    question: '如何删除不需要的板块？',
    category: '板块调整-删',
    answer: '删除网站中不需要的整个板块或区域，需要明确指出要删除的板块名称。',
    code: '删除首页的"合作伙伴"板块。',
    tags: ['板块', '删除', '简化']
  },
  {
    id: 'open-project',
    question: '如何打开和预览项目？',
    category: '通用问题',
    answer: '学习如何正确打开AI生成的项目并进行预览，这是进行任何修改的第一步。',
    code: '使用代码编辑器打开项目文件夹，然后运行开发服务器进行预览。',
    tags: ['项目', '预览', '基础'],
    videos: [
      video5
    ]
  },
  {
    id: 'adjust-layout',
    question: '如何调整板块布局？',
    category: '板块调整-改',
    answer: '调整网站板块的排列顺序、大小和位置，优化页面布局效果。',
    code: '调整首页板块顺序，将"客户案例"板块移动到"服务介绍"板块之前。',
    tags: ['布局', '调整', '排序']
  }
];

const categoryStructure = {
  '一、图片调整': {
    '增': '图片调整-增',
    '删': '图片调整-删', 
    '改': '图片调整-改'
  },
  '二、文字调整': {
    '增': '文字调整-增',
    '删': '文字调整-删',
    '改': '文字调整-改'
  },
  '三、板块调整': {
    '增': '板块调整-增',
    '删': '板块调整-删',
    '改': '板块调整-改'
  }
};

const getAllCategories = () => {
  const categories = ['通用问题'];
  Object.entries(categoryStructure).forEach(([mainCategory, subCategories]) => {
    categories.push(mainCategory);
    Object.values(subCategories).forEach(subCategory => {
      categories.push(subCategory);
    });
  });
  return categories;
};

const categories = getAllCategories();

export const ModificationGuide: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('通用问题');
  const [guides, setGuides] = useState<ModificationGuideType[]>(mockGuides);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [editingGuide, setEditingGuide] = useState<ModificationGuideType | null>(null);
  const [form] = Form.useForm();
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [uploadedVideos, setUploadedVideos] = useState<string[]>([]);
  
  // 分页相关状态
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // 每页显示4个问题

  // 从 localStorage 加载数据
  useEffect(() => {
    const savedGuides = localStorage.getItem('modificationGuides');
    if (savedGuides) {
      try {
        const parsedGuides = JSON.parse(savedGuides);
        setGuides([...mockGuides, ...parsedGuides]);
      } catch (error) {
        console.error('加载保存的问题失败:', error);
      }
    }
  }, []);

  // 保存到 localStorage
  const saveToStorage = (newGuides: ModificationGuideType[]) => {
    const customGuides = newGuides.filter(guide => !mockGuides.find(mock => mock.id === guide.id));
    localStorage.setItem('modificationGuides', JSON.stringify(customGuides));
  };

  const filteredGuides = guides.filter(guide => {
    const matchesSearch = guide.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         guide.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         guide.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    let matchesCategory = false;
    
    if (selectedCategory === '通用问题') {
      matchesCategory = guide.category === '通用问题';
    } else if (selectedCategory === '全部') {
      matchesCategory = true;
    } else if (selectedCategory.startsWith('一、') || selectedCategory.startsWith('二、') || selectedCategory.startsWith('三、')) {
      // 如果选择的是一级分类，显示该分类下所有二级分类的问题
      const categoryMapping = {
        '一、图片调整': ['图片调整-增', '图片调整-删', '图片调整-改'],
        '二、文字调整': ['文字调整-增', '文字调整-删', '文字调整-改'],
        '三、板块调整': ['板块调整-增', '板块调整-删', '板块调整-改']
      };
      const subCategories = categoryMapping[selectedCategory as keyof typeof categoryMapping] || [];
      matchesCategory = subCategories.includes(guide.category);
    } else {
      // 选择的是具体的二级分类
      matchesCategory = guide.category === selectedCategory;
    }
    
    return matchesSearch && matchesCategory;
  });

  // 分页计算
  const totalItems = filteredGuides.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentGuides = filteredGuides.slice(startIndex, endIndex);

  // 当搜索或分类改变时重置到第一页
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    MessagePlugin.success('提示词已复制到剪贴板');
  };

  // 新增问题
  const handleAddGuide = () => {
    setEditingGuide(null);
    form.reset();
    setUploadedImages([]);
    setUploadedVideos([]);
    setShowAddDialog(true);
  };

  // 编辑问题
  const handleEditGuide = (guide: ModificationGuideType) => {
    setEditingGuide(guide);
    form.setFieldsValue({
      question: guide.question,
      category: guide.category,
      answer: guide.answer,
      code: guide.code || '',
      tags: guide.tags.join(', ')
    });
    setUploadedImages(guide.images || []);
    setUploadedVideos(guide.videos || []);
    setShowAddDialog(true);
  };

  // 删除问题
  const handleDeleteGuide = (guideId: string) => {
    const newGuides = guides.filter(guide => guide.id !== guideId);
    setGuides(newGuides);
    saveToStorage(newGuides);
    MessagePlugin.success('问题已删除');
  };

  // 保存问题
  const handleSaveGuide = async () => {
    try {
      const validateResult = await form.validate();
      if (validateResult === true) {
        const values = form.getFieldsValue(true);
        const newGuide: ModificationGuideType = {
          id: editingGuide?.id || `custom-${Date.now()}`,
          question: values.question,
          category: values.category,
          answer: values.answer,
          code: values.code || undefined,
          tags: values.tags.split(',').map((tag: string) => tag.trim()).filter((tag: string) => tag),
          images: uploadedImages.length > 0 ? uploadedImages : undefined,
          videos: uploadedVideos.length > 0 ? uploadedVideos : undefined
        };

        let newGuides;
        if (editingGuide) {
          // 编辑现有问题
          newGuides = guides.map(guide => guide.id === editingGuide.id ? newGuide : guide);
          MessagePlugin.success('问题已更新');
        } else {
          // 新增问题
          newGuides = [...guides, newGuide];
          MessagePlugin.success('问题已添加');
        }

        setGuides(newGuides);
        saveToStorage(newGuides);
        setShowAddDialog(false);
        form.reset();
        setUploadedImages([]);
        setUploadedVideos([]);
      }
    } catch (error) {
      console.error('保存失败:', error);
    }
  };

  // 处理图片上传
  const handleImageUpload = (file: any) => {
    return new Promise<string>((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64 = e.target?.result as string;
        setUploadedImages(prev => [...prev, base64]);
        resolve(base64);
      };
      reader.readAsDataURL(file.raw || file);
    });
  };

  // 处理视频上传
  const handleVideoUpload = (file: any) => {
    return new Promise<string>((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64 = e.target?.result as string;
        setUploadedVideos(prev => [...prev, base64]);
        resolve(base64);
      };
      reader.readAsDataURL(file.raw || file);
    });
  };

  // 删除图片
  const handleRemoveImage = (index: number) => {
    setUploadedImages(prev => prev.filter((_, i) => i !== index));
  };

  // 删除视频
  const handleRemoveVideo = (index: number) => {
    setUploadedVideos(prev => prev.filter((_, i) => i !== index));
  };

  // 判断是否为自定义问题（可以编辑删除）
  const isCustomGuide = (guideId: string) => {
    return !mockGuides.find(guide => guide.id === guideId);
  };

  return (
    <div className="max-w-7xl mx-auto h-screen flex flex-col">
      {/* 页面标题 - 固定在顶部 */}
      <div className="flex-shrink-0 mb-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">修改指引</h1>
        <p className="text-lg text-gray-600 mb-4">
          AI生成网站后的常见修改需求和解决方案。搜索您的问题或浏览分类找到答案。
        </p>
        
        {/* 图片调整的重要提醒 */}
        <div className="mb-4 p-3 bg-red-50 border-l-4 border-red-400 rounded-lg">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="w-4 h-4 text-red-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">
                ⚠️ 图片修改前的重要提醒
              </h3>
              <div className="mt-1 text-xs text-red-700">
                <p className="mb-1">
                  <strong>必须先将图片文件存储在：</strong>
                  <code className="bg-red-100 px-1 rounded ml-1">src/assets/images/</code>
                </p>
                <p>
                  然后使用相对路径：<code className="bg-red-100 px-1 rounded">/src/assets/images/your-image-name.jpg</code>
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* 搜索框 */}
        <div className="mb-4">
          <Input
            placeholder="搜索修改相关问题..."
            prefixIcon={<SearchIcon />}
            value={searchTerm}
            onChange={setSearchTerm}
            size="large"
            className="w-full"
          />
        </div>
      </div>

      {/* 主要内容区域 - 可滚动 */}
      <div className="flex gap-6 flex-1 min-h-0">
        {/* 左侧分类目录 */}
        <div className="w-64 flex-shrink-0">
          <Card className="h-full overflow-y-auto">
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <span className="mr-2">📋</span>
                问题分类
              </h3>
              
              <div className="space-y-2">
                {/* 通用问题分类 */}
                <div
                  className={`px-3 py-2 rounded cursor-pointer transition-colors ${
                    selectedCategory === '通用问题' 
                      ? 'bg-blue-100 text-blue-700 font-medium' 
                      : 'hover:bg-gray-100'
                  }`}
                  onClick={() => setSelectedCategory('通用问题')}
                >
                  📁 通用问题
                </div>
                
                {/* 层级分类 */}
                {Object.entries(categoryStructure).map(([mainCategory, subCategories]) => (
                  <div key={mainCategory} className="space-y-1">
                    <div
                      className={`px-3 py-2 rounded cursor-pointer transition-colors font-medium ${
                        selectedCategory === mainCategory 
                          ? 'bg-blue-100 text-blue-700' 
                          : 'hover:bg-gray-100'
                      }`}
                      onClick={() => setSelectedCategory(mainCategory)}
                    >
                      📂 {mainCategory}
                    </div>
                    <div className="ml-4 space-y-1">
                      {Object.entries(subCategories).map(([subName, subCategory]) => {
                        const count = guides.filter(guide => guide.category === subCategory).length;
                        return (
                          <div
                            key={subCategory}
                            className={`px-3 py-1.5 rounded cursor-pointer transition-colors text-sm flex items-center justify-between ${
                              selectedCategory === subCategory 
                                ? 'bg-blue-50 text-blue-600 font-medium' 
                                : 'hover:bg-gray-50 text-gray-600'
                            }`}
                            onClick={() => setSelectedCategory(subCategory)}
                          >
                            <span>📄 {subName}</span>
                            <span className="text-xs bg-gray-200 text-gray-600 px-1.5 py-0.5 rounded-full">
                              {count}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* 右侧内容区域 */}
        <div className="flex-1 flex flex-col min-h-0">
          {/* 问题列表 - 固定高度，可滚动 */}
          <div className="flex-1 overflow-y-auto mb-4">
            {currentGuides.length > 0 ? (
              <div className="space-y-4">
                {currentGuides.map(guide => (
                  <Card key={guide.id} className="hover:shadow-lg transition-shadow duration-200">
                    <div className="p-6">
                      {/* 卡片头部 */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">
                            {guide.question}
                          </h4>
                          <div className="flex items-center space-x-2">
                            <Tag variant="light" size="small">
                              {guide.category.split('-')[1] || guide.category}
                            </Tag>
                            <Tag variant="outline" size="small">
                              {guide.category.split('-')[0] || '分类'}
                            </Tag>
                          </div>
                        </div>
                        {isCustomGuide(guide.id) && (
                          <div className="flex items-center space-x-2 ml-4">
                            <Button
                              size="small"
                              variant="text"
                              icon={<EditIcon />}
                              onClick={() => handleEditGuide(guide)}
                            />
                            <Button
                              size="small"
                              variant="text"
                              theme="danger"
                              icon={<DeleteIcon />}
                              onClick={() => handleDeleteGuide(guide.id)}
                            />
                          </div>
                        )}
                      </div>

                      {/* 答案说明 */}
                      <div className="mb-4">
                        <p className="text-gray-700 leading-relaxed">{guide.answer}</p>
                      </div>

                      {/* 操作视频 */}
                      {guide.videos && guide.videos.length > 0 && (
                        <div className="mb-4">
                          <h5 className="font-medium text-gray-900 flex items-center mb-3">
                            <PlayCircleFilledIcon className="mr-2" />
                            操作演示视频
                          </h5>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {guide.videos.map((video, index) => (
                              <div key={index} className="relative group">
                                <video
                                  controls
                                  className="w-full h-48 object-cover rounded-lg border hover:shadow-md transition-shadow"
                                  poster="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjE1MCIgY3k9IjEwMCIgcj0iMzAiIGZpbGw9IiM2Qjc2ODAiLz4KPHA+PHBhdGggZD0iTTEzNSA4NUwxNzAgMTAwTDEzNSAxMTVWODVaIiBmaWxsPSJ3aGl0ZSIvPgo8dGV4dCB4PSIxNTAiIHk9IjE3MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzZCNzY4MCIgZm9udC1zaXplPSIxNCI+54K55Ye75pKt5pS+6KeG6aKR</dGV4dD4KPC9zdmc+"
                                >
                                  <source src={video} type="video/mp4" />
                                  您的浏览器不支持视频播放。
                                </video>
                                <div className="mt-2 text-sm text-gray-600 text-center">
                                  {video.split('/').pop()?.replace('.mp4', '').replace('-', ' - ')}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* 示意图 */}
                      {guide.images && guide.images.length > 0 && (
                        <div className="mb-4">
                          <h5 className="font-medium text-gray-900 flex items-center mb-3">
                            <ImageIcon className="mr-2" />
                            示意图
                          </h5>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {guide.images.map((image, index) => (
                              <div key={index} className="relative group">
                                <Image
                                  src={image}
                                  alt={`示意图 ${index + 1}`}
                                  className="w-full h-32 object-cover rounded-lg border hover:shadow-md transition-shadow"
                                  fit="cover"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* 提示词代码 */}
                      {guide.code && (
                        <div className="mb-4">
                          <div className="flex items-center justify-between mb-2">
                            <h5 className="font-medium text-gray-900 flex items-center">
                              <CodeIcon className="mr-2" />
                              提示词模板
                            </h5>
                            <Button
                              size="small"
                              variant="outline"
                              icon={<CopyIcon />}
                              onClick={() => handleCopyCode(guide.code!)}
                            >
                              复制
                            </Button>
                          </div>
                          <div className="bg-gray-100 p-4 rounded-lg border">
                            <code className="text-sm text-gray-800 font-mono">
                              {guide.code}
                            </code>
                          </div>
                        </div>
                      )}

                      {/* 标签 */}
                      <div className="flex flex-wrap gap-2">
                        {guide.tags.map(tag => (
                          <Tag key={tag} variant="light" size="small">
                            #{tag}
                          </Tag>
                        ))}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="text-center py-12">
                <div className="text-gray-500 mb-4">
                  <SearchIcon className="text-4xl mx-auto mb-4" />
                  <p className="text-lg">没有找到相关的修改指引</p>
                  <p className="text-sm">尝试使用不同的关键词或选择其他分类</p>
                </div>
              </Card>
            )}
          </div>

          {/* 分页组件 - 固定在内容区底部 */}
          {totalPages > 1 && (
            <div className="flex-shrink-0 flex justify-center mb-4">
              <Pagination
                current={currentPage}
                total={totalItems}
                pageSize={itemsPerPage}
                onChange={(pageInfo) => setCurrentPage(pageInfo.current)}
                showJumper
              />
            </div>
          )}
        </div>
      </div>

      {/* 提交问题模块 - 固定在底部 */}
      <div className="flex-shrink-0 mt-4">
        <Card className="p-4 bg-green-50 border-green-200">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-green-900 mb-1 flex items-center">
                <AddIcon className="mr-2" />
                没找到您要的问题？提交新问题
              </h4>
              <p className="text-green-800 text-sm">
                如果您遇到的问题不在以上列表中，请点击提交新问题，我们会尽快为您提供解决方案。
              </p>
            </div>
            <Button
              theme="primary"
              size="large"
              onClick={handleAddGuide}
              className="ml-4"
            >
              提交问题
            </Button>
          </div>
        </Card>
      </div>

      {/* 新增/编辑问题弹窗 */}
      <Dialog
        header={editingGuide ? '编辑问题' : '新增问题'}
        visible={showAddDialog}
        onClose={() => setShowAddDialog(false)}
        onConfirm={handleSaveGuide}
        confirmBtn="保存"
        cancelBtn="取消"
        width={600}
      >
        <Form
          form={form}
          layout="vertical"
          className="space-y-4"
        >
          <Form.FormItem
            label="问题标题"
            name="question"
            rules={[{ required: true, message: '请输入问题标题' }]}
          >
            <Input placeholder="请输入问题标题，如：如何替换一张图片？" />
          </Form.FormItem>

          <Form.FormItem
            label="问题分类"
            name="category"
            rules={[{ required: true, message: '请选择问题分类' }]}
          >
            <Select placeholder="请选择分类">
              {Object.entries(categoryStructure).map(([mainCategory, subCategories]) => (
                <Select.OptionGroup key={mainCategory} label={mainCategory}>
                  {Object.entries(subCategories).map(([subName, subCategory]) => (
                    <Select.Option key={subCategory} value={subCategory}>
                      {subName}
                    </Select.Option>
                  ))}
                </Select.OptionGroup>
              ))}
            </Select>
          </Form.FormItem>

          <Form.FormItem
            label="问题解答"
            name="answer"
            rules={[{ required: true, message: '请输入问题解答' }]}
          >
            <Textarea
              placeholder="请详细描述问题的解决方案..."
              rows={4}
            />
          </Form.FormItem>

          <Form.FormItem
            label="提示词模板"
            name="code"
          >
            <Textarea
              placeholder="请输入对应的中文提示词模板（可选）..."
              rows={3}
            />
          </Form.FormItem>

          <Form.FormItem
            label="标签"
            name="tags"
            rules={[{ required: true, message: '请输入标签' }]}
          >
            <Input placeholder="请输入标签，用逗号分隔，如：图片, 替换, 基础" />
          </Form.FormItem>

          <Form.FormItem
            label="示意图"
            name="images"
          >
            <div className="space-y-3">
              <Upload
                action=""
                accept="image/*"
                beforeUpload={(file) => {
                  handleImageUpload(file);
                  return false; // 阻止自动上传
                }}
                multiple
              >
                <Button icon={<ImageIcon />} variant="outline">
                  添加示意图
                </Button>
              </Upload>
              
              {uploadedImages.length > 0 && (
                <div className="grid grid-cols-3 gap-3">
                  {uploadedImages.map((image, index) => (
                    <div key={index} className="relative group">
                      <Image
                        src={image}
                        alt={`示意图 ${index + 1}`}
                        className="w-full h-24 object-cover rounded border"
                        fit="cover"
                      />
                      <Button
                        size="small"
                        variant="text"
                        theme="danger"
                        icon={<CloseIcon />}
                        className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity bg-white rounded-full"
                        onClick={() => handleRemoveImage(index)}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Form.FormItem>

          <Form.FormItem
            label="操作演示视频"
            name="videos"
          >
            <div className="space-y-3">
              <Upload
                action=""
                accept="video/*"
                beforeUpload={(file) => {
                  handleVideoUpload(file);
                  return false; // 阻止自动上传
                }}
                multiple
              >
                <Button icon={<PlayCircleFilledIcon />} variant="outline">
                  添加演示视频
                </Button>
              </Upload>
              
              {uploadedVideos.length > 0 && (
                <div className="grid grid-cols-2 gap-3">
                  {uploadedVideos.map((video, index) => (
                    <div key={index} className="relative group">
                      <video
                        controls
                        className="w-full h-32 object-cover rounded border"
                        poster="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjE1MCIgY3k9IjEwMCIgcj0iMzAiIGZpbGw9IiM2Qjc2ODAiLz4KPHA+PHBhdGggZD0iTTEzNSA4NUwxNzAgMTAwTDEzNSAxMTVWODVaIiBmaWxsPSJ3aGl0ZSIvPgo8dGV4dCB4PSIxNTAiIHk9IjE3MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzZCNzY4MCIgZm9udC1zaXplPSIxNCI+54K55Ye75pKt5pS+6KeG6aKR</dGV4dD4KPC9zdmc+"
                      >
                        <source src={video} type="video/mp4" />
                        您的浏览器不支持视频播放。
                      </video>
                      <Button
                        size="small"
                        variant="text"
                        theme="danger"
                        icon={<CloseIcon />}
                        className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity bg-white rounded-full"
                        onClick={() => handleRemoveVideo(index)}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Form.FormItem>
        </Form>

        <Card className="mt-4 p-4 bg-blue-50 border-blue-200">
          <h4 className="font-semibold text-blue-900 mb-2">💡 填写提示</h4>
          <ul className="text-blue-800 text-sm space-y-1 list-disc list-inside">
            <li><strong>问题标题</strong>：简洁明了地描述用户的问题</li>
            <li><strong>问题分类</strong>：选择最符合的分类便于用户查找</li>
            <li><strong>问题解答</strong>：详细说明解决方案和操作步骤</li>
            <li><strong>提示词模板</strong>：提供标准的中文提示词供用户复制使用</li>
            <li><strong>示意图</strong>：上传相关图片帮助用户更好地理解问题和解决方案</li>
            <li><strong>操作演示视频</strong>：上传操作演示视频，直观展示具体操作步骤</li>
            <li><strong>标签</strong>：添加相关关键词提高搜索匹配度</li>
          </ul>
        </Card>
      </Dialog>
    </div>
  );
};