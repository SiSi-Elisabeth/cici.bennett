
declare const process: {
  env: {
    NODE_ENV: 'development' | 'testing' | 'production';
    [key: string]: any;
  }
}