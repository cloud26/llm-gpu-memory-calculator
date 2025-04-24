import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from "@vercel/analytics/react"
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { languages } from '@/config/languages';
import Script from 'next/script'
import '@/app/globals.css'  // 确保样式文件被正确导入

const inter = Inter({ subsets: ['latin'] })

export function generateMetadata({ params: { locale } }: { params: { locale: string } }): Metadata {
    let messages;
    try {
        messages = require(`../../messages/${locale}.json`);
    } catch (error) {
        messages = require('../../messages/en.json');
    }

    const meta = messages.meta || {};
    const title = meta.title || 'LLM Memory Calculator';
    const description = meta.description || 'Calculate GPU memory requirements for Large Language Models';
    const keywords = meta.keywords || ['LLM', 'memory calculator', 'GPU memory'];

    return {
        title,
        description,
        metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
        robots: {
            index: true,
            follow: true,
            googleBot: {
              index: true,
              follow: true,
            },
        },
        openGraph: {
            title,
            description,
            type: 'website',
            locale,
            alternateLocale: locale === 'en' ? 'zh' : 'en',
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
        },
        alternates: {
            canonical: '/',
            languages: {
                'zh': '/zh',
                'zh-Hant': '/zh-Hant',
                'en': '/en',
                'ru': '/ru',
                'ja': '/ja',
                'ko': '/ko',
                'ar': '/ar',
            },
        },
        // 'other' 字段在 Next.js Metadata 中不是标准字段,
        // 这些信息最好放在 description 和 keywords 中以优化 SEO
        keywords: keywords,
    }
}

export function generateStaticParams() {
    const supportedLanguages = Object.keys(languages).filter(
        lang => !['es', 'fr', 'de', 'pt', 'it'].includes(lang)
    );
    return supportedLanguages.map((locale) => ({ locale }));
}

export default async function RootLayout({
    children,
    params: { locale }
}: {
    children: React.ReactNode
    params: { locale: string }
}) {
    if (['es', 'fr', 'de', 'pt', 'it'].includes(locale)) {
        notFound();
    }

    let messages;
    try {
        messages = (await import(`../../messages/${locale}.json`)).default;
    } catch (error) {
        notFound();
    }

    return (
        <html lang={locale}>
            <head>
                <Script
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8472112646404075"
                    crossOrigin="anonymous"
                    strategy="beforeInteractive"
                />
                {locale === 'zh' && (
                    <meta name="baidu-site-verification" content="your-verification-code" />
                )}
            </head>
            <body className={inter.className}>
                <NextIntlClientProvider messages={messages} locale={locale}>
                    {children}
                    <Analytics />
                </NextIntlClientProvider>
            </body>
        </html>
    )
}