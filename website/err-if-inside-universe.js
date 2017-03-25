const execSync = require('child_process').execSync;
const repoName = execSync('git rev-parse --show-toplevel');

if (!repoName.includes('vector-icons')) {
  console.error(
    '[ERROR] Expo Developer: You cannot run this inside of universe! You need to clone the repo from Github to somewhere outside of universe to deploy'
  );
  process.exit(1);
}
