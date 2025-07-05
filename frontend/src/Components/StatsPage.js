import { Box, Typography, Table, TableRow, TableHead, TableCell, TableBody } from '@mui/material';

const StatsPage = () => {
  const urls = JSON.parse(localStorage.getItem("urls") || "[]");

  return (
    <Box p={3}>
      <Typography variant="h5">Shortened URL Stats</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Shortcode</TableCell>
            <TableCell>Original URL</TableCell>
            <TableCell>Clicks</TableCell>
            <TableCell>Expires At</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {urls.map((url, i) => (
            <TableRow key={i}>
              <TableCell>{url.shortcode}</TableCell>
              <TableCell>{url.url}</TableCell>
              <TableCell>{url.clicks}</TableCell>
              <TableCell>{new Date(url.expiresAt).toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default StatsPage;
