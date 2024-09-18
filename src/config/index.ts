import defaultConfig from './config.default';
import devConfig from './config.development';
import proConfig from './config.production';
import testConfig from './config.testing';
import error from './error';

type Config  = typeof defaultConfig &
typeof testConfig &
typeof proConfig &
typeof defaultConfig

const config = { ...defaultConfig } as Config;

switch(process.env.NODE_ENV) {
  case 'testing':
    Object.assign(config, { ...testConfig })
  case 'production':
    Object.assign(config, { ... proConfig })
  case 'development':
    Object.assign(config, { ...devConfig })
}

export {
  config, error
};

