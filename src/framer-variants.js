export const fadeIn = {
  show: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  hide: {
    opacity: 0,
  },
};
export const slideIn = {
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
  hide: {
    y: "-20%",
    opacity: 0,
  },
};
export const doNothing = {
  show: {
    opacity: 1,
  },
  hide: {
    opacity: 1,
  },
};
export const viewPortOptions = {
  once: true,
  amount: 0.2,
};
