import { moduleFor, test } from 'ember-qunit';

moduleFor('service:database', 'Unit | Service | database', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  var service = this.subject();
  assert.ok(service);
});

test('it finds all featured playlists', function(assert) {
  var records = this.subject().findAll('featured-playlist');
  assert.equal(records.length, 10);
});

test('it finds all genres', function(assert) {
  var records = this.subject().findAll('genre');
  assert.equal(records.length, 11);
});
