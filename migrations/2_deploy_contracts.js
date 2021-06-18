const CovacLPTimelock = artifacts.require("CovacLPTimelock");

module.exports = function (deployer) {
  deployer.deploy(CovacLPTimelock);
};
