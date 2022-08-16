import CloseIcon from '@mui/icons-material/Close';
import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import { FC, ReactNode } from 'react';
import { theme } from '../../styles/theme';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2)
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1)
  }
}));

export interface IBootstrapDialogTitleProps {
  id: string;
  children?: ReactNode;
  onClose: () => void;
}

const BootstrapDialogTitle = ({ children, onClose, ...other }: IBootstrapDialogTitleProps) => (
  <DialogTitle
    sx={{
      m: 0,
      p: 2,
      height: 54,
      background: theme.colors.primary.one,
      color: theme.colors.sevenary.one
    }}
    {...other}
  >
    <Typography variant="h6" color="white" component="div" sx={{ fontSize: 16, fontWeight: 400 }}>
      {children}
    </Typography>
    <Box sx={{ position: 'absolute', top: 16, right: 8, width: '100%' }}>
      <Box display="flex" justifyContent="center">
        <Typography variant="h6" color="white" component="div">
          LastPass
        </Typography>
        <Image src="/favicon.png" alt="LastPass Clone" width={35} height={35} />
        <Typography variant="h6" color="white" component="div">
          Clone
        </Typography>
      </Box>
    </Box>
    {onClose && (
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: theme.colors.sevenary.one
        }}
      >
        <CloseIcon />
      </IconButton>
    )}
  </DialogTitle>
);

export interface IModalProps {
  open?: boolean;
  title: string;
  titleAction?: string;
  children: ReactNode;
  onClose: () => void;
  onAction?: () => void;
}
const Modal: FC<IModalProps> = ({
  open = true,
  title,
  children,
  titleAction = 'save',
  onAction,
  onClose
}) => {
  const ButtonStyled = styled(Button)(({ theme: themeMui }) => ({
    background: theme.colors.primary.one,
    '&:hover': {
      background: theme.colors.primary.three
    }
  }));

  return (
    <BootstrapDialog onClose={onClose} aria-labelledby="customized-dialog-title" open={open}>
      <BootstrapDialogTitle id="customized-dialog-title" onClose={onClose}>
        {title}
      </BootstrapDialogTitle>
      <DialogContent dividers sx={{ minWidth: 600 }}>
        {children}
      </DialogContent>
    </BootstrapDialog>
  );
};

export default Modal;
