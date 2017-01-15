declare module 'dotenv' {
  declare type Option = {
    path: string
  };
  declare function load(option: Option): void;
  declare function config(option: Option): void;
}