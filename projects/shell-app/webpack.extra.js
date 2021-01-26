const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const sharedDep = (name) => {
  return {
    [name]: {singleton: true}
  }
};

const name = 'shellApp'

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
      library: {type: 'var', name: name},
      filename: 'remoteEntry.js',
      remotes: {
        NgxTranslateDemo: 'NgxTranslateDemo@http://localhost:4202/remoteEntry.js',
      },
      shared: [
        sharedDep('@angular/core'),
        sharedDep('@angular/common'),
      ]
    })
  ]
};


