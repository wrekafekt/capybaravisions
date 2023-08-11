const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
const address = "0x4D259D525eab5C05442f86b9a83A68BA286c37F3" // capybara visions contract
const abi = [{"inputs":[],"name":"ApprovalCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"ApprovalQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"BalanceQueryForZeroAddress","type":"error"},{"inputs":[],"name":"InvalidConfig","type":"error"},{"inputs":[],"name":"InvalidQueryRange","type":"error"},{"inputs":[],"name":"LockedForever","type":"error"},{"inputs":[],"name":"MaxSupplyExceeded","type":"error"},{"inputs":[],"name":"MintERC2309QuantityExceedsLimit","type":"error"},{"inputs":[],"name":"MintToZeroAddress","type":"error"},{"inputs":[],"name":"MintZeroQuantity","type":"error"},{"inputs":[],"name":"NotOwner","type":"error"},{"inputs":[],"name":"NotPlatform","type":"error"},{"inputs":[],"name":"OwnerQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"OwnershipNotInitializedForExtraData","type":"error"},{"inputs":[],"name":"TransferCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"TransferFromIncorrectOwner","type":"error"},{"inputs":[],"name":"TransferToNonERC721ReceiverImplementer","type":"error"},{"inputs":[],"name":"TransferToZeroAddress","type":"error"},{"inputs":[],"name":"URIQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"WrongPassword","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"fromTokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"toTokenId","type":"uint256"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"ConsecutiveTransfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"key","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"cid","type":"bytes32"}],"name":"Invited","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"affiliate","type":"address"},{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint128","name":"wad","type":"uint128"},{"indexed":false,"internalType":"uint256","name":"numMints","type":"uint256"}],"name":"Referral","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"src","type":"address"},{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint128","name":"wad","type":"uint128"}],"name":"Withdrawal","type":"event"},{"inputs":[{"internalType":"address","name":"affiliate","type":"address"}],"name":"affiliateBalance","outputs":[{"internalType":"uint128","name":"","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"affiliate","type":"address"},{"internalType":"address","name":"token","type":"address"}],"name":"affiliateBalanceToken","outputs":[{"internalType":"uint128","name":"","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"bytes32","name":"key","type":"bytes32"},{"internalType":"bytes32[]","name":"proof","type":"bytes32[]"}],"internalType":"struct Auth","name":"auth","type":"tuple"},{"internalType":"address[]","name":"toList","type":"address[]"},{"internalType":"uint256[]","name":"quantityList","type":"uint256[]"},{"internalType":"address","name":"affiliate","type":"address"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"batchMintTo","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"burnConfig","outputs":[{"internalType":"contract IERC721AUpgradeable","name":"archetype","type":"address"},{"internalType":"address","name":"burnAddress","type":"address"},{"internalType":"bool","name":"enabled","type":"bool"},{"internalType":"bool","name":"reversed","type":"bool"},{"internalType":"uint16","name":"ratio","type":"uint16"},{"internalType":"uint64","name":"start","type":"uint64"},{"internalType":"uint64","name":"limit","type":"uint64"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"burnToMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"key","type":"bytes32"},{"internalType":"uint256","name":"quantity","type":"uint256"},{"internalType":"bool","name":"affiliateUsed","type":"bool"}],"name":"computePrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"config","outputs":[{"internalType":"string","name":"baseUri","type":"string"},{"internalType":"address","name":"affiliateSigner","type":"address"},{"internalType":"address","name":"ownerAltPayout","type":"address"},{"internalType":"address","name":"superAffiliatePayout","type":"address"},{"internalType":"uint32","name":"maxSupply","type":"uint32"},{"internalType":"uint32","name":"maxBatchSize","type":"uint32"},{"internalType":"uint16","name":"affiliateFee","type":"uint16"},{"internalType":"uint16","name":"platformFee","type":"uint16"},{"internalType":"uint16","name":"defaultRoyalty","type":"uint16"},{"components":[{"internalType":"uint16","name":"affiliateDiscount","type":"uint16"},{"components":[{"internalType":"uint16","name":"numMints","type":"uint16"},{"internalType":"uint16","name":"mintDiscount","type":"uint16"}],"internalType":"struct MintTier[]","name":"mintTiers","type":"tuple[]"}],"internalType":"struct Discount","name":"discounts","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"disableBurnToMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"disableRoyaltyEnforcement","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"archetype","type":"address"},{"internalType":"address","name":"burnAddress","type":"address"},{"internalType":"bool","name":"reversed","type":"bool"},{"internalType":"uint16","name":"ratio","type":"uint16"},{"internalType":"uint64","name":"start","type":"uint64"},{"internalType":"uint64","name":"limit","type":"uint64"}],"name":"enableBurnToMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"enableRoyaltyEnforcement","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"explicitOwnershipOf","outputs":[{"components":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint64","name":"startTimestamp","type":"uint64"},{"internalType":"bool","name":"burned","type":"bool"},{"internalType":"uint24","name":"extraData","type":"uint24"}],"internalType":"struct IERC721AUpgradeable.TokenOwnership","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"explicitOwnershipsOf","outputs":[{"components":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint64","name":"startTimestamp","type":"uint64"},{"internalType":"bool","name":"burned","type":"bool"},{"internalType":"uint24","name":"extraData","type":"uint24"}],"internalType":"struct IERC721AUpgradeable.TokenOwnership[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"components":[{"internalType":"string","name":"baseUri","type":"string"},{"internalType":"address","name":"affiliateSigner","type":"address"},{"internalType":"address","name":"ownerAltPayout","type":"address"},{"internalType":"address","name":"superAffiliatePayout","type":"address"},{"internalType":"uint32","name":"maxSupply","type":"uint32"},{"internalType":"uint32","name":"maxBatchSize","type":"uint32"},{"internalType":"uint16","name":"affiliateFee","type":"uint16"},{"internalType":"uint16","name":"platformFee","type":"uint16"},{"internalType":"uint16","name":"defaultRoyalty","type":"uint16"},{"components":[{"internalType":"uint16","name":"affiliateDiscount","type":"uint16"},{"components":[{"internalType":"uint16","name":"numMints","type":"uint16"},{"internalType":"uint16","name":"mintDiscount","type":"uint16"}],"internalType":"struct MintTier[]","name":"mintTiers","type":"tuple[]"}],"internalType":"struct Discount","name":"discounts","type":"tuple"}],"internalType":"struct Config","name":"config_","type":"tuple"},{"internalType":"address","name":"_receiver","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"invites","outputs":[{"internalType":"uint128","name":"price","type":"uint128"},{"internalType":"uint128","name":"reservePrice","type":"uint128"},{"internalType":"uint128","name":"delta","type":"uint128"},{"internalType":"uint32","name":"start","type":"uint32"},{"internalType":"uint32","name":"end","type":"uint32"},{"internalType":"uint32","name":"limit","type":"uint32"},{"internalType":"uint32","name":"maxSupply","type":"uint32"},{"internalType":"uint32","name":"interval","type":"uint32"},{"internalType":"uint32","name":"unitSize","type":"uint32"},{"internalType":"address","name":"tokenAddress","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"key","type":"bytes32"}],"name":"listSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"password","type":"string"}],"name":"lockAffiliateFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"password","type":"string"}],"name":"lockDiscounts","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"password","type":"string"}],"name":"lockMaxSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"password","type":"string"}],"name":"lockOwnerAltPayout","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"password","type":"string"}],"name":"lockRoyaltyEnforcement","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"password","type":"string"}],"name":"lockURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"bytes32","name":"key","type":"bytes32"},{"internalType":"bytes32[]","name":"proof","type":"bytes32[]"}],"internalType":"struct Auth","name":"auth","type":"tuple"},{"internalType":"uint256","name":"quantity","type":"uint256"},{"internalType":"address","name":"affiliate","type":"address"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"bytes32","name":"key","type":"bytes32"},{"internalType":"bytes32[]","name":"proof","type":"bytes32[]"}],"internalType":"struct Auth","name":"auth","type":"tuple"},{"internalType":"uint256","name":"quantity","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"affiliate","type":"address"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"mintTo","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"minter","type":"address"},{"internalType":"bytes32","name":"key","type":"bytes32"}],"name":"minted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"options","outputs":[{"internalType":"bool","name":"uriLocked","type":"bool"},{"internalType":"bool","name":"maxSupplyLocked","type":"bool"},{"internalType":"bool","name":"affiliateFeeLocked","type":"bool"},{"internalType":"bool","name":"discountsLocked","type":"bool"},{"internalType":"bool","name":"ownerAltPayoutLocked","type":"bool"},{"internalType":"bool","name":"royaltyEnforcementEnabled","type":"bool"},{"internalType":"bool","name":"royaltyEnforcementLocked","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ownerBalance","outputs":[{"components":[{"internalType":"uint128","name":"owner","type":"uint128"},{"internalType":"uint128","name":"platform","type":"uint128"}],"internalType":"struct OwnerBalance","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"ownerBalanceToken","outputs":[{"components":[{"internalType":"uint128","name":"owner","type":"uint128"},{"internalType":"uint128","name":"platform","type":"uint128"}],"internalType":"struct OwnerBalance","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"platform","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_salePrice","type":"uint256"}],"name":"royaltyInfo","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint16","name":"affiliateFee","type":"uint16"}],"name":"setAffiliateFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"baseUri","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"},{"internalType":"uint16","name":"feeNumerator","type":"uint16"}],"name":"setDefaultRoyalty","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"uint16","name":"affiliateDiscount","type":"uint16"},{"components":[{"internalType":"uint16","name":"numMints","type":"uint16"},{"internalType":"uint16","name":"mintDiscount","type":"uint16"}],"internalType":"struct MintTier[]","name":"mintTiers","type":"tuple[]"}],"internalType":"struct Discount","name":"discounts","type":"tuple"}],"name":"setDiscounts","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_key","type":"bytes32"},{"internalType":"bytes32","name":"_cid","type":"bytes32"},{"components":[{"internalType":"uint128","name":"price","type":"uint128"},{"internalType":"uint128","name":"reservePrice","type":"uint128"},{"internalType":"uint128","name":"delta","type":"uint128"},{"internalType":"uint32","name":"start","type":"uint32"},{"internalType":"uint32","name":"end","type":"uint32"},{"internalType":"uint32","name":"limit","type":"uint32"},{"internalType":"uint32","name":"maxSupply","type":"uint32"},{"internalType":"uint32","name":"interval","type":"uint32"},{"internalType":"uint32","name":"unitSize","type":"uint32"},{"internalType":"address","name":"tokenAddress","type":"address"}],"internalType":"struct DutchInvite","name":"_dutchInvite","type":"tuple"}],"name":"setDutchInvite","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_key","type":"bytes32"},{"internalType":"bytes32","name":"_cid","type":"bytes32"},{"components":[{"internalType":"uint128","name":"price","type":"uint128"},{"internalType":"uint32","name":"start","type":"uint32"},{"internalType":"uint32","name":"end","type":"uint32"},{"internalType":"uint32","name":"limit","type":"uint32"},{"internalType":"uint32","name":"maxSupply","type":"uint32"},{"internalType":"uint32","name":"unitSize","type":"uint32"},{"internalType":"address","name":"tokenAddress","type":"address"}],"internalType":"struct Invite","name":"_invite","type":"tuple"}],"name":"setInvite","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint32","name":"maxBatchSize","type":"uint32"}],"name":"setMaxBatchSize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint32","name":"maxSupply","type":"uint32"},{"internalType":"string","name":"password","type":"string"}],"name":"setMaxSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"ownerAltPayout","type":"address"}],"name":"setOwnerAltPayout","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"superAffiliatePayout","type":"address"}],"name":"setSuperAffiliatePayout","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"tokensOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"stop","type":"uint256"}],"name":"tokensOfOwnerIn","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"tokens","type":"address[]"}],"name":"withdrawTokens","outputs":[],"stateMutability":"nonpayable","type":"function"}]
const contract = {
  address: address,
  abi: abi,
};

async function connect() {
  await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();
  //let userAddress = await signer.getAddress();
  return signer;
}

async function getMaxQuantity() {
  const signer = await connect();
  const nftContract = new ethers.Contract(contract.address, contract.abi, provider);

  let maxQuantity = 0;

  // check invite limit
  let invite = await nftContract.invites(ethers.constants.HashZero);
  let limit = typeof invite['limit'].toNumber === 'function' ? invite['limit'].toNumber() : invite['limit'];
  let currentBalance = await nftContract.balanceOf(signer.getAddress());
  maxQuantity = limit - currentBalance;

  // check max batch size
  let config = await nftContract.config();
  let maxBatch = config['maxBatchSize'];
  maxQuantity = maxQuantity < maxBatch? maxQuantity: maxBatch;

  // check contract max supply
  let maxSupply = config['maxSupply'];
  let curSupply = await nftContract.totalSupply();
  let diff = maxSupply - curSupply;

  maxQuantity = maxQuantity < diff? maxQuantity: diff;
  return maxQuantity
}

// mint from public invite list
async function mintPublic(quantity, callback) {
  const signer = await connect();
  const nftContract = new ethers.Contract(contract.address, contract.abi, signer);

  if(quantity > await getMaxQuantity()) {
    console.log('Max quantity exceeded');
    callback(false);
    return
  }

  let invite = await nftContract.invites(ethers.constants.HashZero);

  let price = (invite['price'] * quantity).toString();
  let auth = [ethers.constants.HashZero, []];
  let affiliate = ethers.constants.AddressZero;
  let affiliateSigner = ethers.constants.HashZero;

  let estimatedGas = 0;
  try {
    const estimatedGasFromContract = await nftContract.estimateGas.mint(
      auth, quantity, affiliate, affiliateSigner, {value: price, gasLimit: 0 });
    estimatedGas = estimatedGasFromContract.toNumber();
  } catch (error) {
    console.log('User has insufficient funds for mint');
    console.log(error);
  }

  try {
    const tx = await nftContract.mint(auth, quantity, affiliate, affiliateSigner, {value: price, gasLimit: estimatedGas });
    console.log(`Transaction hash: ${tx.hash}`);

    const receipt = await tx.wait();
    console.log(`Transaction confirmed in block ${receipt.blockNumber}`);
    console.log(`Gas used: ${receipt.gasUsed.toString()}`);
    callback(true);
  } catch (error) {
    console.log('rejected mint');
    console.log(error);
    callback(false)
  }
}
