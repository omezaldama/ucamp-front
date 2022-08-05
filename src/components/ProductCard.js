import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

export default function ProductCard({item}) {
    function createRow(item) {
        return {
            id: item.id,
            thumbnail: item.thumbnail,
            title: item.title,
            price: item.price,
            condition: item.condition,
            inStock: item.available_quantity > 0 ? 'In stock' : 'Not in stock'
        }
    }
    const getImageStyle = () => ({
        width: 75,
        height: 75
    });
    const row = createRow(item);

    return (
        <TableRow key={row.id}>
            <TableCell><img src={row.thumbnail} alt={row.title} style={getImageStyle()} /></TableCell>
            <TableCell>{row.title}</TableCell>
            <TableCell>{row.price}</TableCell>
            <TableCell>{row.condition}</TableCell>
            <TableCell>{row.inStock.toString()}</TableCell>
        </TableRow>
    );
}
