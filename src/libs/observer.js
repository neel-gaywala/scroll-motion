let callback = () => {};

function containsAOSNode(nodes) {
  for (const node of nodes) {
    if (
      node.dataset?.aos ||
      (node.children && containsAOSNode(node.children))
    ) {
      return true;
    }
  }
  return false;
}

function check(mutations) {
  if (!mutations) return;

  for (const mutation of mutations) {
    const allNodes = [...mutation.addedNodes, ...mutation.removedNodes];
    if (containsAOSNode(allNodes)) {
      callback();
      break;
    }
  }
}

function getMutationObserver() {
  return (
    window.MutationObserver ||
    window.WebKitMutationObserver ||
    window.MozMutationObserver
  );
}

function isSupported() {
  return Boolean(getMutationObserver());
}

function ready(selector, fn) {
  const doc = window.document;
  const MutationObserver = getMutationObserver();

  if (!MutationObserver) return;

  const observer = new MutationObserver(check);
  callback = fn;

  observer.observe(doc.documentElement, {
    childList: true,
    subtree: true,
  });
}

export default { isSupported, ready };
