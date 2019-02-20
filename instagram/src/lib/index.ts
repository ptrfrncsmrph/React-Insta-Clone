export const toRegExp = (str: string): RegExp =>
  new RegExp(str.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), "gi")

export const uidFromUrl = (url: string): string =>
  url.split(/\//g)[3].split(".")[0]

export const append = <A>(x: A) => (xs: Array<A>) => xs.concat(x)
