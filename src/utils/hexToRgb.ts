const hexToRgb = (hex:string) => {
  const bigint = parseInt(hex.slice(1), 16); // 1
  const r = (bigint >> 16) & 255;            // 2
  const g = (bigint >> 8) & 255;             // 3
  const b = bigint & 255;                    // 4
  return `${r}, ${g}, ${b}`;                 // 5
};

export default hexToRgb;