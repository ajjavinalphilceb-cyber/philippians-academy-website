function getVariantForWidth(image, targetWidth) {
  if (!image?.variants?.length) {
    return image?.src;
  }

  return (
    image.variants.find((variant) => variant.width >= targetWidth) ||
    image.variants[image.variants.length - 1]
  ).src;
}

export { getVariantForWidth };
