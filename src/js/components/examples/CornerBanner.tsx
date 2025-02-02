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

export const CornerBanner: FC = () => {
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
                color="black"
                borderRadius={0}
                containerProps={{
                    alignItems: 'flex-end',
                    justifyContent: 'flex-end',
                }}
                m={2}
            >
                <ModalBody p={0}>
                    <Flex>
                        <Box
                            p={8}
                            maxW="sm"
                            m={0}
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
                    <Flex direction={{ base: 'column', sm: 'row' }}>
                        <Button
                            variant="secondary"
                            w="full"
                            h={16}
                            mr={2}
                            onClick={() => {
                                setIsOpen(false);
                            }}
                            borderRadius={0}
                        >
                            Weigeren
                        </Button>
                        <Button
                            variant="primary"
                            onClick={onAccept}
                            bgColor="#1293FA"
                            w="full"
                            h={16}
                            color="white"
                            borderRadius={0}
                        >
                            Accepteren
                        </Button>
                    </Flex>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};
