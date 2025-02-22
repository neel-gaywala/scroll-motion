export default () => {
  const elements = document.querySelectorAll("[data-aos]");
  return Array.prototype.map.call(elements, (node) => ({
    node,
    animation: null,
  }));
};
