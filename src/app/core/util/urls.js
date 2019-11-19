const url = (alias, project) => {
  const projectAndAlias =
    project && project.toLowerCase() != 'website'
      ? `${project.toLowerCase()}-${alias}`
      : alias;
  return {
    cms: `https://cms-${alias}.cloud.contensis.com`,
    liveWeb: `https://live-${projectAndAlias}.cloud.contensis.com`,
    previewWeb: `https://preview-${projectAndAlias}.cloud.contensis.com`,
    iisWeb: `https://iis-live-${projectAndAlias}.cloud.contensis.com`,
    iisPreviewWeb: `https://iis-previe-${projectAndAlias}.cloud.contensis.com`,
  };
};

exports.urls = url;