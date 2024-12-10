let counters = {};

export const getId = (prefix = "key") => {
  if (!counters[prefix]) {
    counters[prefix] = 0;
  }
  counters[prefix] += 1;
  return `${prefix}_${counters[prefix]}`;
};