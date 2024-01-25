const copyTextToClipBoard = async ({ text = "" } = {}) => {
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    console.error(err);
  }
};

export { copyTextToClipBoard };
