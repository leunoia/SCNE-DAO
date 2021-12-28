import sdk from "./1-initialize-sdk.js";

// Grab the app module address.
const appModule = sdk.getAppModule(
  "0x505CC5A0d5365d44767c1c5eC0E564C3804D230D",
);

(async () => {
  try {
    const voteModule = await appModule.deployVoteModule({
      // Give your governance contract a name.
      name: "SCNE DAO Proposals",

      // Determines which token can be used for voting, ensures only $SCNE.
      votingTokenAddress: "0xd60444B78f5af1949f7303Eae900D80B3441c27C",

      // After a proposal is created, when can members start voting?
      // For now, we set this to immediately.
      proposalStartWaitTimeInSeconds: 0,

      // How long do members have to vote on a proposal when it's created?
      // Here, we set it to 24 hours (86400 seconds)
      proposalVotingTimeInSeconds: 24 * 60 * 60,

      // Ensures that appropriate amount of members are voting on the proposal.
      // Prevents one member from submitting a proposal and voting without others present.
      votingQuorumFraction: 0,

      // Minimum number of $SCNE tokens a member must hold in order to submit a proposal.
      minimumNumberOfTokensNeededToPropose: "0",
    });

    console.log(
      "✅ Successfully deployed vote module, address:",
      voteModule.address,
    );
  } catch (err) {
    console.error("Failed to deploy vote module", err);
  }
})();
