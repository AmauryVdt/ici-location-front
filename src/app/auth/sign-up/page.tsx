import { Center } from "@chakra-ui/react";
import { SignUp, ClerkProvider } from "@clerk/nextjs";
 
export default function Page() {
  return (
    <ClerkProvider>
      <Center h='100vh'>
        <SignUp />
      </Center>
    </ClerkProvider>
  );}