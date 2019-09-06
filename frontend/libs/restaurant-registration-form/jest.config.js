module.exports = {
  name: 'restaurant-registration-form',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/restaurant-registration-form',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
