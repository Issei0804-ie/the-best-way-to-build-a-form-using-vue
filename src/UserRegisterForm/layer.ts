import { ref, unref, UnwrapRef } from 'vue'

export function useForm<T, k extends keyof T>(
  initialValue: T,
  transform?: (key: k, value: T[k]) => T[k] | undefined
  ):{
  getValue(key: k): T[k];
  setValue(key: k, value: T[k]): void;
  submit(callback: (value:T)=>void): void;
} {

  const values = ref<T>(initialValue);
  const a = ref<number>(1);
  const hoge: T =values.value;
  function isTypeT(value: UnwrapRef<T> | T): value is T {
    // ここに`T`であることを確認するためのロジックを実装
    return true; // 簡単のため常にtrueを返す
  }

  if (isTypeT(values.value)) {
    const hoge: T = values.value; // タイプガードによりここではTとして扱える
  }

  return {
    getValue(key: k): T[k]{
      if (transform){
        const v = transform(key, (values.value as T)[key]);
        if (v !== undefined){
          return v;
        }
      }
      return (values.value as T)[key];
    },
    setValue(key: k, value: T[k]){
      (values.value as T)[key] = value;
    },
    submit(callback: (value: T) => void) {
      callback(unref<T>(values));
    }
  }
}

export type APIProps = {
  first_name: string;
  last_name: string;
  email: string;
  address: string;
  birth_date: string;
  phone_number: string;
  age: number;
}
