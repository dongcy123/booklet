import React, { useState } from 'react';
import { Card, Input, Tag, Button, Textarea } from 'tdesign-react';
import { SearchIcon, CopyIcon, EditIcon } from 'tdesign-icons-react';
import { PromptTemplate } from '../../types';

const mockTemplates: PromptTemplate[] = [
  {
    id: 'navigation-bar',
    title: '导航栏组件',
    description: '企业网站顶部导航栏，包含Logo、主菜单、联系方式和语言切换功能',
    category: '导航组件',
    tags: ['导航', '菜单', 'Logo', '响应式'],
    preview: '/src/assets/前端/导航栏.png',
    prompt: `请帮我创建一个企业网站的顶部导航栏组件，具体要求：

## 设计风格
- 简洁专业的企业风格
- 白色背景，深色文字
- 清晰的层次结构和间距
- 支持响应式设计

## 导航栏结构
1. **左侧Logo区域**：公司标志和名称
2. **中间主导航**：首页、关于我们、业务领域、工作机会、企业文化
3. **右侧功能区**：联系电话、语言切换(中/EN)
4. **移动端适配**：汉堡菜单，侧边栏展开

## 交互功能
- 菜单项悬停高亮效果
- 当前页面菜单项高亮显示
- 平滑的过渡动画效果
- 移动端菜单滑动展开

## 技术要求
- 使用HTML5语义化标签
- CSS3实现动画效果
- 响应式布局适配各种屏幕
- 良好的可访问性支持

## 需要自定义的内容
- 公司名称：[请填写公司名称]
- 公司Logo：[请提供Logo图片链接]
- 联系电话：[请填写联系电话]
- 菜单项目：[可根据需要调整菜单项]

请生成完整的导航栏HTML、CSS和JavaScript代码。`,
    difficulty: 'beginner'
  },
  {
    id: 'hero-banner',
    title: 'Banner横幅组件',
    description: '首页主横幅区域，包含大标题、描述文字、背景图片和行动按钮',
    category: '展示组件',
    tags: ['横幅', 'Banner', '首页', '营销'],
    preview: '/src/assets/前端/banner.png',
    prompt: `请帮我制作一个企业网站的主横幅Banner组件，要求如下：

## 设计风格
- 现代商务风格，视觉冲击力强
- 使用高质量背景图片或渐变色
- 文字层次分明，易于阅读
- 突出行动按钮的视觉引导

## Banner内容结构
1. **背景图片**：高质量的企业形象图或产品图
2. **主标题**：简洁有力的企业宣传语
3. **副标题**：详细的服务描述或价值主张
4. **行动按钮**：主要CTA按钮（如"了解更多"、"联系我们"）
5. **装饰元素**：可选的图标或数据展示

## 视觉效果
- 文字渐入动画效果
- 按钮悬停状态变化
- 背景图片轻微的视差滚动
- 响应式图片适配

## 技术实现
- CSS3动画和过渡效果
- 响应式图片处理
- 优化的加载性能
- 良好的SEO结构

## 需要替换的内容
- 主标题：[请填写企业主要宣传标语]
- 副标题：[请填写详细的服务描述]
- 背景图片：[请提供高质量背景图片链接]
- 按钮文字：[请填写行动按钮文字]
- 按钮链接：[请填写按钮跳转链接]

请生成包含动画效果的完整Banner组件代码。`,
    difficulty: 'intermediate'
  },
  {
    id: 'job-opportunities',
    title: '工作机会模块',
    description: '展示公司招聘职位的模块，包含职位列表、筛选功能和申请入口',
    category: '展示组件',
    tags: ['招聘', '职位', '人才', 'HR'],
    preview: '/src/assets/前端/模块1-工作机会.png',
    prompt: `请帮我创建一个工作机会展示模块，具体要求：

## 模块设计
- 清晰的职位信息展示
- 易于浏览的卡片式布局
- 突出重要职位信息
- 专业的HR招聘页面风格

## 内容结构
1. **模块标题**："工作机会"或"Join Our Team"
2. **职位卡片**：每个职位一个卡片
3. **职位信息**：职位名称、部门、工作地点、薪资范围
4. **职位描述**：简短的职位要求和职责
5. **申请按钮**：醒目的"立即申请"按钮

## 职位卡片内容
- 职位标题（如：前端开发工程师、产品经理等）
- 工作地点（如：北京、上海、远程）
- 薪资范围（如：15K-25K、面议）
- 经验要求（如：3-5年经验）
- 学历要求（如：本科及以上）
- 职位标签（如：五险一金、弹性工作、股票期权）

## 交互功能
- 职位卡片悬停效果
- 筛选功能（按部门、地点、薪资）
- 搜索功能
- 分页或加载更多
- 申请按钮点击跳转

## 响应式设计
- 桌面端：3-4列网格布局
- 平板端：2列布局
- 手机端：单列布局
- 保持良好的阅读体验

## 需要自定义的内容
- 公司名称：[请填写公司名称]
- 招聘职位：[请填写具体招聘职位]
- 工作地点：[请填写工作地点]
- 薪资待遇：[请填写薪资范围]
- 联系方式：[请填写HR联系方式]

请生成完整的工作机会模块HTML和CSS代码。`,
    difficulty: 'intermediate'
  },
  {
    id: 'about-us',
    title: '关于我们模块',
    description: '公司介绍模块，展示企业历史、愿景使命、核心价值和团队信息',
    category: '展示组件',
    tags: ['公司介绍', '企业文化', '团队', '愿景'],
    preview: '/src/assets/前端/模块2-关于我们.png',
    prompt: `请帮我制作一个"关于我们"模块，要求如下：

## 设计风格
- 专业可信的企业形象
- 清晰的信息层次结构
- 温暖人性化的视觉表达
- 突出企业核心价值

## 模块内容结构
1. **模块标题**："关于我们"或"About Us"
2. **公司简介**：企业发展历程和核心业务
3. **愿景使命**：公司的愿景、使命和价值观
4. **核心优势**：企业的竞争优势和特色
5. **数据展示**：成立时间、员工数量、服务客户等关键数据
6. **团队介绍**：核心团队成员或团队文化

## 布局设计
- 左右分栏或上下布局
- 图文结合的展示方式
- 数据可视化展示
- 时间轴展示发展历程（可选）

## 视觉元素
- 企业形象照片或插图
- 图标配合文字说明
- 数据统计的动画效果
- 团队照片或头像展示

## 交互效果
- 滚动进入视窗时的动画
- 数字递增动画效果
- 图片悬停效果
- 平滑的页面滚动

## 内容要点
- 公司成立时间和发展里程碑
- 主营业务和服务范围
- 企业文化和价值观
- 团队规模和专业能力
- 服务客户数量和行业覆盖
- 获得的荣誉和认证

## 需要自定义的内容
- 公司名称：[请填写公司全称]
- 成立时间：[请填写公司成立年份]
- 公司简介：[请填写公司业务介绍]
- 愿景使命：[请填写企业愿景和使命]
- 核心数据：[请填写员工数、客户数等关键数据]
- 团队信息：[请填写核心团队介绍]

请生成完整的关于我们模块HTML和CSS代码。`,
    difficulty: 'beginner'
  },
  {
    id: 'business-areas',
    title: '业务领域模块',
    description: '展示公司主要业务领域和服务项目的模块，突出专业能力和服务范围',
    category: '展示组件',
    tags: ['业务', '服务', '专业', '能力'],
    preview: '/src/assets/前端/模块3-业务领域.png',
    prompt: `请帮我创建一个业务领域展示模块，具体要求：

## 设计理念
- 专业权威的业务展示
- 清晰的服务分类结构
- 突出核心竞争力
- 易于理解的视觉表达

## 模块结构
1. **模块标题**："业务领域"或"Our Services"
2. **业务分类**：主要业务领域的分类展示
3. **服务详情**：每个业务领域的详细介绍
4. **核心优势**：突出每个领域的专业优势
5. **成功案例**：相关的项目案例或客户logo
6. **联系入口**：咨询或了解更多的按钮

## 展示方式
- 卡片式布局展示各业务领域
- 图标+标题+描述的组合
- 网格布局，整齐美观
- 悬停效果增强交互体验

## 业务领域示例
- 技术开发（软件开发、系统集成）
- 数字营销（品牌推广、内容营销）
- 咨询服务（战略咨询、管理咨询）
- 产品设计（UI/UX设计、产品策划）
- 数据分析（商业智能、数据挖掘）
- 云服务（云计算、系统运维）

## 卡片内容
- 业务图标或插图
- 业务领域名称
- 简短的服务描述
- 核心技术或方法
- 服务优势说明
- "了解更多"按钮

## 交互功能
- 卡片悬停放大或阴影效果
- 点击展开详细信息
- 平滑的动画过渡
- 响应式布局适配

## 视觉设计
- 统一的图标风格
- 协调的配色方案
- 清晰的文字层次
- 专业的排版布局

## 需要自定义的内容
- 业务领域：[请填写公司主要业务领域]
- 服务描述：[请填写各业务的详细描述]
- 核心优势：[请填写每个领域的竞争优势]
- 技术能力：[请填写相关技术和方法]
- 成功案例：[请填写代表性项目案例]

请生成完整的业务领域模块HTML和CSS代码。`,
    difficulty: 'intermediate'
  },
  {
    id: 'faq-section',
    title: 'FAQ常见问题模块',
    description: '常见问题解答模块，采用折叠展开的交互方式，提供用户关心的问题答案',
    category: '展示组件',
    tags: ['FAQ', '问答', '帮助', '交互'],
    preview: '/src/assets/前端/模块4-FAQ.png',
    prompt: `请帮我制作一个FAQ常见问题模块，要求如下：

## 设计目标
- 清晰易懂的问答展示
- 良好的用户体验
- 节省页面空间
- 快速找到所需信息

## 模块结构
1. **模块标题**："常见问题"或"FAQ"
2. **问题分类**：可选的问题分类标签
3. **问题列表**：折叠式的问题列表
4. **搜索功能**：可选的问题搜索框
5. **联系入口**：找不到答案时的联系方式

## 交互设计
- 手风琴式折叠展开效果
- 点击问题展开答案
- 再次点击收起答案
- 同时只展开一个问题（可选）
- 平滑的展开收起动画

## 问题类型示例
- 服务相关问题
- 价格和付费问题
- 技术支持问题
- 合作流程问题
- 售后服务问题
- 账户和安全问题

## 视觉设计
- 清晰的问题标题
- 易读的答案内容
- 展开/收起图标指示
- 分割线或卡片样式
- 突出重要信息

## 功能特性
- 响应式设计适配移动端
- 键盘导航支持
- 良好的可访问性
- SEO友好的结构
- 快速加载性能

## 内容结构
每个FAQ项目包含：
- 问题标题（简洁明了）
- 详细答案（支持富文本）
- 相关链接（可选）
- 联系方式（可选）

## 高级功能（可选）
- 问题搜索和筛选
- 问题投票（有用/无用）
- 相关问题推荐
- 问题分享功能

## 需要自定义的内容
- 常见问题：[请填写用户经常询问的问题]
- 问题答案：[请填写详细的解答内容]
- 问题分类：[请填写问题的分类标签]
- 联系方式：[请填写客服联系方式]
- 相关链接：[请填写相关帮助页面链接]

请生成完整的FAQ模块HTML、CSS和JavaScript代码。`,
    difficulty: 'intermediate'
  },
  {
    id: 'company-culture',
    title: '企业文化模块',
    description: '展示公司文化理念、工作环境、团队活动和员工福利的模块',
    category: '展示组件',
    tags: ['企业文化', '团队', '环境', '福利'],
    preview: '/src/assets/前端/模块5-企业文化.png',
    prompt: `请帮我创建一个企业文化展示模块，具体要求：

## 设计理念
- 温暖人性化的企业形象
- 展现积极向上的工作氛围
- 突出员工关怀和团队精神
- 吸引优秀人才加入

## 模块内容
1. **模块标题**："企业文化"或"Our Culture"
2. **文化理念**：公司的核心价值观和文化理念
3. **工作环境**：办公环境照片和设施介绍
4. **团队活动**：团建活动、培训、聚会等照片
5. **员工福利**：薪酬福利、成长机会、工作平衡
6. **员工感言**：员工对公司文化的评价和感受

## 展示方式
- 图文并茂的展示形式
- 照片墙或轮播图展示
- 图标+文字的福利介绍
- 员工头像+感言的推荐形式

## 文化要素
- 核心价值观（如：创新、协作、诚信、卓越）
- 工作理念（如：工作与生活平衡、持续学习）
- 团队精神（如：开放沟通、相互支持）
- 成长环境（如：导师制度、培训机会）

## 员工福利展示
- 薪酬待遇（有竞争力的薪资、绩效奖金）
- 保险福利（五险一金、补充医疗保险）
- 假期制度（年假、病假、婚假、产假）
- 工作环境（现代化办公、休闲区域）
- 成长机会（培训、晋升、跨部门轮岗）
- 团队活动（团建、聚餐、运动、旅游）

## 视觉元素
- 办公环境的真实照片
- 团队活动的精彩瞬间
- 员工工作时的自然状态
- 公司活动和庆典照片
- 福利图标和说明文字

## 交互效果
- 照片悬停放大效果
- 轮播图自动播放
- 员工感言的切换展示
- 福利卡片的悬停效果

## 情感表达
- 传达公司的人文关怀
- 展现团队的凝聚力
- 体现工作的乐趣和成就感
- 突出个人成长和发展机会

## 需要自定义的内容
- 企业文化理念：[请填写公司核心价值观]
- 工作环境描述：[请填写办公环境特色]
- 员工福利清单：[请填写具体福利项目]
- 团队活动介绍：[请填写团建和活动内容]
- 员工感言：[请填写员工对公司的评价]
- 环境照片：[请提供办公环境和活动照片]

请生成完整的企业文化模块HTML和CSS代码。`,
    difficulty: 'advanced'
  },
  {
    id: 'footer-section',
    title: '页脚组件',
    description: '网站底部信息区域，包含联系方式、友情链接、版权信息和社交媒体',
    category: '导航组件',
    tags: ['页脚', '联系方式', '版权', '链接'],
    preview: '/src/assets/前端/footer.png',
    prompt: `请帮我创建一个网站页脚组件，具体要求：

## 设计风格
- 简洁专业的底部设计
- 深色背景突出重要信息
- 清晰的信息分区和层次
- 与整站风格保持一致

## 页脚结构
1. **主要信息区域**：
   - 公司信息（名称、简介、联系方式）
   - 快速链接（主要页面导航）
   - 服务项目（业务分类链接）
   - 联系我们（地址、电话、邮箱）

2. **次要信息区域**：
   - 社交媒体链接
   - 友情链接
   - 版权声明
   - 备案信息

## 布局设计
- 多列布局（通常3-4列）
- 响应式适配移动端
- 合理的间距和对齐
- 清晰的视觉分割

## 内容模块
1. **公司信息模块**
   - 公司Logo和名称
   - 简短的公司介绍
   - 主要联系方式

2. **快速导航模块**
   - 主要页面链接
   - 产品/服务分类
   - 帮助和支持页面

3. **联系信息模块**
   - 公司地址
   - 联系电话
   - 电子邮箱
   - 工作时间

4. **社交媒体模块**
   - 微信公众号
   - 微博链接
   - LinkedIn
   - 其他社交平台

## 交互功能
- 链接悬停效果
- 社交图标动画
- 返回顶部按钮
- 响应式菜单折叠

## 法律信息
- 版权声明
- 隐私政策链接
- 使用条款链接
- ICP备案号
- 公安备案号

## 技术要求
- 语义化HTML结构
- 良好的SEO优化
- 快速加载性能
- 可访问性支持
- 跨浏览器兼容

## 需要自定义的内容
- 公司信息：[请填写公司名称、地址、电话]
- 导航链接：[请填写主要页面链接]
- 社交媒体：[请填写社交平台链接]
- 版权信息：[请填写版权声明和备案号]
- 联系方式：[请填写详细联系信息]

请生成完整的页脚组件HTML和CSS代码。`,
    difficulty: 'beginner'
  }
];

const categories = ['全部', '页面组件', '导航组件', '展示组件', '表单组件'];

export const TemplateLibrary: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [editablePrompts, setEditablePrompts] = useState<{[key: string]: string}>({});
  const [editingTemplate, setEditingTemplate] = useState<string | null>(null);

  const filteredTemplates = mockTemplates.filter(template => {
    const matchesSearch = template.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === '全部' || template.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleEditPrompt = (templateId: string) => {
    setEditingTemplate(templateId);
    const template = mockTemplates.find(t => t.id === templateId);
    if (template && !editablePrompts[templateId]) {
      setEditablePrompts(prev => ({
        ...prev,
        [templateId]: template.prompt
      }));
    }
  };

  const handleSavePrompt = (templateId: string) => {
    setEditingTemplate(null);
  };

  const handleCancelEdit = () => {
    setEditingTemplate(null);
  };

  const handleCopyPrompt = (prompt: string) => {
    navigator.clipboard.writeText(prompt);
    // 这里可以添加成功提示
  };

  const getDisplayPrompt = (template: PromptTemplate) => {
    return editablePrompts[template.id] || template.prompt;
  };

  const updatePrompt = (templateId: string, newPrompt: string) => {
    setEditablePrompts(prev => ({
      ...prev,
      [templateId]: newPrompt
    }));
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* 页面标题和搜索 */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">网页组件模板库</h1>
        <p className="text-lg text-gray-600 mb-6">
          精选的网页组件提示词模板，每个组件都包含详细的实现说明。点击提示词模板区域可以直接编辑内容。
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <Input
              placeholder="搜索模板名称或描述..."
              prefixIcon={<SearchIcon />}
              value={searchTerm}
              onChange={setSearchTerm}
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* 分类筛选 */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <Tag
              key={category}
              variant={selectedCategory === category ? 'dark' : 'outline'}
              className="cursor-pointer"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Tag>
          ))}
        </div>
      </div>

      {/* 模板网格 - 每张卡片占满容器 */}
      <div className="space-y-8">
        {filteredTemplates.map(template => (
          <Card key={template.id} className="overflow-hidden">
            <div className="flex flex-col">
              {/* 组件效果图 - 占据卡片上半部分 */}
              <div className="w-full h-64 bg-gray-100 overflow-hidden">
                <img
                  src={template.preview}
                  alt={template.title}
                  className={`w-full h-full ${
                    template.id === 'navigation-bar' || template.id === 'footer-section' 
                      ? 'object-contain' 
                      : 'object-cover'
                  }`}
                />
              </div>
              
              {/* 组件信息 - 占据卡片下半部分 */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{template.title}</h3>
                  <Tag
                    variant="light"
                    theme={template.difficulty === 'beginner' ? 'success' : 
                          template.difficulty === 'intermediate' ? 'warning' : 'danger'}
                  >
                    {template.difficulty === 'beginner' ? '初级' :
                     template.difficulty === 'intermediate' ? '中级' : '高级'}
                  </Tag>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {template.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {template.tags.map(tag => (
                    <Tag key={tag} variant="light" size="small">
                      {tag}
                    </Tag>
                  ))}
                </div>
                
                {/* 提示词预览框 */}
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">提示词模板</span>
                    <div className="flex space-x-2">
                      {editingTemplate === template.id ? (
                        <>
                          <Button 
                            size="small" 
                            variant="text"
                            onClick={() => handleSavePrompt(template.id)}
                          >
                            保存
                          </Button>
                          <Button 
                            size="small" 
                            variant="text"
                            onClick={handleCancelEdit}
                          >
                            取消
                          </Button>
                        </>
                      ) : (
                        <>
                          <Button 
                            size="small" 
                            variant="text"
                            icon={<EditIcon />}
                            onClick={() => handleEditPrompt(template.id)}
                          >
                            编辑
                          </Button>
                          <Button 
                            size="small" 
                            variant="text"
                            icon={<CopyIcon />}
                            onClick={() => handleCopyPrompt(getDisplayPrompt(template))}
                          >
                            复制
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                  {editingTemplate === template.id ? (
                    <div className="bg-white rounded border">
                      <Textarea
                        value={editablePrompts[template.id] || template.prompt}
                        onChange={(value) => updatePrompt(template.id, value)}
                        placeholder="在此编辑提示词内容..."
                        autosize={{ minRows: 8, maxRows: 15 }}
                        className="w-full"
                      />
                    </div>
                  ) : (
                    <div className="bg-white rounded border p-3 max-h-32 overflow-y-auto">
                      <pre className="whitespace-pre-wrap text-xs text-gray-700 font-mono leading-relaxed">
                        {getDisplayPrompt(template).length > 200 ? 
                          getDisplayPrompt(template).substring(0, 200) + '...' : 
                          getDisplayPrompt(template)}
                      </pre>
                    </div>
                  )}
                </div>
                
                <div className="flex space-x-3">
                  <Button 
                    theme="primary"
                    icon={<CopyIcon />}
                    onClick={() => handleCopyPrompt(getDisplayPrompt(template))}
                  >
                    一键复制
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};