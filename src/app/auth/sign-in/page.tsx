import { Center } from "@chakra-ui/react";
import { SignIn, ClerkProvider } from "@clerk/nextjs";
 
export default function Page() {
  return (
    <ClerkProvider>
      <Center h='100vh'>
        <SignIn />
      </Center>
    </ClerkProvider>
  );}