import AddIcon from '@mui/icons-material/Add';
import { Box, Typography } from '@mui/material';
import BasicCard from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';
import { FC } from 'react';
import { theme } from '../../styles/theme';

const AddCard: FC<{ onClick: () => void }> = ({ onClick }) => {
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

  return (
    <CardBasic onClick={onClick}>
      <CardContent
        sx={{
          flexGrow: 1,
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 300
          }}
        >
          <AddIcon
            sx={{
              color: theme.colors.primary.one,
              fontSize: 24
            }}
          />
          <Typography
            variant="h6"
            sx={{
              fontSize: 18,
              fontWeight: 300,
              mt: 1
            }}
            gutterBottom
            color="text.secondary"
          >
            Add password
          </Typography>
        </Box>
      </CardContent>
    </CardBasic>
  );
};

export default AddCard;
