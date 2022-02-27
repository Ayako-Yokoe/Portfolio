const size = {
    xs: '320px',
    s: '480px',
    m: '768px',
    l: '1024px',
    xl: '1200px',
    xxl: '1600px'
}
const device = {
    xs: `(min-width: ${size.xs})`,
    s: `(min-width: ${size.s})`,
    m: `(min-width: ${size.m})`,
    l: `(min-width: ${size.l})`,
    xl: `(min-width: ${size.xl})`,
    xxl: `(min-width: ${size.xxl})`
}

// break point => 480px

// const size = {
//     xs: '480px',
//     s: '768px',
//     m: '1024px',
//     l: '1200px',
//     xl: '1600px',
//     xxl: '1601px'
// }


// const device = {
//     xs: `(max-width: ${size.xs})`,
//     s: `(max-width: ${size.s})`,
//     m: `(max-width: ${size.m})`,
//     l: `(max-width: ${size.l})`,
//     xl: `(max-width: ${size.xl})`,
//     xxl: `(min-width: ${size.xxl})`,
    
// }

export default {size, device}

