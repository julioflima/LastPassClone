import BasicCard from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import { ICard } from '../../interfaces/ICard';
import { theme } from '../../styles/theme';

const Card: FC<ICard & { onClick: (card: ICard) => void }> = ({ onClick, ...rest }) => {
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
      background: theme.colors.sevenary.five,
      transform: 'scale(1.03)'
    }
  }));

  const handleClick = () => onClick(rest);

  return (
    <CardBasic onClick={handleClick}>
      <CardContent
        sx={{
          flexGrow: 1,
          display: 'flex',
          flex: 1,
          flexDirection: 'column'
        }}
      >
        <Typography
          variant="h5"
          sx={{
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 300
          }}
          gutterBottom
          color="text.secondary"
        >
          {rest.name}
        </Typography>
        <Typography fontSize={15}>{rest.username}</Typography>
        <Typography fontSize={12} color="text.secondary">
          {rest.url}
        </Typography>
      </CardContent>
    </CardBasic>
  );
};

export default Card;
