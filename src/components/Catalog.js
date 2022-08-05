import ProductCard from './ProductCard';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

export default function Catalog({isLoading, items, condition, setCondition, priceOrder, setPriceOrder, page, setPage, pages, setPages}) {
    const handleConditionChange = event => {
        setCondition(event.target.value);
    }
    const handleOrderPriceChange = event => {
        setPriceOrder(event.target.value);
    }

    const handlePageChange = newPage => {
        setPage(newPage+1);
    }

    return (
        <>
            <h2>Catalog:</h2>
            <div>
                {
                    isLoading
                        ? <HourglassBottomIcon />
                        : <div>
                            <TableContainer>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Image</TableCell>
                                            <TableCell>Product</TableCell>
                                            <TableCell>
                                                Price &nbsp;
                                                <Select
                                                    onChange={handleOrderPriceChange}
                                                    size="small"
                                                    label="Price"
                                                    value={priceOrder}
                                                >
                                                    <MenuItem value="0">No order</MenuItem>
                                                    <MenuItem value="1">Descending</MenuItem>
                                                    <MenuItem value="-1">Ascending</MenuItem>
                                                </Select>
                                            </TableCell>
                                            <TableCell>
                                                Condition &nbsp;
                                                <Select
                                                    onChange={handleConditionChange}
                                                    size="small"
                                                    label="Condition"
                                                    value={condition}
                                                >
                                                    <MenuItem value="new">New</MenuItem>
                                                    <MenuItem value="used">Used</MenuItem>
                                                </Select>
                                            </TableCell>
                                            <TableCell>In Stock</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {items.map( item => <ProductCard key={item.id} item={item} /> )}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            Page: &nbsp;
                            {
                                pages.map(
                                    (pageNumber, index) =>
                                        <Button
                                            key={pageNumber}
                                            variant={index === ( page - 1) ? "contained": "outlined"}
                                            onClick={() => handlePageChange(index)}
                                        >
                                            {pageNumber+1}
                                        </Button>
                                )
                            }
                        </div>
                }
            </div>
            <div>
            </div>
        </>
    );
}
