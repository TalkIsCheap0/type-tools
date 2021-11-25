/**
 * 获取T中属性K的值类型
 * @example 
 * type Obj = { a: string, b: number }
 * type PickValueTypeExp = PickValueType<Obj, 'a'> 
 * 相当于
 * type PickValueTypeExp = string
 */
 export type PickValueType<T, K extends keyof T> = T[K]

 /**
  * 递归地把T中的属性置为可选
  * @example 
  * type Obj = { a: { b: { c: string } }, b: number }
  * type DeepPartialExp = DeepPartial<Obj> 
  * 相当于
  * type DeepPartialExp = { a?: { b?: { c?: string } }, b?: number }
  */
 export type DeepPartial<T> = {
   [P in keyof T]?: DeepPartial<T[P]>;
 };
 
 /**
  * 允许未知的键
  * @example
  * type Obj = { a: string }
  * type AllowNotExistExp = AllowNotExist<Obj>
  * const obj: AllowNotExistExp = { a: 'a', b: 0 } // 允许添加b属性 
  */
 export type AllowNotExist<T> = { [key in keyof T]: T[key] } & { [key: string]: any }
 
 /**
  * 忽略深度 允许未知的键
  * @example
  * type Obj = { a: { b: string } }
  * type DeepAllowNotExistExp = DeepAllowNotExist<Obj>
  * const obj: DeepAllowNotExistExp = { a: { b: 'b', c: 0 } } // 允许添加c属性 
  */
 export type DeepAllowNotExist<T> = {
   [key in keyof T]: T[key] extends Object ? DeepAllowNotExist<T[key]> : T[key];
 } & { [key: string]: any }
 
 /**
  * 至少包含一个键
  * @example
  * type Obj = { a?: string, b?: number }
  * type AtLeastRequireOneExp = AtLeastRequireOne<Obj, 'a' | 'b'>
  * const obj: AtLeastRequireOneExp = { a: '' }
  * const obj2: AtLeastRequireOneExp = { b: 0 }
  */
 type AtLeastRequireOne<
   ObjectType,
   KeysType extends keyof ObjectType = keyof ObjectType,
   > = {
     [Key in KeysType]-?: Required<Pick<ObjectType, Key>> &
     Partial<Pick<ObjectType, Exclude<KeysType, Key>>>;
   }[KeysType] &
   Omit<ObjectType, KeysType>;