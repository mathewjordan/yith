export const getSequence = (sequences: any, instance: string) => {
  const filtered = sequences.filter((yith: any) => {
    if (yith.id === instance) return yith.items;
  });
  if (!filtered[0]) return;
  return filtered[0].items;
};
