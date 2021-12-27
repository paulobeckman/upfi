import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const { isOpen, onClose, onOpen} = useDisclosure();

  const [selectedImageUrl, setSelectedImageUrl] = useState('');

  const handleViewImage = ( url:string ): void => {
    setSelectedImageUrl(url);
    onOpen();
  }

  return (
    <>
      <SimpleGrid column={3} spacing={40}>
        {cards.map(card => (
          <Card key={card.id} data={card} viewImage={handleViewImage} />
        ))}
      </SimpleGrid>
      {isOpen && (
        <ModalViewImage 
          imgUrl={selectedImageUrl}
          isOpen={isOpen}
          onClose={onClose}
        />
      )}
    </>
  );
}
