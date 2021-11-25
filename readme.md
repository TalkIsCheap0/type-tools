# ncms开发体系 常用泛型

## PickValueType
获取T中属性K的值类型
```TypeScript
type Obj = { a: string, b: number }
type PickValueTypeExp = PickValueType<Obj, 'a'>
// 相当于
type PickValueTypeExp = string
```
## DeepPartial
递归地把T中的属性置为可选
```TypeScript
 type Obj = { a: { b: { c: string } }, b: number }
 type DeepPartialExp = DeepPartial<Obj> 
 // 相当于
 type DeepPartialExp = { a?: { b?: { c?: string } }, b?: number }
```
## AllowNotExist
允许未知的键
```TypeScript
type Obj = { a: string }
type AllowNotExistExp = AllowNotExist<Obj>
const obj: AllowNotExistExp = { a: 'a', b: 0 } // 允许添加b属性 
```

## DeepAllowNotExist
忽略深度 允许未知的键
```TypeScript
type Obj = { a: { b: string } }
type DeepAllowNotExistExp = DeepAllowNotExist<Obj>
const obj: DeepAllowNotExistExp = { a: { b: 'b', c: 0 } } // 允许添加c属性 
```
## AtLeastRequireOne
至少包含一个键
```TypeScript
type Obj = { a?: string, b?: number }
type AtLeastRequireOneExp = AtLeastRequireOne<Obj, 'a' | 'b'>
const obj: AtLeastRequireOneExp = { a: '' }
const obj2: AtLeastRequireOneExp = { b: 0 }
```

# 通用类型工具
[`type-fest文档`](https://github.com/sindresorhus/type-fest#readme)
