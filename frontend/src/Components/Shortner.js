import { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import { generateShortCode, isValidShortcode, isValidURL } from '../utils/URLutils';
import logger from '../utils/logger';

const Shortner = () => {
  const [formData, setFormData] = useState({ url: '', validity: '', shortcode: '' });
  const [error, setError] = useState('');
  const [urls, setUrls] = useState(JSON.parse(localStorage.getItem('urls') || '[]'));
  const [shortenedUrl, setShortenedUrl] = useState('');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    const { url, validity, shortcode } = formData;
    if (!isValidURL(url)) return setError("Invalid URL");

    let code = shortcode.trim() || generateShortCode();
    if (shortcode && !isValidShortcode(code)) return setError("Shortcode must be alphanumeric and 4-10 characters");

    const alreadyExists = urls.find(u => u.shortcode === code);
    if (alreadyExists) return setError("Shortcode already exists");

    const expiresAt = Date.now() + ((validity || 30) * 60 * 1000);
    const newEntry = { url, shortcode: code, createdAt: Date.now(), expiresAt, clicks: 0 };

    const newUrls = [newEntry, ...urls];
    localStorage.setItem("urls", JSON.stringify(newUrls));
    setUrls(newUrls);
    logger("SHORTEN_URL", newEntry);
    setError('');
    setShortenedUrl(`${window.location.origin}/${code}`);
  };

  return (
    <Box p={2}>
      <Typography variant="h4" gutterBottom>URL Shortener</Typography>
      <TextField name="url" label="Enter URL" fullWidth onChange={handleChange} margin="normal" />
      <TextField name="validity" label="Validity (mins)" type="number" fullWidth onChange={handleChange} margin="normal" />
      <TextField name="shortcode" label="Custom Shortcode (optional)" fullWidth onChange={handleChange} margin="normal" />
      <Button variant="contained" onClick={handleSubmit} sx={{ mt: 2 }}>Shorten</Button>

      {error && <Typography color="error" mt={2}>{error}</Typography>}

      {shortenedUrl && (
        <Typography color="primary" mt={3}>
          Shortened URL: <a href={shortenedUrl} target="_blank" rel="noopener noreferrer">{shortenedUrl}</a>
        </Typography>
      )}

      {urls.length > 0 && (
        <Box mt={4}>
          <Typography variant="h6">Previously Shortened URLs:</Typography>
          {urls.map((u, i) => (
            <Box key={i} mt={1}>
              <a href={`/${u.shortcode}`} target="_blank" rel="noopener noreferrer">
                {window.location.origin}/{u.shortcode}
              </a> → {u.url}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Shortner;
