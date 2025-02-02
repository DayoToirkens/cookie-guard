import { FC, useEffect, useState } from 'react';
import { Dialog } from '@headlessui/react';
import { useCookies } from '../../hooks/useCookies';
import { CookieCategorySettings } from '../../types/cookies';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Button,
    Slide,
    Text,
    Link,
    Flex,
    VStack,
    Icon,
    Box,
    Stack,
} from '@chakra-ui/react';
import { FaCookieBite } from 'react-icons/fa';

export const BottomBanner: FC = () => {
    const { cookieSettings, setCookieSettings } = useCookies();
    const [isOpen, setIsOpen] = useState(cookieSettings === undefined);

    const [cookieOptions, setCookieOptions] = useState<{
        required: boolean;
        functional: boolean;
        analytics: boolean;
        marketing: boolean;
    }>({
        required: cookieSettings?.required ?? false,
        functional: cookieSettings?.functional ?? false,
        analytics: cookieSettings?.analytics ?? false,
        marketing: cookieSettings?.marketing ?? false,
    });
    useEffect(() => {
        setCookieOptions({
            required: cookieSettings?.required ?? false,
            functional: cookieSettings?.functional ?? false,
            analytics: cookieSettings?.analytics ?? false,
            marketing: cookieSettings?.marketing ?? false,
        });
    }, [cookieSettings]);

    const onAccept = () => {
        setCookieSettings({
            functional: true,
            analytics: true,
            marketing: true,
        });
        setIsOpen(false);
        // setCookieBannerIsOpen(false);
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={() => {}}
            isCentered={false}
            autoFocus={false}
        >
            <ModalOverlay />
            <ModalContent
                color="white"
                borderRadius="xl"
                maxWidth="3xl"
                containerProps={{
                    alignItems: 'flex-end',
                }}
                bgColor="#003459"
                p={4}
                m={2}
            >
                <ModalBody>
                    <Flex
                        direction={{ base: 'column', md: 'row' }}
                        gap={{ base: 0, md: 6 }}
                    >
                        <Flex>
                            <Icon
                                display={{ base: 'none', md: 'block' }}
                                as={FaCookieBite}
                                w={12}
                                h={12}
                                mr={6}
                                color="#1293FA"
                            />
                            <Box
                                maxW="sm"
                                mb={2}
                                fontSize={{ base: 'sm', md: 'md' }}
                            >
                                <Text mb={2}>
                                    Onze site gebruikt cookies om jou de beste
                                    ervaring te geven op onze website.
                                </Text>
                                <Link href="#" fontWeight={600}>
                                    Meer info
                                </Link>
                            </Box>
                        </Flex>
                        <Stack
                            direction={{ base: 'column', sm: 'row' }}
                            align={{ base: 'flex-start', sm: 'center' }}
                        >
                            <Button
                                variant="secondary"
                                border="2px solid #1293FA"
                                borderRadius="full"
                                color="#1293FA"
                                mr={2}
                                onClick={() => {
                                    setIsOpen(false);
                                }}
                                size={{ base: 'sm', md: 'md' }}
                            >
                                Weigeren
                            </Button>
                            <Button
                                variant="primary"
                                onClick={onAccept}
                                bgColor="#1293FA"
                                borderRadius="full"
                                color="white"
                                size={{ base: 'sm', md: 'md' }}
                            >
                                Accepteren
                            </Button>
                        </Stack>
                    </Flex>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};
