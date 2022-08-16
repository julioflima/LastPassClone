import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import { ICard } from '../../interfaces/ICard';
import CardsService from '../../services/CardsService';
import { theme } from '../../styles/theme';

const FormDelete: FC<ICard & { onClick: () => void }> = ({ id, name, username, onClick }) => {
  const ButtonStyled = styled(Button)(({ theme: themeMui }) => ({
    background: theme.colors.primary.one,
    '&:hover': {
      background: theme.colors.primary.three
    }
  }));

  const onDelete = async () => {
    try {
      if (id) await new CardsService().delete(id);
      onClick();
    } catch (err) {
      console.error(err);
      onClick();
    }
  };

  return (
    <>
      <Typography
        sx={{
          fontWeight: 300
        }}
        gutterBottom
        color="text.secondary"
      >
        <span>
          You really want to delete this card? This action cannot be undone. You gonna lose the
          password from
        </span>
        <strong> {name} </strong>
        <span>, related with user </span>
        <strong>{username}.</strong>
      </Typography>
      <DialogActions sx={{ mt: 4 }}>
        <ButtonStyled
          autoFocus
          variant="contained"
          sx={{ background: theme.colors.primary.one }}
          onClick={onDelete}
        >
          delete it!
        </ButtonStyled>
      </DialogActions>
    </>
  );
};

export default FormDelete;
