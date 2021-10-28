export const getResourceURI = (annotation: any) => {
  return annotation.body[0].service[0].id;
};
