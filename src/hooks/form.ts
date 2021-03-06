import { useState, useCallback, ChangeEvent } from 'react';

interface IForm<T> {
  values: T;
  handleChange(evt: ChangeEvent<HTMLInputElement>): void;
  clear(): void;
}

export function useForm<T>(initialValues: T): IForm<T> {
  const [values, setValues] = useState<T>(initialValues);

  const handleChange = useCallback(
    (evt: ChangeEvent<HTMLInputElement>) => {
      const newCategory = { ...values, [evt.target.name]: evt.target.value };

      setValues(newCategory);
    },
    [values],
  );

  const clear = useCallback(() => {
    setValues(initialValues);
  }, [initialValues]);

  return {
    values,
    handleChange,
    clear,
  };
}
