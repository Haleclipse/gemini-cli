# 卸载 CLI

卸载方法取决于你运行 CLI 的方式。请根据 npx 或全局 npm 安装方式选择相应的说明。

## 方法1：使用 npx

npx 从临时缓存运行包，不会进行永久安装。要"卸载" CLI，你必须清除此缓存，这将删除 gemini-cli 和之前通过 npx 执行的任何其他包。

npx 缓存是位于主 npm 缓存文件夹内名为 `_npx` 的目录。你可以通过运行 `npm config get cache` 找到 npm 缓存路径。

**macOS / Linux**

```bash
# 路径通常是 ~/.npm/_npx
rm -rf "$(npm config get cache)/_npx"
```

**Windows**

*命令提示符*

```cmd
:: 路径通常是 %LocalAppData%\npm-cache\_npx
rmdir /s /q "%LocalAppData%\npm-cache\_npx"
```

*PowerShell*

```powershell
# 路径通常是 $env:LocalAppData\npm-cache\_npx
Remove-Item -Path (Join-Path $env:LocalAppData "npm-cache\_npx") -Recurse -Force
```

## 方法2：使用 npm（全局安装）

如果你全局安装了 CLI（例如，`npm install -g @google/gemini-cli`），请使用带 `-g` 标志的 `npm uninstall` 命令来删除它。

```bash
npm uninstall -g @google/gemini-cli
```

此命令将完全从你的系统中删除该包。