import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react"
import './CSS/SingleProductModal.css'
export function SingleProductModal({data}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button onClick={onOpen} colorScheme='blue'>View</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{data.title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody  mt={4}>
              <div id="singleProductModal">
                <img src={data.image} alt="" width="150px"/>
                
                <div>
                <Text > <strong>Brand</strong> :- {data.brand}</Text>
                <Text style={{ maxWidth: "30ch", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}> <strong>Type</strong> :- {data.type}</Text>
                <Text > <strong>Category</strong> :- {data.category}</Text>
                <Text > <strong>Price</strong> :- ₹{data.offer_price}</Text>
                </div>
              </div>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }