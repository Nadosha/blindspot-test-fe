export const getShadowColor = (selected, correct) => {
  if (correct & selected) return "rgba(2,253,132,0.6)";
  if (selected) return "rgba(255,213,4,0.5)";
  if (correct) return "rgba(4,129,255,0.5)";

  return "rgba(33, 37, 41, 0.06)";
};
