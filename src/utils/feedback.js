export const showToast = (message) => {
  window.dispatchEvent(
    new CustomEvent("fakebook:toast", {
      detail: { message },
    })
  );
};

export const runOnKeyboardAction = (event, callback) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    callback();
  }
};

export const copyText = async (text, successMessage = "Copied") => {
  try {
    await navigator.clipboard.writeText(text);
    showToast(successMessage);
  } catch {
    showToast(text);
  }
};
