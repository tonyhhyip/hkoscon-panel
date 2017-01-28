type FetchHeaders = {
  append: (name: string, value: string) => void,
  delete: (name: string) => void
}

type FetchRequest = {
  url: string,
  method: string
}

type FetchResponse = {
  ok: boolean,
  type: string,
  status: number,
  headers: Array<FetchHeaders>,
  json(): Promise<Object>,
  clone(): FetchResponse
}

declare var fetch: (url: FetchRequest | string, option?: Object) => Promise<FetchResponse>;