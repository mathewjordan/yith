export const getSequence = (sequences, instance) => {
  const filtered = sequences.filter((yith) => {
    if (yith.id === instance) return yith.items;
  });
  return filtered[0].items;
};
