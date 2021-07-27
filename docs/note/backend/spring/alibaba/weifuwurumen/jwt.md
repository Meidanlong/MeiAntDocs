# JWT

## 一、概念
JWT 全称 `Json Web Token`，是一个开发标准（RFC 7519），用来在各方之间安全地传输信息。JWT可被验证和信任，因为它是数字签名的。

## 二、JWT 组成
| 组成 | 作用 | 内容示例 |
| ---- | ---- | ---- |
| Header（头） | 记录令牌类型、签名的算法等 | {"alg":"HS256","typ":"JWT"} |
| Payload（有效载荷）| 携带一些用户信息（非敏感信息） | {"userId":"1","userName":"xxx"} |
| Signature（签名）|防止Token被篡改，确保安全性 | 计算出来的签名，一个字符串 |

## 三、JWT 公式
1. Token = Base64(Header).Base64(Payload).Base64(Signature)
    - 示例：aaaa.bbbb.cccc
2. Signature = Header指定的签名算法(Base64(header).Base64(payload), 密钥)
    - 密钥：HS256("aaaa.bbbb", 密钥)



<comment/>
<ad/>