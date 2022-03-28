import { Button, Box, Text, useClipboard } from "@chakra-ui/react";
import { useEthers, useEtherBalance } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";
import Identicon from "./Identicon";

export default function ConnectButton() {
  const { activateBrowserWallet, account, deactivate } = useEthers();
  const etherBalance = useEtherBalance(account);
  const handleConnectWallet = () => {
    activateBrowserWallet();
    
  }
  const handleDisconnectWallet = () => {
    deactivate();
  }

  return account ? (
    <>
    <Box
      display="flex"
      alignItems="center"
      background="gray.700"
      borderRadius="xl"
      py="0"
    >
      <Box px="3">
        <Text color="white" fontSize="md">
          {etherBalance && parseFloat(formatEther(etherBalance)).toFixed(3)} ETH
        </Text>
      </Box>

      <Button
        bg="gray.800"
        border="1px solid transparent"
        _hover={{
          border: "1px",
          borderStyle: "solid",
          borderColor: "blue.400",
          backgroundColor: "gray.700",
        }}
        borderRadius="xl"
        m="1px"
        px={3}
        height="38px"
      >
        
        <Text color="white" fontSize="md" fontWeight="medium" mr="2" onClick={() => navigator.clipboard.writeText(account)}>
          {account &&
            account}
        </Text>
        <Identicon />
      </Button>
    </Box>
    <Button onClick={handleDisconnectWallet} colorScheme={"red"}>Disconnect wallet</Button>
    </>
  ) : (
    <Button onClick={handleConnectWallet}>Connect to a wallet</Button>
  );
  
}