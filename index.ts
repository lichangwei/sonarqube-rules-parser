import md2c from 'md2c';
import request from 'request';
import Turndown from 'turndown';
import clipboard from 'clipboardy';

import config from './config';
// 不转义代码中的某些字符
// @ts-ignore
Turndown.prototype.escape = (text: string): string => text;

const turndown = new Turndown();
turndown.addRule('pre', {
    filter: ['pre'],
    replacement: (content: string) => '```js\n' + content + '```\n',
});
turndown.addRule('h2', {
    filter: ['h2'],
    replacement: (content: string) => `### ${content}\n`,
});

request.get(
    {
        url: `${config.host}/api/rules/search`,
        qs: {
            qprofile: config.qprofile,
            f: 'name,mdDesc,severity',
            s: 'name',
            activation: true,
            is_template: false,
            statuses: 'READY',
            ps: 500, // 分页
        },
        auth: { user: config.token },
        json: true,
    },
    function(error, res, body) {
        if (error) return console.error(error);
        // 将每个规则中的描述转成`markdown`格式
        const rules = body.rules
            .filter((rule) => !config.exclude.includes(rule.key))
            .map(function(rule, index: number) {
                return `## ${index + 1}. ${rule.name}\n${turndown.turndown(rule.mdDesc)}`;
            });
        //生成`markdown`文件内容
        const markdown = `# JavaScript 代码规范\n\n${rules.join('\n\n')}`;
        //将`markdown`转成`Confluence Wiki Markup`并复制到粘贴板
        clipboard.writeSync(md2c(markdown));
        console.log('Confluence wiki markup copied.');
    }
);
