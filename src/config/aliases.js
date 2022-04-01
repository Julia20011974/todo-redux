const aliases = (prefix = 'src') => ({
  '@actions': `${prefix}/actions/index`,
  '@components': `${prefix}/components`,
  '@constants': `${prefix}/constants/index`,
  '@helpers': `${prefix}/helpers/index`,
  '@pages': `${prefix}/pages`,
  '@reducers': `${prefix}/reducers`,
});

module.exports = aliases;
