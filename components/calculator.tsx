"use client"

import { useState, useEffect } from "react"
import { Check, ChevronsUpDown, InfoIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { calculateInferenceMemory } from "@/utils/calculations"
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip"
import { precisions, gpuModels, modelExamples } from "@/utils/constants"
import { useTranslations } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/client'
import { languages, type Language } from '@/config/languages';
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useParams } from "next/navigation"

export default function Calculator() {
    const t = useTranslations();
    const router = useRouter();
    const pathname = usePathname();
    const params = useParams();

    const [parameters, setParameters] = useState<string>("671")
    const [precision, setPrecision] = useState<string>("FP8")
    const [gpuModel, setGpuModel] = useState<string>("NVIDIA H100")
    const [selectedModel, setSelectedModel] = useState<string>("DeepSeek-R1")

    const selectedGpu = gpuModels.find((gpu) => `${gpu.name} (${gpu.memory}GB)` === gpuModel)
    const gpuMemory = selectedGpu ? selectedGpu.memory : 80 // 默认使用 80GB

    const memory = calculateInferenceMemory(Number(parameters), precision, gpuMemory)

    // 添加日志记录函数
    const logCalculation = async () => {
        try {
            await fetch('/api/log', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    parameters: Number(parameters),
                    precision,
                    gpuModel,
                    gpuMemory,
                    totalMemory: memory.totalMemory,
                    requiredGPUs: memory.requiredGPUs,
                    locale: params.locale
                }),
            });
        } catch (error) {
            console.error('Failed to log calculation:', error);
        }
    };

    // 在计算结果更新时记录日志
    useEffect(() => {
        logCalculation();
    }, [parameters, precision, gpuModel, memory]);

    const handleParameterChange = (value: string) => {
        setParameters(value.replace(/[^0-9.]/g, ""))
    }

    const handleLanguageChange = (newLocale: Language) => {
        router.replace(pathname, { locale: newLocale });
    };

    return (
        <TooltipProvider delayDuration={100}>
            <div className="min-h-screen bg-white flex flex-col">
                <header itemScope itemType="http://schema.org/WebApplication">
                    <meta itemProp="applicationCategory" content="AI Tool" />
                    <meta itemProp="operatingSystem" content="Web-based" />
                    <div className="bg-[#2D2A3E] text-white py-12 mb-4">
                        <div className="container mx-auto px-4 max-w-3xl">
                            <div className="flex justify-between items-center">
                                <h1 itemProp="name" className="text-lg md:text-3xl font-light">
                                    {t('title')}
                                </h1>
                                <p itemProp="description" className="hidden">
                                    A web-based calculator for estimating GPU memory requirements of Large Language Models
                                </p>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant="outline"
                                            className="w-40 text-white border-white/20 bg-transparent hover:bg-white/10"
                                        >
                                            {languages[params.locale as Language]}
                                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-40 p-0">
                                        <Command>
                                            <CommandList>
                                                <CommandGroup>
                                                    {Object.entries(languages).map(([code, name]) => (
                                                        <CommandItem
                                                            key={code}
                                                            onSelect={() => handleLanguageChange(code as Language)}
                                                        >
                                                            <Check
                                                                className={cn(
                                                                    "mr-2 h-4 w-4",
                                                                    code === params.locale ? "opacity-100" : "opacity-0"
                                                                )}
                                                            />
                                                            {name}
                                                        </CommandItem>
                                                    ))}
                                                </CommandGroup>
                                            </CommandList>
                                        </Command>
                                    </PopoverContent>
                                </Popover>
                            </div>
                        </div>
                    </div>
                </header>

                <main className="container mx-auto px-4 max-w-3xl flex-grow">
                    <Card className="p-6">
                        <CardContent className="space-y-6">
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <Label htmlFor="parameters">
                                        {t('parameters.label')}
                                        <span className="hidden">LLM model size in billions of parameters</span>
                                    </Label>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <InfoIcon className="h-4 w-4 text-muted-foreground" />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <div>
                                                <p>{t('parameters.tooltip')}</p>
                                                <p className="hidden">
                                                    Common LLM sizes: 7B (Llama 2), 13B, 70B, 175B (GPT-3)
                                                    Used for calculating GPU memory requirements for inference
                                                </p>
                                            </div>
                                        </TooltipContent>
                                    </Tooltip>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Input
                                        id="parameters"
                                        type="text"
                                        value={parameters}
                                        onChange={(e) => handleParameterChange(e.target.value)}
                                        className="text-lg w-1/2"
                                    />
                                    <Select
                                        value={selectedModel}
                                        onValueChange={(value) => {
                                            setSelectedModel(value);
                                            const model = modelExamples.find(m => m.name === value);
                                            if (model) {
                                                setParameters(model.parameters.replace("B", ""));
                                            }
                                        }}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder={t('parameters.selectPlaceholder')} />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {modelExamples.map((model) => (
                                                <SelectItem key={model.name} value={model.name}>
                                                    {model.name}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <Label>{t('precision.label')}</Label>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <InfoIcon className="h-4 w-4 text-muted-foreground" />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            {t('precision.tooltip')}
                                        </TooltipContent>
                                    </Tooltip>
                                </div>
                                <Select value={precision} onValueChange={setPrecision}>
                                    <SelectTrigger className="text-lg">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {precisions.map((p) => (
                                            <SelectItem key={p.value} value={p.value}>
                                                {p.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label>{t('gpu.label')}</Label>

                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button variant="outline" role="combobox" className="w-full justify-between text-lg">
                                            {gpuModel ? `${gpuModel}` : "选择 GPU 型号"}
                                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-full p-0">
                                        <Command>
                                            <CommandInput placeholder={t('gpu.searchPlaceholder')} />
                                            <CommandList>
                                                <CommandEmpty>{t('gpu.notFound')}</CommandEmpty>
                                                <CommandGroup>
                                                    {gpuModels.map((gpu) => (
                                                        <CommandItem
                                                            key={`${gpu.name} (${gpu.memory}GB)`}
                                                            value={`${gpu.name} (${gpu.memory}GB)`}
                                                            onSelect={(currentValue) => {
                                                                setGpuModel(currentValue === gpuModel ? "" : currentValue)
                                                            }}
                                                        >
                                                            <Check
                                                                className={cn(
                                                                    "mr-2 h-4 w-4",
                                                                    gpuModel === `${gpu.name} (${gpu.memory}GB)` ? "opacity-100" : "opacity-0",
                                                                )}
                                                            />
                                                            {`${gpu.name} (${gpu.memory}GB)`}
                                                        </CommandItem>
                                                    ))}
                                                </CommandGroup>
                                            </CommandList>
                                        </Command>
                                    </PopoverContent>
                                </Popover>
                            </div>

                            <div className="bg-slate-50 p-4 rounded-lg space-y-3">
                                <div className="space-y-1">
                                    <Label className="text-gray-600">{t('results.modelMemory')}：</Label>
                                    <p className="text-xl">
                                        <span className="text-blue-600 font-semibold">{memory.modelMemory}</span> GB
                                    </p>
                                </div>
                                <div className="space-y-1">
                                    <Label className="text-gray-600">{t('results.inferenceMemory')}：</Label>
                                    <p className="text-xl">
                                        <span className="text-blue-600 font-semibold">{memory.inferenceMemory}</span> GB
                                    </p>
                                </div>
                                <div className="pt-2 border-t">
                                    <Label className="text-gray-600">{t('results.totalMemory')}：</Label>
                                    <p className="text-2xl">
                                        <span className="text-blue-600 font-semibold">{memory.totalMemory}</span> GB
                                    </p>
                                </div>
                            </div>

                            <div className="bg-blue-50 p-4 rounded-lg">
                                <Label className="text-gray-600">{t('results.requiredGPUs')}：</Label>
                                <p className="text-2xl">
                                    <span className="text-blue-600 font-semibold">{memory.requiredGPUs}</span> {t('results.unit')} {gpuModel}
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </main>

                <footer className="py-6 text-center">
                    <p className="text-gray-600 mb-3">{t('footer.supportText')}</p>
                    <a
                        href="https://www.buymeacoffee.com/pengpeng"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block hover:opacity-90 transition-opacity"
                    >
                        <img
                            src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                            alt="Buy Me A Coffee"
                            className="h-[60px] w-[217px]"
                        />
                    </a>
                </footer>
            </div>
        </TooltipProvider>
    )
} 