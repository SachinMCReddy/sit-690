module.exports = {
  name: 'nili-eat',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/nili-eat',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
