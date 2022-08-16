import DeleteIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import { Box, CardContent, IconButton } from '@mui/material';
import BasicCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import { ICard } from '../../interfaces/ICard';
import { theme } from '../../styles/theme';

interface ICardProps {
  onOpen?: (card: ICard) => void;
  onEdit?: (card: ICard) => void;
  onDelete?: (card: ICard) => void;
}

const Card: FC<ICard & ICardProps> = ({ onOpen, onEdit, onDelete, ...rest }) => {
  const CardBasic = styled(BasicCard)(() => ({
    minWidth: 200,
    height: 200,
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    fontWeight: 300,
    cursor: 'pointer',
    transition: 'all 0.2 ease-in-out !important',
    transitionProperty: 'all',
    '&:hover': {
      background: theme.colors.quaternary.six,
      transform: 'scale(1.03)'
    }
  }));

  const Title = styled(Typography)(() => ({
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 300,
    '&:active': {
      background: theme.colors.sevenary.five
    }
  }));

  const handleOpen = () => onOpen && onOpen(rest);
  const handleEdit = () => onEdit && onEdit(rest);
  const handleDelete = () => onDelete && onDelete(rest);

  return (
    <CardBasic>
      <CardContent
        sx={{
          flexGrow: 1,
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          padding: 0,
          paddingBottom: 0
        }}
      >
        <Title variant="h5" onClick={handleOpen} gutterBottom color="text.secondary">
          {rest.name}
        </Title>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItens: 'center',
            m: 2,
            mb: 0,
            mt: 0
          }}
        >
          <Box>
            <Typography fontSize={15}>{rest.username}</Typography>
            <Typography fontSize={12} color="text.secondary">
              {rest.url}
            </Typography>
          </Box>
          <Box>
            <IconButton aria-label="edit" onClick={handleEdit}>
              <EditIcon sx={{ fontSize: 20 }} />
            </IconButton>
            <IconButton aria-label="close" onClick={handleDelete}>
              <DeleteIcon sx={{ fontSize: 20 }} />
            </IconButton>
          </Box>
        </Box>
      </CardContent>
    </CardBasic>
  );
};

export default Card;
