module.exports = {
  name: 'home-page',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/home-page',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
