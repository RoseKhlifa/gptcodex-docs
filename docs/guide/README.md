# GPTCODEX 对接教程

## 工具推荐

[CC Switch](https://github.com/farion1231/cc-switch)：可随意更换不同中转站API配置 无需手动修改配置文件 也可导入OpenAI Official类型 添加自己官方账号的配置 随意切换

## 对接方法

### 1. 生成密钥

前往 [我的密钥](https://gptcodex.top/keys) 生成密钥。

![Keys](/keys.png)

注意 选择分组

不同分组 倍率不同 且可用模型不同

**Lite/Plus/Pro/Ultra-W/M** 等分组 为 **GPT订阅分组** 倍率为**1.0x** 但模型价格为官方的**2x** **选择此分组的密钥将消耗订阅额度 不会消耗余额**

**en造余额** 分组为 **GPT余额分组** 倍率为**1.5x** 模型价格为官方的**1x** 选择此分组的密钥将消耗**站内余额**

上述分组可用模型：GPT-5.4 GPT-5.4-mini GPT-5.3-codex GPT-5.2

**CC-反重力渠道** 分组为ClaudeCode模型余额分组 倍率为**8.5x** 模型价格为官方的**1x**  选择此分组的密钥将消耗**站内余额**

可用模型为：claude-opus-4-6和claude-sonnet-4-6

### 2.导入配置到CCS

直接点击选中密钥右侧的**导入到CCS**按钮（需提前下载安装CCSwitch 链接在最上方）。

![CCS](/ccs.png)

![ccs导](/ccs导.png)

### 3.测试与启用

点击CCS左上角的设置->高级->模型测试配置 将Codex模型改为GPT-5.4(默认为5.1 已下线) 注意点击下面的保存 有两个保存按钮

![test](/test.png)

回到首页点击测试模型 绿色消息即为连接成功

![启用](/启用.png)

点击启用即可 打开codex cli/codex desktop/任意IDE中的codex插件 即可对话使用

**ClaudeCode同理！**

### 注：若要手动更改配置文件

可参照以下两个文件

codex：修改C:\Users\用户名\\.codex 目录下的config.toml为以下内容

```cpp
model_provider = "gptcodex"
model = "gpt-5.4"
model_reasoning_effort = "xhigh"
disable_response_storage = true

[model_providers.gptcodex]
name = "gptcodex"
base_url = "https://gptcodex.top"
wire_api = "responses"
requires_openai_auth = true
```

修改C:\Users\用户名\\.codex 目录下的auth.json为以下内容

```cpp
{
  "OPENAI_API_KEY": "以sk开头的Key"
}
```

Claude：修改C:\Users\用户名\\.claude目录下的settings.json为以下内容

```cpp
{
  "env": {
    "ANTHROPIC_AUTH_TOKEN": "以sk开头的Key",
    "ANTHROPIC_BASE_URL": "https://gptcodex.top",
    "ANTHROPIC_MODEL": "claude-opus-4-6",
    "ANTHROPIC_DEFAULT_OPUS_MODEL": "claude-opus-4-6",
    "ANTHROPIC_DEFAULT_SONNET_MODEL": "claude-sonnet-4-6",
    "ANTHROPIC_DEFAULT_HAIKU_MODEL": "claude-opus-4-6"
  },
  "model": "opus[1m]",
  "effortLevel": "high"
}
```

### 另：若要恢复先前对话内容

点击CCS右上角会话历史

![会话历史](/会话历史.png)

选择想要恢复的会话 并复制命令 到终端输入

![copy](/copy.png)

# 如有其他问题还需补充请联系站长(官方群群主)
