import { yupResolver } from '@hookform/resolvers/yup';
import DeleteIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel
} from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { regUrl } from '../../constants/regex';
import { MIN_VALIDATION, REQUIRED_STRING_VALIDATION, URL_VALIDATION } from '../../constants/texts';
import { ICard } from '../../interfaces/ICard';
import CardsService from '../../services/CardsService';
import { theme } from '../../styles/theme';
import { TScheme } from '../../types/TScheme';

const ButtonStyled = styled(Button)(() => ({
  background: theme.colors.primary.one,
  '&:hover': {
    background: theme.colors.primary.three
  }
}));

export interface IForms extends ICard {
  create?: boolean;
  read?: boolean;
  edit?: boolean;
  onEdit: (card: ICard) => void;
  onDelete: (card: ICard) => void;
  onRefresh: () => void;
}

const Forms: FC<IForms> = ({ create, edit, read, onEdit, onDelete, onRefresh, ...card }) => {
  const [initialCard, setInitialCard] = useState<ICard>();
  const [hidePassword, setHidePassword] = useState(false);

  const schema = yup.object().shape({
    url: yup.string().matches(regUrl, URL_VALIDATION).required(REQUIRED_STRING_VALIDATION),
    username: yup.string().required(REQUIRED_STRING_VALIDATION),
    name: yup.string().required(REQUIRED_STRING_VALIDATION),
    password: yup.string().min(3, MIN_VALIDATION).required(REQUIRED_STRING_VALIDATION)
  } as TScheme<ICard>);

  const {
    control,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    getValues,
    reset,
    setValue,
    trigger
  } = useForm<ICard>({
    resolver: yupResolver(schema),
    mode: 'onBlur',
    defaultValues: useMemo(() => initialCard, [initialCard])
  });

  const disabled = !isDirty || !isValid;

  const handleInitialData = useCallback(async (): Promise<void> => {
    try {
      if (card.id && (edit || read) && !initialCard?.id) {
        const response = await new CardsService().get(card.id);
        reset(response);
        setInitialCard(response);
      }
    } catch (error) {
      console.error(error);
    }
  }, [card, initialCard]);

  const handlePost = async (): Promise<void> => {
    const dados = getValues();
    try {
      await new CardsService().post(dados);
      onRefresh();
    } catch (error) {
      console.error(error);
    }
  };

  const handlePut = async (): Promise<void> => {
    try {
      if (card.id) {
        const dados = getValues();
        await new CardsService().put(card.id, dados);
        onRefresh();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleButton = () => {
    if (edit) return handlePut();
    return handlePost();
  };

  const onSubmit = handleSubmit(handleButton);

  const handleEdit = () => onEdit(card);
  const handleDelete = () => onDelete(card);

  const handleClickShowPassword = () => setHidePassword((oldState) => !oldState);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  useEffect(() => {
    handleInitialData();
  }, [handleInitialData]);

  return (
    <>
      <Grid sx={{ mt: 0 }} container spacing={2} columns={16}>
        <Grid item xs={8}>
          <Controller
            control={control}
            name={'url'}
            render={({ field: { onChange, value } }) => (
              <TextField
                onChange={onChange}
                label="URL"
                variant="standard"
                fullWidth
                value={value}
                defaultValue={edit ? ' ' : ''}
                error={!!errors.url}
                helperText={errors?.url?.message}
                disabled={read}
              />
            )}
          />
        </Grid>
        <Grid item xs={8}>
          <Controller
            control={control}
            name={'name'}
            render={({ field: { onChange, value } }) => (
              <TextField
                onChange={onChange}
                label="Name"
                variant="standard"
                value={value}
                defaultValue={edit ? ' ' : ''}
                fullWidth
                error={!!errors.name}
                helperText={errors?.name?.message}
                disabled={read}
              />
            )}
          />
        </Grid>
        <Grid item xs={8}>
          <Controller
            control={control}
            name={'username'}
            render={({ field: { onChange, value } }) => (
              <TextField
                onChange={onChange}
                label="Username"
                variant="standard"
                value={value}
                defaultValue={edit ? ' ' : ''}
                fullWidth
                error={!!errors.username}
                helperText={errors?.username?.message}
                disabled={read}
              />
            )}
          />
        </Grid>
        <Grid item xs={8}>
          <Controller
            control={control}
            name={'password'}
            render={({ field: { onChange, value } }) => (
              <FormControl fullWidth variant="standard" disabled={read}>
                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                <Input
                  type={hidePassword ? 'text' : 'password'}
                  value={value}
                  defaultValue={edit ? ' ' : ''}
                  onChange={onChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        sx={{ top: -6 }}
                      >
                        {hidePassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            )}
          />
        </Grid>
      </Grid>

      <DialogActions sx={{ mt: 4 }}>
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row-reverse',
            justifyContent: 'space-between'
          }}
        >
          {(create || edit) && (
            <ButtonStyled
              autoFocus
              variant="contained"
              sx={{ background: theme.colors.primary.one }}
              disabled={disabled}
              onClick={onSubmit}
            >
              {create && 'Create!'}
              {edit && 'save!'}
            </ButtonStyled>
          )}
          {!(create || edit) && read && <div />}

          {(edit || read) && (
            <Box>
              <IconButton aria-label="edit" onClick={handleEdit}>
                <EditIcon sx={{ fontSize: 20 }} />
              </IconButton>
              <IconButton aria-label="close" onClick={handleDelete}>
                <DeleteIcon sx={{ fontSize: 20 }} />
              </IconButton>
            </Box>
          )}
        </Box>
      </DialogActions>
    </>
  );
};

export default Forms;
