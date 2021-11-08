const main = async () => {
  const goalContractFactory = await hre.ethers.getContractFactory('GoalPortal');
  const goalContract = await goalContractFactory.deploy({
    value: hre.ethers.utils.parseEther('0.001'),
  });

  await goalContract.deployed();

  console.log('goalPortal address: ', goalContract.address);
};

  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  };
  
  runMain();