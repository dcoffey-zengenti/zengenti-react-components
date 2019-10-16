/* eslint-disable no-undef */

var context = typeof window != 'undefined' ? window : global;

function url() {
  var alias = _ALIAS_;
  var project = _PROJECT_;
  var projectAndAlias =
    project && project != 'website' ? project + '-' + alias : alias;
  return Object({
    cms: 'https://cms-' + alias + '.cloud.contensis.com',
    previewWeb: 'https://preview-' + projectAndAlias + '.cloud.contensis.com',
    liveWeb: 'https://live-' + projectAndAlias + '.cloud.contensis.com',
    iisWeb: 'https://iis-live-' + projectAndAlias + '.cloud.contensis.com',
  });
}

context.PUBLIC_URI = _PUBLIC_URL_;

context.SERVERS = Object({
  alias: _ALIAS_,
  internalVip: _INTERNAL_VIP_,
  cms: url().cms,
  web: url().liveWeb,
  iis: url().iisWeb,
});

context.DELIVERY_API_CONFIG = Object({
  rootUrl: url().cms,
  accessToken: _ACCESS_TOKEN_,
  projectId: _PROJECT_,
  livePublishingRootUrl: url().previewWeb,
});

context.PROJECTS = Object(_PROJECTS_);

if (typeof window == 'undefined') {
  // in a server context we need to set default
  // scripts and bundles, then start the server
  var utils = require('./startup.utils.js');
  utils.setDefaults(__filename);
  if (process.argv.includes('-tests')) {
    utils.runTests();
  } else {
    utils.startServer();
  }
}
