import { Center } from "@chakra-ui/react";
import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return (
    <Center h='100%'>
      <SignIn />
    </Center>
  );}