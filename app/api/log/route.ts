import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    try {
        const data = await request.json()
        const { parameters, precision, gpuModel, gpuMemory, totalMemory, requiredGPUs, locale } = data

        console.log(`[${locale}] 计算GPU数量 - 参数: ${parameters}B, 精度: ${precision}, GPU型号: ${gpuModel}, GPU显存: ${gpuMemory}GB, 总内存: ${totalMemory}GB, 所需GPU: ${requiredGPUs}个`)

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('记录日志失败:', error)
        return NextResponse.json({ success: false, error: '记录日志失败' }, { status: 500 })
    }
} 