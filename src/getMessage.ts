// 组件外用
import { createIntl, defineMessages } from "react-intl";
import enUS from "./locale/en-US.json";
import zhCN from "./locale/zh-CN.json";

const messages: Record<string, any> = {
  "en-US": enUS,
  "zh-CN": zhCN,
};

const locale = "zh-CN";
const intl = createIntl({
  locale: locale,
  messages: messages[locale],
});

const defines = defineMessages({
    inputYourUsername: {
        id: 'inputYourUsername',
        defaultMessage: ''
    }
});

export default function() {
    return intl.formatMessage(defines.inputYourUsername);
}