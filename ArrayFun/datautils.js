export const nullish = (val) => val == undefined;

export const rowhash = (row, keys) => {
  const entry = {};
  row.forEach((v, i) => (entry[keys[i]] = v));
  return entry;
};

export const deepstring = (arr) =>
  arr.map((e) => {
    const str = JSON.stringify(e);
    const mod = str && str.replace(/^"?(.*?)"?$/, '$1');
    return mod ? mod.replace(/,/g, '\\,') : str;
  });
