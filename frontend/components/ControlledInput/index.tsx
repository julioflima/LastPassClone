import TextField, { TextFieldProps } from '@mui/material/TextField';
import { Control, Controller } from 'react-hook-form';

interface IControlledInput extends Partial<TextFieldProps> {
  control: Control<any>;
  name: string;
}

const ControlledInput = ({ control, name, ...rest }: IControlledInput) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => {
        return <TextField {...rest} onChange={onChange} value={value} />;
      }}
    />
  );
};

export default ControlledInput;
