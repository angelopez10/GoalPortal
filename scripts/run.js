const main = async () => {
  const goalContractFactory = await hre.ethers.getContractFactory("GoalPortal");
  const goalContract = await goalContractFactory.deploy({value: hre.ethers.utils.parseEther('0.1')});
  await goalContract.deployed();

  console.log("Contract deployed to:", goalContract.address);

  let contractBalance = await hre.ethers.provider.getBalance(
    goalContract.address
  );
  console.log(
    'Contract balance:',
    hre.ethers.utils.formatEther(contractBalance)
  );

  let goalTxn = await goalContract.goal('A message!');
  await goalTxn.wait();

  let goalTxn2 = await goalContract.goal('A message 2!');
  await goalTxn2.wait();

  
  contractBalance = await hre.ethers.provider.getBalance(goalContract.address);
  console.log(
    'Contract balance:',
    hre.ethers.utils.formatEther(contractBalance)
  );

  let allGoals = await goalContract.getAllGoals();
  console.log(allGoals);

};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
