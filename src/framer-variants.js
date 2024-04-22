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
export const fadeDown = {
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
export const fadeUp = {
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
  hide: {
    y: "50%",
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
export const popIn = {
  show: {
    scale: 1,
    transition: {
      type: "spring",
      mass: .4,
      stiffness: 200,
    },
  },
  hide: {
    scale: 0,
  },
};

export const viewPortOptions = {
  once: true,
  amount: 0.2,
};
