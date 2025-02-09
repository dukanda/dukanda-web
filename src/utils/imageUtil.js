// import { unstable_noStore as noStore } from 'next/cache';

export function setImage(url) {
  if (url.startsWith("/")) {
    return process.env.NEXT_PUBLIC_IMAGE_BASE_URL + url
  }
  return url
}

export default setImage;