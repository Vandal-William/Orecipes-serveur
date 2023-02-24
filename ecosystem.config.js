module.exports = {
  apps : [{
    script: 'index.js',
    watch: '.'
  }],

  deploy : {
    production : {
      user : 'ubuntu',
      host : '51.91.251.65',
      ref  : 'origin/main',
      repo : 'git@github.com:Vandal-William/Orecipes-serveur.git',
      path : '/home/ubuntu/portfolio',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js',
      'pre-setup': ''
    }
  }
};
