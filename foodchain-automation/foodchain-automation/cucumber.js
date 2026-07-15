const common = {
  require: ['step_definitions/**/*.js', 'support/**/*.js'],
  format: [
    'progress-bar',
    'json:reports/cucumber-report.json',
    'html:reports/cucumber-report.html'
  ],
  formatOptions: { snippetInterface: 'async-await' },
  retry: 1
};

module.exports = {
  default: common
};
