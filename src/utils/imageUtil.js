// import { unstable_noStore as noStore } from 'next/cache';

export function setImage(url) {
  // noStore();
  if (url.startsWith("/")) {
    //env
    return 'http://localhost:1337' + url
  }
  return url
}

export default setImage;