import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar({isLoading, setQuery}) {
    const handleQueryChange = () => {
        setQuery(document.getElementById('query-input').value);
    }

    return (
        <>
            <TextField label="Search" variant="outlined" size="small" id="query-input" />
            <Button
                variant="outlined"
                size="medium"
                startIcon={<SearchIcon />}
                onClick={handleQueryChange}
                disabled={isLoading}
            >Search</Button>
        </>
    );
}
