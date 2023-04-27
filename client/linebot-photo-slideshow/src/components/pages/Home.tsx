import {
    Box,
    Button,
    Divider,
    Flex,
    Heading,
    Input,
    Stack,
} from "@chakra-ui/react";
import { ChangeEvent, FC, memo, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Home: FC = memo(() => {
    const [password, setPassword] = useState<string>("");
    const navigate = useNavigate();

    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) =>
        setPassword(e.target.value);

    return (
        <Flex align="center" justify="center" height="100vh">
            <Box bg="white" w="lg" p={4} borderRadius="md" shadow="md">
                <Heading as="h1" size="lg" textAlign="center">
                    PHOTO SLIDESHOW
                </Heading>
                <Divider my={4} />
                <Stack spacing={6} py={4} px={10}>
                    <Input
                        placeholder="Enter your password"
                        type="password"
                        value={password}
                        onChange={onChangePassword}
                    />
                    <Button
                        bg="teal.400"
                        color="white"
                        _hover={{ opacity: 0.8 }}
                        onClick={() => navigate("/slideshow")}
                        isDisabled={password === ""}
                    >
                        START
                    </Button>
                </Stack>
            </Box>
        </Flex>
    );
});
