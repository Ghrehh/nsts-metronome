// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function test(browser) {
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('.page', 1000)
      .assert.elementPresent('.buttons-container')
      .assert.containsText('.bpm', '120')
      .click('.display .increment-button')
      .assert.containsText('.bpm', '121')
      .click('.display .decrement-button')
      .assert.containsText('.bpm', '120')
      .assert.containsText('.beats-per-measure', '4')
      .click('.time-signatures-container .increment-button')
      .assert.containsText('.beats-per-measure', '5')
      .click('.time-signatures-container .decrement-button')
      .assert.containsText('.beats-per-measure', '4')
      .assert.containsText('.toggle-metronome-button', 'START')
      .click('.toggle-metronome-button')
      .assert.containsText('.toggle-metronome-button', 'STOP')
      .end();
  },
};
