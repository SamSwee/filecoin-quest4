const CONTRACT_ADDRESS = "0xAFD6526D116ED38b2bf3128CE16a34234DDe0eCF";
const META_DATA_URL =
  "ipfs://bafyreidw7zs5khgnxfwejicix3hwmtb3qinpbk43yj2xutsrpnzafbhgxq/metadata.json";

async function mintNFT(contractAddress, metaDataURL) {
  const ExampleNFT = await ethers.getContractFactory("ExampleNFT");
  const [owner] = await ethers.getSigners();
  await ExampleNFT.attach(contractAddress).mintNFT(owner.address, metaDataURL);
  console.log("NFT minted to: ", owner.address);
}

mintNFT(CONTRACT_ADDRESS, META_DATA_URL)
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
