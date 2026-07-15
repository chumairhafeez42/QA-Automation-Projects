const { setWorldConstructor, World } = require('@cucumber/cucumber');
const config = require('./config');

/**
 * CustomWorld holds page objects and shared state for a single scenario.
 * A fresh instance is created per-scenario by Cucumber, so state never
 * leaks between tests.
 */
class CustomWorld extends World {
  constructor(options) {
    super(options);
    this.browser = null;
    this.context = null;
    this.page = null;
    this.config = config;

    // Shared scenario-level state (e.g. IDs created during a test,
    // the currently logged-in role, data captured from the UI, etc.)
    this.state = {};
  }

  /** Convenience helper: store a value for later steps in the same scenario */
  save(key, value) {
    this.state[key] = value;
  }

  /** Convenience helper: retrieve a value saved earlier in the scenario */
  get(key) {
    return this.state[key];
  }
}

setWorldConstructor(CustomWorld);
