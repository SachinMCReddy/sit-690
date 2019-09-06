module.exports = {
  name: 'nili-eat-common',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/nili-eat-common',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
