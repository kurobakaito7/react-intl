import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { IntlProvider } from 'react-intl'
import enUS from './locale/en-US.json'
import zhCN from './locale/zh-CN.json'

const message: Record<string, any> = {
  'en-US': enUS,
  'zh-CN': zhCN,
}

// const locale = navigator.language;
const locale = 'en-US'

createRoot(document.getElementById('root')!).render(
  <IntlProvider messages={message[locale]} locale={locale} defaultLocale='zh_CN'>
    <App />
  </IntlProvider>
)
