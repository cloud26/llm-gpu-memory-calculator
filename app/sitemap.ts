import { routing } from '@/i18n/routing'
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || ''

    // 为每个语言生成首页 URL
    const routes = routing.locales.map((locale) => ({
        url: `${baseUrl}/${locale}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 1,
    }))

    // 添加根路径重定向
    routes.push({
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    })

    return routes
} 