export const languages = {
    en: 'English',
    zh: '简体中文',
    'zh-Hant': '繁體中文',
    ru: 'Русский',
    ja: '日本語',
    ko: '한국어',
    ar: 'العربية'
} as const

export type Language = keyof typeof languages