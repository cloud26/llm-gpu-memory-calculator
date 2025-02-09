interface MemoryCalculationResult {
  modelMemory: number
  inferenceMemory: number
  totalMemory: number
  requiredGPUs: number
}

export function calculateInferenceMemory(
  parameters: number,
  precision: string,
  gpuMemory: number,
): MemoryCalculationResult {
  // 计算每个参数占用的字节数
  let bytesPerParameter = 4; // 默认 FP32
  switch (precision) {
    case "FP16":
      bytesPerParameter = 2;
      break;
    case "FP8":
      bytesPerParameter = 1;
      break;
    case "INT8":
      bytesPerParameter = 1;
      break;
    case "INT4":  // 新增 INT4 支持
      bytesPerParameter = 0.5;
      break;
  }

  // 模型权重内存 (GB)
  const modelMemory = (parameters * 1e9 * bytesPerParameter) / 1e9

  // 推理内存估算为模型内存的 10%
  const inferenceMemory = modelMemory * 0.1

  // 总内存
  const totalMemory = modelMemory + inferenceMemory

  // 计算所需的 GPU 数量（向上取整）
  const requiredGPUs = Math.ceil(totalMemory / gpuMemory)

  return {
    modelMemory: Number(modelMemory.toFixed(2)),
    inferenceMemory: Number(inferenceMemory.toFixed(2)),
    totalMemory: Number(totalMemory.toFixed(2)),
    requiredGPUs: requiredGPUs,
  }
}

