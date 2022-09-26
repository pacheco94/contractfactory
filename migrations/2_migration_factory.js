const Bookfactoy = artifacts.require("booksfactory");

module.exports = function (deployer) {
  deployer.deploy(Bookfactoy);
};