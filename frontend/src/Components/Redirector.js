import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Redirector = () => {
  const { shortcode } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const urls = JSON.parse(localStorage.getItem("urls") || "[]");
    const match = urls.find(u => u.shortcode === shortcode);
    if (!match) {
      alert("URL not found");
      return navigate("/");
    }
    if (Date.now() > match.expiresAt) {
      alert("This URL has expired");
      return navigate("/");
    }

    match.clicks += 1;
    localStorage.setItem("urls", JSON.stringify(urls));
    window.location.href = match.url;
  }, [shortcode, navigate]);

  return null;
};

export default Redirector;
