const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({

  name: 'external-mfe',

  exposes: {
    './Component': '././src/app/app.component.ts',
  },
  remotes: {
    'shell': 'http://localhost:4200/remoteEntry.json',
  },
  // externals: {
  //   'shell/FooService': 'shell_service_external',
  // },
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
    /**This library is inside an external monorepo 
     * NOT WORKING
    */

    '@nx-ws/foo-library': { singleton: true, strictVersion: true },
  },
  // additionalShared: [
  //   {
  //     packageName: 'shell/FooService',
  //     requiredVersion: 'auto',
  //     shareKey: 'shell/FooService',
  //     shareScope: 'default',
  //     singleton: true,
  //     strictVersion: false,
  //     includeSecondaries: false,
  //     eager: false,
  //   }
  // ],

  skip: [
    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket',
    // Add further packages you don't need at runtime
  ]

  // Please read our FAQ about sharing libs:
  // https://shorturl.at/jmzH0
  
});
