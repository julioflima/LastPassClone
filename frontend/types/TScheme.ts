import * as yup from 'yup';
import Lazy from 'yup/lib/Lazy';
import Reference from 'yup/lib/Reference';

export type TScheme<T> = {
  [Property in keyof T]: yup.AnySchema<any, any, any> | Reference<unknown> | Lazy<any, any>;
};
