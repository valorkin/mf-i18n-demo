const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const sharedDep = (name) => {
  return {
    [name]: {singleton: true}
  }
};

const name = 'ngxtranslate';

module.exports = {
  output: {
    uniqueName: name
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      name: name,
      library: { type: 'var', name: name },
      filename: 'remoteEntry.js',
      exposes: {
        // './NgxTranslateDemo': './projects/ngx-trans/src/app/ngxtrans/ngxtrans.ts',
        './NgxTranslateDemo': './src/app/ngxtrans/ngxtrans.ts',
      },
      shared: [
        sharedDep('@angular/core'),
        sharedDep('@angular/common'),
        sharedDep('@ngx-translate/core'),
        sharedDep('@ngx-translate/http-loader'),
      ],
    })
  ]
};


