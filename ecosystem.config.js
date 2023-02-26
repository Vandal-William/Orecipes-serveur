require('dotenv').config();
module.exports = {
  apps : [{
    name: 'Orecipes',
    script: 'index.js',
    watch: '.',
  }],

  deploy : {
    production : {
      user : process.env.VPS_USER,
      host : process.env.HOST,
      ref  : process.env.GIT_REF,
      repo : process.env.GIT_REPO,
      path : process.env.VPS_PATH,
      'pre-deploy-local': '',
      'post-deploy' : 'pm2 startOrRestart ecosystem.config.js',
      'pre-setup': ''
    }
  }
};
