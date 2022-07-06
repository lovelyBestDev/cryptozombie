const zombiefactory = artifacts.require("ZombieFactory");
const zombiefeeding = artifacts.require("ZombieFeeding");
const zombiehelper = artifacts.require("ZombieHelper");
const zombieattack = artifacts.require("ZombieAttack");
const safemath = artifacts.require("SafeMath");
const ownable = artifacts.require("Ownable");

module.exports = function (deployer) {
  deployer.deploy(zombiefactory);
  deployer.deploy(zombiefeeding);
  deployer.deploy(zombiehelper);
  deployer.deploy(zombieattack);
  deployer.deploy(safemath);
  deployer.deploy(ownable);
};
