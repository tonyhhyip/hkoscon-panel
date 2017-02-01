//@flow

type ClientsMatchAllOption = {
  includeUncontrolled: boolean,
  type: string
}

declare type Clients = {
  get(id: string): Promise<Client>,
  matchAll(options?: ClientsMatchAllOption): Promise<Array<Client>>
}