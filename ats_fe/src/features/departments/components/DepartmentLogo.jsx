import { useEffect, useState } from "react";

const DEFAULT_LOGO =
  "https://placehold.co/50x50/eef2ff/4f46e5?text=Logo";

// Custom Promise: kiểm tra ảnh load được hay không bằng Image()
const checkImageLoadable = (url) =>
  new Promise((resolve, reject) => {
    if (!url) {
      reject(new Error("Empty url"));
      return;
    }
    const img = new Image();
    img.onload = () => resolve(url);
    img.onerror = () => reject(new Error("Failed to load image"));
    img.src = url;
  });

const DepartmentLogo = ({ url, alt = "logo" }) => {
  const [src, setSrc] = useState(null);

  useEffect(() => {
    let cancelled = false;

    checkImageLoadable(url)
      .then((validUrl) => {
        if (!cancelled) setSrc(validUrl);
      })
      .catch(() => {
        if (!cancelled) setSrc(DEFAULT_LOGO);
      });

    // Cleanup: tránh setState khi component đã unmount
    return () => {
      cancelled = true;
    };
  }, [url]);

  if (!src) {
    return <span className="text-muted small">Loading...</span>;
  }

  return (
    <img
      src={src}
      alt={alt}
      className="rounded"
      style={{ width: 50, height: 50, objectFit: "cover" }}
    />
  );
};

export default DepartmentLogo;
