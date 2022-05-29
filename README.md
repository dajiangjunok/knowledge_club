# [knowledge_club](https://github.com/dajiangjunok/knowledge_club)

## 代码提交

```
yarn  commit
```

| Type     | 作用                                                                                   |
| -------- | -------------------------------------------------------------------------------------- |
| feat     | 新增特性 (feature)                                                                     |
| fix      | 修复 Bug(bug fix)                                                                      |
| docs     | 修改文档 (documentation)                                                               |
| style    | 代码格式修改(white-space, formatting, missing semi colons, etc)                        |
| refactor | 代码重构(refactor)                                                                     |
| perf     | 改善性能(A code change that improves performance)                                      |
| test     | 测试(when adding missing tests)                                                        |
| build    | 变更项目构建或外部依赖（例如 scopes: webpack、gulp、npm 等）                           |
| ci       | 更改持续集成软件的配置文件和 package 中的 scripts 命令，例如 scopes: Travis, Circle 等 |
| chore    | 变更构建流程或辅助工具(比如更改测试环境)                                               |
| revert   | 代码回退                                                                               |

### 一. 代码规范

#### 1.1.集成 editorconfig 配置

EditorConfig 有助于为不同 IDE 编辑器上处理同一项目的多个开发人员维护一致的编码风格。

```yaml
# http://editorconfig.org

root = true

[*] # 表示所有文件适用
charset = utf-8 # 设置文件字符集为 utf-8
indent_style = space # 缩进风格（tab | space）
indent_size = 2 # 缩进大小
end_of_line = lf # 控制换行类型(lf | cr | crlf)
trim_trailing_whitespace = true # 去除行首的任意空白字符
insert_final_newline = true # 始终在文件末尾插入一个新行

[*.md] # 表示仅 md 文件适用以下规则
max_line_length = off
trim_trailing_whitespace = false
```

VSCode 安装插件：EditorConfig for VS Code. 配合以上 editorconfig 配置

### 1.2. 使用 prettier 工具

代码格式化工具，用以统一整体代码风格，支持 JavaScript、TypeScript、CSS、SCSS、Less、JSX、Angular、Vue、GraphQL、JSON、Markdown 等语言

1.安装 `yarn add prettier -D`

2..配置.prettierrc 文件：

- useTabs：使用 tab 缩进还是空格缩进，选择 false；
- tabWidth：tab 是空格的情况下，是几个空格，选择 2 个；
- printWidth：当行字符的长度，推荐 80，也有人喜欢 100 或者 120；
- singleQuote：使用单引号还是双引号，选择 true，使用单引号；
- trailingComma：在多行输入的尾逗号是否添加，设置为 `none`；
- semi：语句末尾是否要加分号，默认值 true，选择 false 表示不加；

```json
{
  "useTabs": false,
  "tabWidth": 2,
  "printWidth": 80,
  "singleQuote": true,
  "trailingComma": "none",
  "semi": false
}
```

3.创建.prettierignore 忽略文件

```json
/dist/*
.local
.output.js
/node_modules/**

**/*.svg
**/*.sh

/public/*
```

4.VSCode 需要安装 prettier 的插件 配合以上配置

5.测试，在 package.json 中配置一个 scripts：

```js
    "prettier": "prettier --write ."
```

### 1.3.使用 esLint 检测

1.VSCode 需要安装 ESLint 插件：

2.解决 eslint 和 prettier 冲突的问题：【不同版本间有不通的解决方案】

3.详解可查看项目配置

### 1.4. git Husky 和 eslint

利用 eslint 和 husky 对 git 提交进行规范【husky 是一个 git hook 工具，可以帮助我们触发 git 提交的各个阶段：pre-commit、commit-msg、pre-push】

使用 husky: 安装-初始化

```js
yarn add husky
husky-init
```

### 1.5.git commit 规范

#### 1.5.1. 代码提交风格

通常我们的 git commit 会按照统一的风格来提交，这样可以快速定位每次提交的内容，方便之后对版本进行控制。但是如果每次手动来编写这些是比较麻烦的事情，我们可以使用一个工具：**Commitizen**

**Commitizen** 是一个帮助我们编写规范 commit message 的工具；

1.安装 Commitizen

```js
yarn add commitizen -D
```

2.安装 cz-conventional-changelog，并且初始化 cz-conventional-changelog：

```js
yarn add cz-conventional-changelog --save-dev --save-exact
commitizen init
或
npx commitizen init cz-conventional-changelog --save-dev --save-exact
```

这个命令会帮助我们安装 cz-conventional-changelog：

并且在 package.json 中进行配置：

```json
"config": {
    "commitizen": {
      "path": "./node_modules/cz-conventional-changelog"
    }
  }
```

这个时候我们提交代码需要使用 `npx cz`：

将脚本条件到 package.json

```json
 "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint",
    "prettier": "prettier --write .",
    "prepare": "husky install",
    "commit": "cz"
  },
```

#### 1.5.2. 代码提交验证

防止 `git commit` 方式 提交代码。我们可以通过 commitlint 来限制提交；

1.安装 @commitlint/config-conventional 和 @commitlint/cli

```js
yarn add @commitlint/config-conventional @commitlint/cli -D
```

2.在根目录创建 commitlint.config.js 文件，配置 commitlint

```js
module.exports = {
  extends: ['@commitlint/config-conventional']
}
```

3.使用 husky 生成 commit-msg 文件，验证提交信息

```js
npx husky add .husky/commit-msg "npx --no-install commitlint --edit $1"
```
