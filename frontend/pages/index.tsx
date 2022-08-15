import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import type { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import { ICard } from '../interfaces/ICard';
import CardsService from '../services/CardsService';
import { theme } from '../styles/theme';

export interface IHomeProps {
  cards: ICard[];
}

const Home: NextPage<IHomeProps> = ({ cards }) => {
  const StyledToolbar = styled(Toolbar)(() => ({
    backgroundColor: theme.colors.primary.one
  }));

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <StyledToolbar variant="dense">
            <Typography variant="h6" color="inherit" component="div">
              LastPass
            </Typography>
            <Image src="/favicon.png" alt="LastPass Clone" width={35} height={35} />
            <Typography variant="h6" color="inherit" component="div">
              Clone
            </Typography>
          </StyledToolbar>
        </AppBar>
      </Box>
      <Box sx={{ flexGrow: 1, mx: 2, my: 2 }}>
        <Typography variant="h6" color="inherit" component="div">
          Passwords
        </Typography>
        <Box sx={{ flexGrow: 1, flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {cards.map((card) => (
            <Box key={card.id} sx={{ flexGrow: 1, mx: 2, my: 2 }}>
              <Typography variant="body1" color="inherit" component="div">
                {card.username}
              </Typography>
              <Typography variant="body1" color="inherit" component="div">
                {card.password}
              </Typography>
              <Typography variant="body1" color="inherit" component="div">
                {card.url}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      cards: new CardsService().get()
    },
    revalidate: 1
  };
};

export default Home;
