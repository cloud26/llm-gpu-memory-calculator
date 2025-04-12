# LLM GPU Memory Calculator

A simple and easy-to-use GPU memory calculator for Large Language Models (LLMs). Helps you quickly estimate the GPU memory requirements and number of devices needed to run models of various sizes.

[English](README.md) | [简体中文](README.zh-CN.md)

## Features

- Calculate required GPU memory based on model parameter count
- Support for multiple precision formats: FP32, FP16/BFLOAT16, FP8, INT8, INT4
- Built-in presets for popular LLM models (DeepSeek-R1, Qwen, Llama, etc.)
- Support for over 130 GPU models, including:
  - NVIDIA Data Center GPUs (H100, H200, B100, B200, etc.)
  - NVIDIA Consumer GPUs (RTX series)
  - AMD Data Center GPUs (Instinct series)
  - AMD Consumer GPUs (RX series)
  - Apple Silicon (M1-M4 series)
  - Huawei Ascend series
- Complete internationalization support (English, Simplified Chinese, Traditional Chinese, Russian, Japanese, Korean, Arabic)
- Responsive design for desktop and mobile devices

## Calculation Method

This calculator uses the following formula to estimate GPU memory required for LLM inference:

1. Model Weight Memory = Number of Parameters × Bytes per Parameter
2. Inference Memory = Model Weight Memory × 10% (for activations, KV cache, etc.)
3. Total Memory Requirement = Model Weight Memory + Inference Memory
4. Required GPUs = Total Memory Requirement ÷ Single GPU Memory Capacity (rounded up)

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript superset
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Reusable UI components
- [next-intl](https://next-intl-docs.vercel.app/) - Internationalization support

## Local Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## Contributing

Contributions via Pull Requests or Issues are welcome to help improve this project. Potential areas for contribution include:

- Adding more GPU models
- Adding more LLM model presets
- Optimizing calculation methods
- Adding support for more languages
- Improving UI/UX

## License

MIT
