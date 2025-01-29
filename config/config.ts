export const animationVariants = {
    initial: {
      opacity: 0.6,
      y: 200,
    },
    animate: (idx: number) => ({
      opacity: 1,
      y: 1,
      transition: {
        duration: idx * 0.4
      }
    })
  }