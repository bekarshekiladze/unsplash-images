import { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";

function ImageComponent({ item }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const { alt_description, urls, blur_hash } = item;

  const isBlurHashValid =
    typeof blur_hash === "string" && blur_hash.length >= 6;

  const imageUrl = urls.small; //regular, full, thumb, small

  useEffect(() => {
    setImageLoaded(false);

    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageLoaded(true);
    img.src = imageUrl;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [imageUrl]);

  return (
    <>
      {!imageLoaded &&
        (isBlurHashValid ? (
          <Blurhash
            hash={blur_hash}
            width="100%"
            height="100%"
            resolutionX={32}
            resolutionY={32}
            punch={1}
          />
        ) : (
          <div style={{ width: "100%", height: "100%" }} />
        ))}
      {imageLoaded && (
        <img src={imageUrl} alt={alt_description} className="img" />
      )}
    </>
  );
}
export default ImageComponent;
