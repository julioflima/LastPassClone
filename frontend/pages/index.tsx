import { Grid } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import type { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import { useCallback, useState } from 'react';
import AddCard from '../components/AddCard';
import Card from '../components/Card';
import Modal from '../components/Modal';
import Search from '../components/Search';
import { ICard } from '../interfaces/ICard';
import CardsService from '../services/CardsService';
import { theme } from '../styles/theme';

export interface IHomeProps {
  cards: ICard[];
}

const Home: NextPage<IHomeProps> = ({ cards: cardsDefault }) => {
  const [cards, setCards] = useState<ICard[]>(cardsDefault);
  const [selectedCard, setSelectedCards] = useState<ICard>({} as ICard);
  const [search, setSearch] = useState('');
  const [titleModal, setTitleModal] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [openContext, setOpenContext] = useState({
    isOpen: false,
    isNew: false,
    isDelete: true,
    isEdit: false
  });

  const StyledToolbar = styled(Toolbar)(({ theme: themeMui }) => ({
    backgroundColor: theme.colors.primary.one,
    display: 'flex',
    justifyContent: 'space-between',
    [themeMui.breakpoints.up('sm')]: {
      paddingLeft: '1rem',
      paddingRight: '1rem'
    }
  }));

  const onSearch = useCallback((search: string) => {
    setCards(cardsDefault.filter((card) => card.name.toLowerCase().includes(search.toLowerCase())));
    setSearch(search);
  }, []);

  const onNew = () => {
    setTitleModal('Add password');
    setOpenModal(true);
  };

  const onOpen = (card: ICard) => {
    setSelectedCards(card);
    setTitleModal('View password');
    setOpenModal(true);
  };

  const onEdit = (card: ICard) => {
    setSelectedCards(card);
    setTitleModal('Editar carta');
    setOpenModal(true);
  };

  const onDelete = (card: ICard) => {
    setSelectedCards(card);
    setTitleModal('Delete password');
    setOpenModal(true);
  };

  const onCloseModal = () => setOpenModal(false);

  return (
    <>
      <Box sx={{ flexGrow: 1, background: theme.colors.sevenary.four }}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <StyledToolbar variant="dense">
              <Box display="flex" flexDirection="row">
                <Typography variant="h6" color="inherit" component="div">
                  LastPass
                </Typography>
                <Image src="/favicon.png" alt="LastPass Clone" width={35} height={35} />
                <Typography variant="h6" color="inherit" component="div">
                  Clone
                </Typography>
              </Box>
              <Search onSearch={onSearch} value={search} />
            </StyledToolbar>
          </AppBar>
        </Box>
        <Box sx={{ flexGrow: 1, mx: 2, my: 2 }}>
          <Typography variant="h6" color="black" component="div">
            Passwords
          </Typography>
          <Grid
            sx={{ mt: 0 }}
            container
            spacing={2}
            columns={{ xs: 2, sm: 6, md: 16, lg: 20, xl: 32 }}
          >
            <Grid item xs={4} sm={2} md={4}>
              <AddCard onClick={onNew} />
            </Grid>
            {cards.map((card) => (
              <Grid key={card.id} item xs={4} sm={2} md={4}>
                <Card {...card} onOpen={onOpen} onEdit={onEdit} onDelete={onDelete} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      <Modal open={openModal} onClose={onCloseModal} title="Title">
        <Typography variant="h6" color="black" component="div">
          {search}
        </Typography>
      </Modal>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      cards: await new CardsService().get()
    },
    revalidate: 1
  };
};

export default Home;
