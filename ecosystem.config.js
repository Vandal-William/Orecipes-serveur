module.exports = {
  apps : [{
    script: 'index.js',
    watch: '.',
    env_production: {
        NODE_ENV: 'production'
    }
  
  }],

  deploy : {
    production : {
      user : 'ubuntu',
      host : '51.91.251.65',
      ref  : 'origin/main',
      repo : 'git@github.com:Vandal-William/Orecipes-serveur.git',
      path : '/home/ubuntu/portfolio',
      'pre-deploy-local': '',
      'post-deploy' : 'pm2 startOrRestart ./current/ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
