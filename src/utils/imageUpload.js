export const IMAGE_INPUT_ACCEPT = "image/*,.heic,.heif,.HEIC,.HEIF";

const MAX_IMAGE_SIZE_MB = 20;
const MAX_IMAGE_SIZE_BYTES = MAX_IMAGE_SIZE_MB * 1024 * 1024;

const isImageFile = (file) => {
  if (!file) return false;
  return file.type.startsWith("image/") || /\.(heic|heif|jpg|jpeg|png|gif|webp|bmp|svg)$/i.test(file.name);
};

const isHeicFile = (file) => {
  if (!file) return false;
  return file.type === "image/heic" || file.type === "image/heif" || /\.(heic|heif)$/i.test(file.name);
};

const readAsDataUrl = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error("Unable to read the selected image."));
    reader.readAsDataURL(file);
  });

export const getImagePreviewFromFile = async (file) => {
  if (!file) {
    return { success: false, error: "Please select an image first." };
  }

  if (!isImageFile(file)) {
    return {
      success: false,
      error: "Only image files are allowed. Please choose JPG, PNG, WEBP, GIF, HEIC or HEIF.",
    };
  }

  if (file.size > MAX_IMAGE_SIZE_BYTES) {
    return {
      success: false,
      error: `Please choose an image smaller than ${MAX_IMAGE_SIZE_MB}MB.`,
    };
  }

  try {
    const preview = await readAsDataUrl(file);

    return {
      success: true,
      preview,
      warning: isHeicFile(file)
        ? "HEIC/HEIF selected. Preview depends on browser support. If preview does not load, convert it to JPG or PNG and upload again."
        : "",
    };
  } catch (error) {
    return {
      success: false,
      error: error.message || "Unable to load the selected image.",
    };
  }
};
