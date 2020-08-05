module.exports = {
    branchPrefix: 'renovate/',
    dryRun: false,
    gitAuthor: 'Buckham Duffy Bot <bot@buckhamduffy.com>',
    logLevel: 'debug',
    onboarding: true,
    platform: 'github',
    includeForks: false,
    reviewers: ['aaronflorey', 'alexbuckham'],
    dependencyDashboard: true,
    lockFileMaintenance: {
        enabled: true
    },
    onboardingConfig: {
        extends: ["github>buckhamduffy/renovate-config"]
    },
    repositories: [
        'buckhamduffy/abdom-jobs-portal',
        'buckhamduffy/aimss-splash',
        'buckhamduffy/bdo-tasking-portal',
        'buckhamduffy/aimss-webapp',
        'buckhamduffy/ycapital',
        'buckhamduffy/edocs',
        'buckhamduffy/ycapital',
        'buckhamduffy/arta-v2',
        'buckhamduffy/synapse',
        'buckhamduffy/synapse-electron',
        'buckhamduffy/docker-php-nginx'
    ]
  };