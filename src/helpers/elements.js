export default () => {
  return Array.from(document.querySelectorAll("[data-aos]"), (node) => ({
    node,
    animation: null,
  }));
};
