import {
  createContext
} from "react";

export function getSXbyArr(sx, i) {
  if (sx) {
    if (i > sx.length) {
      return {}
    }
    return sx[i]
  }
  else {
    return {}
  }
}

export const PageMountBlockContext = createContext({});