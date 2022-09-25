const size = {
  xs: "320px",
  s: "480px",
  m: "768px",
  l: "1024px",
  xl: "1200px",
  xxl: "1920px",
}
const device = {
  xs: `(min-width: ${size.xs})`,
  s: `(min-width: ${size.s})`,
  m: `(min-width: ${size.m})`,
  l: `(min-width: ${size.l})`,
  xl: `(min-width: ${size.xl})`,
  xxl: `(min-width: ${size.xxl})`,
}

const responsive = { size, device }
export default responsive
