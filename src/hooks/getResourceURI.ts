export const getResourceURI = (annotation: any, size: number) => {
  if (!annotation.body[0].service || annotation.body[0]?.service[0]?.profile == "level0") {
    const resource = annotation.body[0].id
    return {
      img: resource,
      lqip: undefined
    }
  }

  const resource = annotation.body[0].service[0].id;
  return {
    img: `${resource}/full/${size},/0/default.jpg`,
    lqip: `${resource}/full/20,/0/default.jpg`
  }
};
