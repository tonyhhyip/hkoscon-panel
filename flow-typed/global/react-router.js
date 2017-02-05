//@flow

type RouterLocation = {
  hash: string,
  pathname: string,
  query: Object
}

type ContextRouter = {
  push(path: string | Object): void,
  replace(path: string | Object): void,
  go(distance: number): void,
  goBack(): void,
  goForward(): void,
  location: RouterLocation
}