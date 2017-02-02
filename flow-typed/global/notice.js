//@flow

type NotificationOption = {
  dir?: string,
  lang?: string,
  badge?: string,
  body?: string,
  tag?: string,
  icon?: string,
  image?: string,
  data?: any,
  vibrate?: Array<number>,
  renotify?: boolean,
  requireInteraction?: boolean
}

declare class Notification {
  constructor(title: string, options?: NotificationOption): Notification;
  close(): void;
}

declare class NotificationEvent extends ExtendableEvent {
  action: string;
  notification: Notification;
}