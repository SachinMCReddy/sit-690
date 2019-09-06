module.exports = {
  name: 'registration-form',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/registration-form',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
