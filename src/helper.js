const _ = require('lodash');

function asCachableGeojson(geojson) {
  if (!geojson || Array.isArray(geojson)) {
    return {
      type: 'FeatureCollection',
      features: geojson ?? [],
      metadata: {},
    };
  }

  geojson.type = geojson.type || 'FeatureCollection';
  geojson.features = geojson.features || [];
  geojson.metadata = geojson.metadata || {};
  return _.cloneDeep(geojson);
}

module.exports = {
  asCachableGeojson,
};
