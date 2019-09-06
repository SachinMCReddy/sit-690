module.exports = {
  name: 'login-form',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/login-form',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
