/* eslint-disable array-callback-return */
/* eslint-disable import/export */
function postedAt(date) {
  const now = new Date();
  const posted = new Date(date);
  const diff = now - posted;
  const diffInDays = Math.floor(diff / (1000 * 60 * 60 * 24));
  const diffInHours = Math.floor(diff / (1000 * 60 * 60));
  const diffInMinutes = Math.floor(diff / (1000 * 60));
  const diffInSeconds = Math.floor(diff / (1000));

  if (diffInDays > 0) {
    return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
  } if (diffInHours > 0) {
    return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
  } if (diffInMinutes > 0) {
    return `${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''} ago`;
  } if (diffInSeconds > 0) {
    return `${diffInSeconds} second${diffInSeconds > 1 ? 's' : ''} ago`;
  }
  return 'Just now';
}

function allCategoryThreads(threads) {
  const categories = new Set();

  threads.map((thread) => {
    categories.add(thread.category);
  });

  return [...categories];
}

export { postedAt, allCategoryThreads };
