import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { alpha, styled } from '@mui/material/styles';
import { FC, memo } from 'react';

interface ISearchProps {
  onSearch: (search: string) => void;
  value: string;
}

const Search: FC<ISearchProps> = ({ onSearch, value }) => {
  const SearchContainer = styled('div')(({ theme: themeMui }) => ({
    position: 'relative',
    borderRadius: themeMui.shape.borderRadius,
    backgroundColor: alpha(themeMui.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(themeMui.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: 'auto',
    [themeMui.breakpoints.up('sm')]: {
      marginLeft: themeMui.spacing(1),
      width: 'auto'
    }
  }));

  const SearchIconWrapper = styled('div')(({ theme: themeMui }) => ({
    padding: themeMui.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }));

  const StyledInputBase = styled(InputBase)(({ theme: themeMui }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: themeMui.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${themeMui.spacing(4)})`,
      transition: themeMui.transitions.create('width'),
      [themeMui.breakpoints.up('sm')]: {
        width: '20ch'
      }
    }
  }));

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => onSearch(event.target.value);

  return (
    <SearchContainer>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search my vault"
        inputProps={{ 'aria-label': 'search' }}
        onChange={handleSearch}
        value={value}
        autoFocus
      />
    </SearchContainer>
  );
};

export default memo(Search);
