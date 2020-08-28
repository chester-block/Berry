let patch: string;

export function getPatch() {
  if (typeof patch === `undefined`)
    patch = require(`zlib`).brotliDecompressSync(Buffer.from(`G8AcICwLeENqnk8o74LOyiZCqCn+nfkoHoOW2Wy/ZaLbawoJug0vEah6g6y0zM2VGKAGUXjpuyyX/35emYdTZ6IKvYYekxabWJ1MJUiPj18N39noRCXSRrg4d2/37WX2X0qjlXq3R++KiYujNAsyg/RYlEBIhMIYluF015kiMUIInfP/zLRSUC4vdAA5Hz54RWXtId4PIrS/APSpqXY7WSjFrGFx1NpG7a1wkmKkqQ3t1AEgHU4ayRIZccu55KrViKVdWamBsYZElYvL+xzjdHr7IAf3XDhHh294rE87BITNRj4i4r7zsis3y1dyzswVF4ICvCQhRQ44dvdWLhSmQW3++3Oy8IrUcOu0vcNk1UWyjgI/icHvNAC6WXkq6MXNs3+eOK1pkhb7wwvev2j5JPssZR293ExF+QYuwPyu/EKKFKCQkbYH1NZ9GlJ+DieCJ+8PFYF8renTSEr6GSJZTtzYrUIgN44cG5WnWJphIHh8mD5A6UGvfPC8RxSgpYPus/yoHw+idviDBeCWy+hxN5v2A2dDSuiz+tpLphJ01JO3IduKMVtNfr1qq/BLCqkP59S+vFP/Cof0sWbqkffhPFcl4SLIxWq1qFcKYDKzclwBBzVFiPWC7LlvMk9m8xGjaQ2R2P+BZR3anFJoyXATv0PvZnP/tioMsJJFC7f5gI9Fmy4U/LRUVo3N/OxY2a6kykxjwVvchhI5t5BdDPjYONcUTtkrzMtXFhSASbtzx7uIxYfhvs4/3mW6hKqwLBaipralUhPdfo5h4SiOic7o+oOUwl5/Aff6cyh3wEeDB4tVA79bq29MEeRfTV+Oe3fr/UhZQtkY0iE8vqSle2b58SXY0mkGmBiRjoPIkAFs1OSlJ3nSz9raEeB1ZWvJ2xiclGu1xTT6NRw3NaHU0k4R+4t0SIlltXJAW4kHj92+lB7TLjIWZfWfBNncDSYqP8jmg+jV7VyIgy/uk09ipbLdLM6Xr76rabkrZyQ3Qk8S71SEqlWRxEjWsKaELHnDeAxqaYrL0ITQr2S9xbXg0rnId4wtsQgZw21lye/up1/dTfXT+MkD5AP0i4YCh99d1V3sdxTAEDlI0nFBTjPoJwJnctqtFkgcP+Xakk36SgMSHuOZh/KUlex2NIizXmbBwicMK9s1LK6dQOqBuFZlX9lanWTwnVGuVvr3olrdhlClWC3T7S9NdfVsaYZKBDfYEZnTL7pZcKnE60KSutBZSaSgM+0BQbg1+qJHaVwb0X2Dhv70O7k7ALDJiNiA7GdsX1Ygf4ktBZv66did31wGeUm5JBJLemdjZHRa2YATgMFlye4t0hcz9ha4eXoVOc2EXHVqDdjeItztOwm7tBzcHR8Mwwb/HqtC/VKZC0IiH8TE/FE7x9SHWGUnTUNEBlucGudFTKYYlQaIjoANOgXsGLVtemCeplca3Wv1CMijvkZXTiUd8KmEZ2z6frw/kpo7gG/nDo2VkG6e+veL+scVhKDSObOXKcdtw+/Wbbw269oDLe5BLyqsR9VTc631RKspQYcCMx9M2xRKn7uZog504EXqMOPmUCHwW0yqiHxxoN+sMqYhjo/A8r4KAJ9TX7siey+38u6rhHYtDIMBKBk/lewEzgzDqFxxnqmvRK+XjeObr1axojyQobCerDLaHtzU1fwLHasuURSspKMhvR6QpWketRn2MJqMRLU0DQC0YCVLT+qeCS1LaZKQsQ0ZS1I1rKPmRjp7QQ2YDzdwpIHdTmPuBEIyIgXXiUQ/w6ZcFj4AA2ozg5zYaI5+3zGniD4ABtHXjuwGdRlRW6dngE5mECYu/0QnYwo5I6Z3KfM7BmZ/l4//i25lwXry79v/jxsAaMAc`, `base64`)).toString();

  return patch;
}
