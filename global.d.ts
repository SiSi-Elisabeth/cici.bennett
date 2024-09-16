
// declare const process: {
//   env: {
//     NODE_ENV: 'development' | 'testing' | 'production';
//     [key: string]: any;
//   }
// }

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'testing' | 'production';
    CUSTOM_VAR?: string;  // 你可以添加自定义的环境变量
  }
}
