import { ref } from 'vue'
import { useDateFormat } from '@vueuse/core'

export function useForm() {

  const values = ref<Values>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: '',
    birthDate: '',
    phoneNumber: '',
    age: 0,
  });

  const transform = <k extends keyof Values>(key: k, value: Values[k]): Values[k] => {
    if (key === 'birthDate') {
      // @ts-expect-error
      return useDateFormat(value, 'YYYY-MM-DD').value;
    }
    return value;
  }

  return {
    setValue<k extends keyof Values>(key: k, value: Values[k]){
      values.value[key] = transform(key, value);
    },
    getValue<k extends keyof Values>(key: k): Values[k] {
      return values.value[key];
    },
    submit(requestFunc:(values: Values)=>void) {
      requestFunc(values.value);
    },
    setInitialValues(initialValues: Partial<APIProps>) {
      if (initialValues.first_name !== undefined) {
        values.value.firstName = initialValues.first_name;
      }
      if (initialValues.last_name !== undefined) {
        values.value.lastName = initialValues.last_name;
      }
      if (initialValues.email !== undefined) {
        values.value.email = initialValues.email;
      }
      if (initialValues.address !== undefined) {
        values.value.address = initialValues.address;
      }
      if (initialValues.birth_date !== undefined) {
        values.value.birthDate = initialValues.birth_date;
      }
      if (initialValues.phone_number !== undefined) {
        values.value.phoneNumber = initialValues.phone_number;
      }
      if (initialValues.age !== undefined) {
        values.value.age = initialValues.age;
      }
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

export type Values = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  address: string;
  birthDate: string;
  phoneNumber: string;
  age: number;
}
