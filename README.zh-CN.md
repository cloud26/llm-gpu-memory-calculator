# 大模型显存计算器

一个简单易用的大型语言模型 (LLM) GPU 内存需求计算器。帮助你快速估算运行不同规模模型所需的 GPU 内存和设备数量。

[English](README.md) | [简体中文](README.zh-CN.md)

## 功能特点

- 支持按模型参数量计算所需 GPU 内存
- 支持多种精度格式：FP32、FP16/BFLOAT16、FP8、INT8、INT4
- 内置多种流行 LLM 模型预设（DeepSeek-R1、Qwen、Llama 等）
- 支持超过 130 种 GPU 型号，包括：
  - NVIDIA 数据中心 GPU (H100, H200, B100, B200 等)
  - NVIDIA 消费级显卡 (RTX 系列)
  - AMD 数据中心 GPU (Instinct 系列)
  - AMD 消费级显卡 (RX 系列)
  - Apple Silicon (M1-M4 系列)
  - 华为 Ascend 系列
- 完整国际化支持（英文、简体中文、繁体中文、俄语、日语、韩语、阿拉伯语）
- 响应式设计，适配桌面和移动设备

## 计算方法

该计算器使用以下公式估算 LLM 推理所需的 GPU 内存：

1. 模型权重内存 = 参数量 × 每个参数的字节数
2. 推理内存 = 模型权重内存 × 10%（用于激活值、KV 缓存等）
3. 总内存需求 = 模型权重内存 + 推理内存
4. 所需 GPU 数量 = 总内存需求 ÷ 单个 GPU 内存容量（向上取整）

## 技术栈

- [Next.js](https://nextjs.org/) - React 框架
- [TypeScript](https://www.typescriptlang.org/) - 类型安全的 JavaScript 超集
- [Tailwind CSS](https://tailwindcss.com/) - 实用优先的 CSS 框架
- [shadcn/ui](https://ui.shadcn.com/) - 可重用的 UI 组件
- [next-intl](https://next-intl-docs.vercel.app/) - 国际化支持

## 本地开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 启动生产服务器
pnpm start
```

## 贡献指南

欢迎提交 Pull Request 或开设 Issue 来帮助改进这个项目。可以贡献的方向包括：

- 添加更多 GPU 型号
- 添加更多 LLM 模型预设
- 优化计算方法
- 增加更多语言支持
- 改进 UI/UX

## 许可证

MIT
