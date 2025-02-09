export const precisions = [
  { label: "FP32", value: "FP32" },
  { label: "FP16 / BFLOAT16", value: "FP16" },
  { label: "FP8", value: "FP8" },
  { label: "INT8 (Quantization)", value: "INT8" },
  { label: "INT4 (Quantization)", value: "INT4" },
]

export const gpuModels = [
  // NVIDIA 数据中心 GPU
  { name: "NVIDIA GB200", memory: 192 },  // 修正为官方规格：192GB HBM3e
  { name: "NVIDIA HGX B200", memory: 1500 },
  { name: "NVIDIA HGX B100", memory: 1500 },
  { name: "NVIDIA HGX H200 8 GPU", memory: 1100 },
  { name: "NVIDIA HGX H200 4 GPU", memory: 564 },
  { name: "NVIDIA HGX H100 8 GPU", memory: 640 },
  { name: "NVIDIA HGX H100 4 GPU", memory: 320 },
  { name: "NVIDIA B200", memory: 192 },
  { name: "NVIDIA B100", memory: 192 },
  { name: "NVIDIA H200", memory: 141 },
  { name: "NVIDIA H100", memory: 80 },
  { name: "NVIDIA H20", memory: 96 },
  { name: "NVIDIA L40", memory: 48 },
  { name: "NVIDIA L20", memory: 48 },
  { name: "NVIDIA L2", memory: 24 },

  // NVIDIA Tesla 系列
  { name: "NVIDIA A100 (80GB)", memory: 80 },
  { name: "NVIDIA A100 (40GB)", memory: 40 },
  { name: "NVIDIA A40", memory: 48 },
  { name: "NVIDIA A30", memory: 24 },
  { name: "NVIDIA A10", memory: 24 },
  { name: "NVIDIA V100S", memory: 32 },
  { name: "NVIDIA V100 (32GB)", memory: 32 },
  { name: "NVIDIA V100 (16GB)", memory: 16 },
  { name: "NVIDIA P100 (16GB)", memory: 16 },
  { name: "NVIDIA P40", memory: 24 },
  { name: "NVIDIA M60", memory: 16 },
  { name: "NVIDIA M40 (24GB)", memory: 24 },
  { name: "NVIDIA K80", memory: 24 },
  { name: "NVIDIA T4", memory: 16 },

  // NVIDIA RTX 6000 系列
  { name: "NVIDIA RTX 6000 Ada", memory: 48 },
  { name: "NVIDIA RTX 6000", memory: 24 },
  { name: "NVIDIA RTX 5000 Ada", memory: 32 },
  { name: "NVIDIA RTX 4000 Ada", memory: 20 },
  { name: "NVIDIA RTX 3000 Ada", memory: 12 },
  
  // NVIDIA RTX 5000 系列
  { name: "NVIDIA RTX 5090", memory: 32 },
  { name: "NVIDIA RTX 5080", memory: 16 },
  { name: "NVIDIA RTX 5070 Ti", memory: 16 },
  { name: "NVIDIA RTX 5070", memory: 12 },
  
  // NVIDIA RTX 4000 系列
  { name: "NVIDIA RTX 4090", memory: 24 },
  { name: "NVIDIA RTX 4080 SUPER", memory: 16 },
  { name: "NVIDIA RTX 4080", memory: 16 },
  { name: "NVIDIA RTX 4070 Ti Super", memory: 16 },
  { name: "NVIDIA RTX 4070 Ti", memory: 12 },
  { name: "NVIDIA RTX 4070", memory: 12 },
  { name: "NVIDIA RTX 4060 Ti", memory: 16 },
  { name: "NVIDIA RTX 4060 Ti", memory: 8 },
  { name: "NVIDIA RTX 4060", memory: 8 },

  // NVIDIA RTX 3000 系列
  { name: "NVIDIA RTX 3090 Ti", memory: 24 },
  { name: "NVIDIA RTX 3090", memory: 24 },
  { name: "NVIDIA RTX 3080 Ti", memory: 12 },
  { name: "NVIDIA RTX 3080", memory: 10 },
  { name: "NVIDIA RTX 3070 Ti", memory: 8 },

  // NVIDIA 老款显卡
  { name: "NVIDIA TITAN V", memory: 12 },
  { name: "NVIDIA GTX 1080 Ti", memory: 11 },
  { name: "NVIDIA TITAN RTX", memory: 24 },

  // AMD 数据中心/专业卡
  { name: "AMD Instinct MI300X", memory: 192 },
  { name: "AMD Instinct MI300A", memory: 128 },
  { name: "AMD Instinct MI250X", memory: 128 },
  { name: "AMD Instinct MI250", memory: 128 },
  { name: "AMD Instinct MI210", memory: 64 },
  { name: "AMD Instinct MI100", memory: 32 },
  { name: "AMD Instinct MI60", memory: 32 },
  { name: "AMD Instinct MI50", memory: 32 },
  { name: "AMD Instinct MI25", memory: 16 },

  // AMD 专业卡
  { name: "AMD Radeon PRO VII", memory: 16 },
  { name: "AMD Radeon PRO W7900", memory: 48 },
  { name: "AMD Radeon PRO W7800", memory: 32 },
  { name: "AMD Radeon PRO W6900X", memory: 32 },
  { name: "AMD Radeon PRO W6800", memory: 32 },
  { name: "AMD Radeon PRO W6600", memory: 8 },
  { name: "AMD Radeon PRO W5700", memory: 8 },
  { name: "AMD Radeon PRO W5500", memory: 8 },

  // AMD RDNA 3 架构
  { name: "AMD Radeon RX 7900 XTX", memory: 24 },
  { name: "AMD Radeon RX 7900 XT", memory: 20 },
  { name: "AMD Radeon RX 7800 XT", memory: 16 },
  { name: "AMD Radeon RX 7700 XT", memory: 12 },
  { name: "AMD Radeon RX 7600 XT", memory: 16 },
  { name: "AMD Radeon RX 7600", memory: 8 },

  // AMD RDNA 2 架构
  { name: "AMD Radeon RX 6950 XT", memory: 16 },
  { name: "AMD Radeon RX 6900 XT", memory: 16 },
  { name: "AMD Radeon RX 6800 XT", memory: 16 },
  { name: "AMD Radeon RX 6800", memory: 16 },
  { name: "AMD Radeon RX 6750 XT", memory: 12 },
  { name: "AMD Radeon RX 6700 XT", memory: 12 },
  { name: "AMD Radeon RX 6650 XT", memory: 8 },
  { name: "AMD Radeon RX 6600 XT", memory: 8 },

  // AMD 经典显卡
  { name: "AMD Radeon VII", memory: 16 },
  { name: "AMD Radeon RX 5700 XT", memory: 8 },
  { name: "AMD Radeon RX 5700", memory: 8 },

  // Apple Silicon
  { name: "Apple M4 Max (128GB)", memory: 128 },  // 最高配置
  { name: "Apple M4 Max (64GB)", memory: 64 },    // 中等配置
  { name: "Apple M4 Max (36GB)", memory: 36 },    // 基础配置

  { name: "Apple M4 Pro (64GB)", memory: 64 },    // 最高配置
  { name: "Apple M4 Pro (48GB)", memory: 48 },    // 中等配置
  { name: "Apple M4 Pro (24GB)", memory: 24 },    // 基础配置

  { name: "Apple M4 (32GB)", memory: 32 },        // 最高配置
  { name: "Apple M4 (24GB)", memory: 24 },        // 中等配置
  { name: "Apple M4 (16GB)", memory: 16 },        // 基础配置

  // M3 系列
  { name: "Apple M3 Ultra (192GB)", memory: 192 },
  { name: "Apple M3 Ultra (128GB)", memory: 128 },
  { name: "Apple M3 Max (128GB)", memory: 128 },
  { name: "Apple M3 Max (96GB)", memory: 96 },
  { name: "Apple M3 Pro (36GB)", memory: 36 },
  { name: "Apple M3 Pro (18GB)", memory: 18 },
  { name: "Apple M3 (24GB)", memory: 24 },
  { name: "Apple M3 (16GB)", memory: 16 },
  { name: "Apple M3 (8GB)", memory: 8 },

  { name: "Apple M2 Ultra (192GB)", memory: 192 },
  { name: "Apple M2 Ultra (128GB)", memory: 128 },
  { name: "Apple M2 Max (96GB)", memory: 96 },
  { name: "Apple M2 Max (64GB)", memory: 64 },
  { name: "Apple M2 Pro (32GB)", memory: 32 },
  { name: "Apple M2 Pro (16GB)", memory: 16 },
  { name: "Apple M2 (24GB)", memory: 24 },
  { name: "Apple M2 (16GB)", memory: 16 },
  { name: "Apple M2 (8GB)", memory: 8 },

  { name: "Apple M1 Ultra (128GB)", memory: 128 },
  { name: "Apple M1 Max (64GB)", memory: 64 },
  { name: "Apple M1 Max (32GB)", memory: 32 },
  { name: "Apple M1 Pro (32GB)", memory: 32 },
  { name: "Apple M1 Pro (16GB)", memory: 16 },
  { name: "Apple M1 (16GB)", memory: 16 },
  { name: "Apple M1 (8GB)", memory: 8 },

  // Huawei Data Center GPUs
  { name: "Huawei Ascend 910B", memory: 64 },
  { name: "Huawei Ascend 910A", memory: 32 },
  { name: "Huawei Ascend 910", memory: 32 },
  { name: "Huawei Ascend 710", memory: 32 },
  { name: "Huawei Ascend 310P", memory: 16 },
  { name: "Huawei Ascend 310", memory: 8 }
].sort((a, b) => b.memory - a.memory) // 按显存大小排序

export const modelExamples = [
  // Base Models
  { name: "DeepSeek-R1", parameters: "671B" },
  { name: "DeepSeek-V3", parameters: "671B" },

  { name: "Qwen-72B", parameters: "72B" },
  { name: "Qwen-32B", parameters: "32B" },
  { name: "Qwen-14B", parameters: "14B" },
  { name: "Qwen-7B", parameters: "7B" },
  { name: "Qwen-1.5B", parameters: "1.5B" },

  { name: "Llama-70B", parameters: "70B" },
  { name: "Llama-65B", parameters: "65B" },
  { name: "Llama-33B", parameters: "33B" },
  { name: "Llama-13B", parameters: "13B" },
  { name: "Llama-7B", parameters: "7B" },
]

