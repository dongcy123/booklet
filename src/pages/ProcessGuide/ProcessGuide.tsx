import React, { useState } from 'react';
import { Card, Steps, Button, Space, Tag } from 'tdesign-react';
import { CheckCircleIcon, PlayCircleFilledIcon, TimeIcon } from 'tdesign-icons-react';
import { ProcessStep } from '../../types';

const processSteps: ProcessStep[] = [
  {
    id: 'submit-request',
    title: '提交申请',
    description: '提交建站需求申请',
    status: 'completed',
    icon: 'check-circle',
    details: '向相关部门提交建站申请，包含项目基本信息、预期上线时间等。这一步是为了确保资源分配和需求备案。',
    actions: [
      { text: '提交建站申请', href: '#' }
    ]
  },
  {
    id: 'download-template',
    title: '下载模板',
    description: '获取提示词模板文件',
    status: 'completed',
    icon: 'download',
    details: '下载结构化的提示词模板文档，这是与AI沟通的基础工具。模板包含了网站建设的各个要素和最佳实践。',
    actions: [
      { text: '下载提示词模板', href: '#' }
    ]
  },
  {
    id: 'customize-prompt',
    title: '定制化修改',
    description: '根据模板完成个性化填写',
    status: 'active',
    icon: 'edit',
    details: '这是最关键的一步！您需要像填空一样，将公司的具体信息、品牌颜色、Logo、产品介绍等内容填写到模板中。',
    actions: [
      { text: '查看填写示例', href: '#' },
      { text: '前往提示词模板库', href: '/templates' }
    ]
  },
  {
    id: 'ai-generate',
    title: 'AI生成',
    description: '使用CodeBuddy AI生成网站',
    status: 'pending',
    icon: 'robot',
    details: '将填写好的提示词输入到CodeBuddy AI工具中，AI将根据您的需求生成完整的网站代码。',
    actions: [
      { text: '打开 CodeBuddy AI', href: '#' }
    ]
  },
  {
    id: 'modify',
    title: '修改调整',
    description: '根据需要进行微调',
    status: 'pending',
    icon: 'tools',
    details: 'AI生成的结果可能不完全符合预期，别担心，我们可以通过简单的指令进行微调。',
    actions: [
      { text: '查看修改指引', href: '/modifications' }
    ]
  },
  {
    id: 'deploy-staging',
    title: '提交测试',
    description: '部署到测试环境',
    status: 'pending',
    icon: 'cloud-upload',
    details: '将生成的网站代码提交到测试环境，这样可以在正式发布前进行充分的测试和验证。',
    actions: [
      { text: '提交到测试环境', href: '#' }
    ]
  },
  {
    id: 'test',
    title: '功能测试',
    description: '验证网站功能',
    status: 'pending',
    icon: 'check',
    details: '使用提供的测试清单，检查网站的各项功能是否正常工作，确保用户体验良好。',
    actions: [
      { text: '查看测试清单', href: '#' }
    ]
  },
  {
    id: 'review',
    title: '内部审核',
    description: '提交相关部门审核',
    status: 'pending',
    icon: 'user-checked',
    details: '测试通过后，需要提交给品牌部、法务部或IT部门进行最终审核，确保符合公司规范。',
    actions: [
      { text: '提交审核', href: '#' }
    ]
  },
  {
    id: 'go-live',
    title: '正式发布',
    description: '发布到生产环境',
    status: 'pending',
    icon: 'rocket',
    details: '恭喜！审核通过后，只需最后一步，您的网站就能正式上线了。',
    actions: [
      { text: '发布到生产环境', href: '#' }
    ]
  }
];

export const ProcessGuide: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<ProcessStep | null>(processSteps[2]);

  const getStepIcon = (step: ProcessStep) => {
    switch (step.status) {
      case 'completed':
        return <CheckCircleIcon className="text-green-500" />;
      case 'active':
        return <PlayCircleFilledIcon className="text-blue-500" />;
      default:
        return <TimeIcon className="text-gray-400" />;
    }
  };

  const getStepStatus = (step: ProcessStep): 'finish' | 'process' | 'default' => {
    switch (step.status) {
      case 'completed':
        return 'finish';
      case 'active':
        return 'process';
      default:
        return 'default';
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* 页面标题 */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">AI建站全流程指引</h1>
        <p className="text-lg text-gray-600">
          从零到上线，9个步骤轻松完成网站建设。点击任意步骤查看详细说明。
        </p>
      </div>

      {/* 流程步骤 */}
      <Card className="mb-8 p-6">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">建站流程概览</h2>
          <Steps
            current={2}
            theme="dot"
            layout="vertical"
            className="custom-steps"
          >
            {processSteps.map((step, index) => (
              <Steps.StepItem
                key={step.id}
                title={
                  <div 
                    className="cursor-pointer flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                    onClick={() => setSelectedStep(step)}
                  >
                    {getStepIcon(step)}
                    <div>
                      <div className="font-medium text-gray-900">{step.title}</div>
                      <div className="text-sm text-gray-500">{step.description}</div>
                    </div>
                    <Tag 
                      variant="light" 
                      theme={step.status === 'completed' ? 'success' : step.status === 'active' ? 'primary' : 'default'}
                    >
                      {step.status === 'completed' ? '已完成' : step.status === 'active' ? '进行中' : '待开始'}
                    </Tag>
                  </div>
                }
                status={getStepStatus(step)}
              />
            ))}
          </Steps>
        </div>
      </Card>

      {/* 步骤详情 */}
      {selectedStep && (
        <Card className="p-6">
          <div className="flex items-start space-x-4 mb-6">
            {getStepIcon(selectedStep)}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedStep.title}</h3>
              <p className="text-gray-600">{selectedStep.description}</p>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-3">详细说明</h4>
            <p className="text-gray-700 leading-relaxed">{selectedStep.details}</p>
          </div>

          {selectedStep.actions && selectedStep.actions.length > 0 && (
            <div>
              <h4 className="text-lg font-semibold mb-3">相关操作</h4>
              <Space>
                {selectedStep.actions.map((action, index) => (
                  <Button
                    key={index}
                    variant={index === 0 ? 'base' : 'outline'}
                    onClick={action.onClick}
                    href={action.href}
                  >
                    {action.text}
                  </Button>
                ))}
              </Space>
            </div>
          )}
        </Card>
      )}
    </div>
  );
};