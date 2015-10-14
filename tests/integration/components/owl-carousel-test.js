import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('owl-carousel', 'Integration | Component | owl carousel', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{owl-carousel}}`);

  assert.ok(this.$().text().trim());

  // Template block usage:
  this.render(hbs`
    {{#owl-carousel}}
      template block text
    {{/owl-carousel}}
  `);

  assert.ok(this.$().text().trim().match(/template block text/));
});
