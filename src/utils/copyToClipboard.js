export async function copyToClipboard() {
  const password = document.querySelector('.result').textContent;
  try {
    await navigator.clipboard.writeText(password);
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}
