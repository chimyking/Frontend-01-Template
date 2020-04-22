# 每周总结可以写在这里

本周通过两次课程深一步的掌握了 JS 的语法和词法以及一些常见字面量的理解
编写 encodeUTF8 时通过查询资料掌握了 encodeURIComponent 不能编码的字符集
写出所有数字字面量和字符串字面量时对 ECMA 标准有了更深入的了解 并通过读 ECMA 标准给出了答案

## JavaScript 语言构成

1. Atom
   - Grammar
     - WhiteSpace(尽量不使用除空格`<SP>`以外的空白符 TIPS: 多种换行符的出现其实是因为老式打字机的问题 )
       - `<TAB>: \t`
       - `<VT>: \v`
       - `<FF>: \f`
       - `<SP>: \s`
       - `<NBSP>：NO-BREAK SPACE`
       - `<ZWNBSP>：ZERO WIDTH NO-BREAK SPACE`
       - `<USP>`
     - LineTerminator
       - `<LF>: \n`
       - `<CR>: \r`
       - `<LS>`
       - `<PS>`
     - Comment
       - `// comment 单行注释`
       - `/* comment */ 多行注释`
     - Token
       - IdentifierName
         - Keywords (关键字)
         - Identifier (标识符)
         - Future reserved Keywords: enum(枚举类型)
       - Punctuator
       - Template
       - Literal
   - Runtime - Types - Symbol 通常用来实现一些私有变量或唯一值 - Number - 浮点数精度比较: Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON
     (这个式子有 bug 1.1+1.3-2.4 无法正确判断) - String - Code Point: U+0000 ~ U+10FFFF， 最好使用 U+0000 ~ U+FFFF 范围内字符 - Boolean - Undifined 在一些低版本浏览器 undefined 的值可以被重写 - Null 这里有个历史遗留问题是 typeof null 返回 object 的原因是因为 js 采用了低位存储 以 000 开头的变量会被 typeof 认为是 object 而 null 表示都是 0 所以会错误的被识别为 object - BigInt 数字以 n 结尾 可以表示超出安全范围的数字(暂未进入标准) - Execution Context(执行上下文)
2. Expression
   - Atom
   - Operator
   - Punctuator
3. Statement
   - Expression
   - Keyword
   - Punctuator
4. Structure
   - Function
   - Class
   - Process
   - Namespace
5. Program/Module
   - Program
   - Module
   - Package
   - Library
