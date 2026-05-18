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
  ...props
}) {
  if (!image) {
    return null;
  }

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
        style={{ backgroundColor: '#eef2f7', ...style }}
        {...props}
      />
    </picture>
  );
}

export default OptimizedImage;
