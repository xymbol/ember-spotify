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

test('it has featuredPlaylist', function(assert) {
  var hasFeaturedPlaylist = this.subject().get('featuredPlaylist');
  assert.ok(hasFeaturedPlaylist);
});

test('it has genres', function(assert) {
  var hasGenres = this.subject().get('genres');
  assert.ok(hasGenres);
});
