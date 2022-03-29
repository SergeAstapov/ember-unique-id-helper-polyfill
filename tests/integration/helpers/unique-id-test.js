import { module, test, skip } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { gte } from 'ember-compatibility-helpers';

const IdHelperPolyfilled = !gte('v4.4.0-beta.1');
const testIfIdHelperPolyfilled = IdHelperPolyfilled ? test : skip;

module('Integration | Helper | unique-id', function (hooks) {
  setupRenderingTest(hooks);

  testIfIdHelperPolyfilled('it renders unique id', async function (assert) {
    await render(hbs`{{unique-id}}`);

    let firstId = this.element.textContent.trim();

    await render(hbs`{{unique-id}}`);

    let secondId = this.element.textContent.trim();

    assert.notEqual(firstId, secondId);
  });
});
