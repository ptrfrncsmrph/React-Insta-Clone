export const toRegExp = (str: string): RegExp =>
  new RegExp(str.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), "gi")

export const uidFromUrl = (url: string): string =>
  url.split(/\//g)[3].split(".")[0]
