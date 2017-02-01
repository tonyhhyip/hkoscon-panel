//@flow

declare type CacheStorage = {
  open(name: string): Promise<Cache>,
  keys(): Promise<Array<string>>,
  delete(name: string): Promise<boolean>
}

declare class Cache {
  addAll(requests: Array<Request | string>): Promise<void>,
  put(name: any, value: any): Promise<void>,
  match(request: FetchRequest | string, option?: {ignoreSearch: boolean, ignoreMethod: boolean, ignoreVary: boolean, cacheName: string}): Promise<FetchResponse>,
}

declare var caches: CacheStorage;