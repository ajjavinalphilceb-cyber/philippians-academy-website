import { useState } from 'react';

function OptimizedImage({
  image,
  alt,
  sizes = '100vw',
  loading = 'lazy',
  fetchPriority,
  decoding = 'async',
  className,
  style,
  width,
  height,
  onLoad,
  ...props
}) {
  const priority = loading === 'eager' || fetchPriority === 'high';
  const [loaded, setLoaded] = useState(priority);

  if (!image) {
    return null;
  }

  const handleLoad = (event) => {
    setLoaded(true);
    onLoad?.(event);
  };

  return (
    <picture style={{ display: 'contents' }}>
      <source type="image/webp" srcSet={image.srcSet} sizes={sizes} />
      <img
        src={image.src}
        width={width || image.width}
        height={height || image.height}
        alt={alt}
        className={className}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding={decoding}
        onLoad={handleLoad}
        data-loaded={loaded ? 'true' : 'false'}
        style={{
          backgroundColor: '#eef2f7',
          backgroundImage: loaded
            ? 'none'
            : 'linear-gradient(90deg, #eef2f7 0%, #f7f9fc 48%, #eef2f7 100%)',
          backgroundSize: '200% 100%',
          opacity: loaded ? 1 : 0.72,
          transition: priority ? undefined : 'opacity 260ms ease, filter 260ms ease',
          ...style,
        }}
        {...props}
      />
    </picture>
  );
}

export default OptimizedImage;
