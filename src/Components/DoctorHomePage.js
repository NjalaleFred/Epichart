import React from 'react';
import { Box, Heading, Image } from '@chakra-ui/react';

export const DoctorHomePage = ({ doctor }) => {
  return (
    <Box
      bgImage="url('https://wallpapercave.com/wp/wp11548721.jpg')"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      position="relative"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        bg="black"
        opacity="0.5"
      />
      <Image
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAP1BMVEWzs7P///+vr6/k5OTs7Oy2tratra3X19fc3NzR0dH8/Pz4+Pjx8fG4uLi9vb3IyMjBwcHFxcXn5+fu7u7Nzc2cgkJPAAAESElEQVR4nO2dC7qjIAxGJdb323b/a53a3rmjrbQCUYLznxV4PpAkEDSKAAAAAAAAAAAAAAAAAAAAAADgUOiB76fYkzy+kxVtc1pN9UNZ50NySkk1oxy76HSSVKslcX8yR4rVK5fiXAPZvRneZ2t2Jsd2xXByPM/SmlSrikoVJ1GkqNQYqnoI35Govb2upYt1NfDXkai4fNB70AWsSG2snZ8zLk2gjtSOG/Sew5j6flgb0nzL+P0whjeKtB4DtZShzVTKzQTvimEtOM2n+KAjC0eRel0O80UxlPWGeiu/SdH3o2/DXlCpPIiJ6iAYxruorSO2IT8Tp69p6Bca3wZfoMxRUF2FD2JrkKlpkB356eosqFTi2+ITTuvoXySHjJRjCFUlOLUxrCd0dL49tJgXFOtcxE5Tcgv2v5Ri1xqmSarUzbeJjhuXodQ9jZUDGEtqqYYssWKilJqcMi00d1rfKhrYBFXhW2WdhM9QaCHMaBjD0A8whOEMoSUiDA04f7Q4f8SHoSdgCEP5hozVk9T9RL4K+PyGvW8VDeffxTi9ofPxr3zDzY16gRqSVSNUSIbOJ/gzJLYO8W3pP5DXx8d1dPgPcUGfW1BVvo2W8A+htLyG6/R3jqxj0pRfUNhuFAxtGHxLLdjjPZR1Dswc7yeERQu+NoxfxG3ssxvKCoc7TFNpk5Sp73KGvNuljAX+hMSOmoHVUN4QcvSwzxDa9sVoKG0h/WHtuwJ2CG1UeP/8hS2lbxMtDZOhrKpiDhUsgrXgXn2eEkPoMvOE45BUXMq9gCE9rQRmMwuc56m4reAXyLVQlH45L4pSxwzc9/NvIHG6gSh7mXnilIFXAQi6Xbu4BWHoUO6PgrOZOdbHNKXMo98VbIsMuRn3G3Y7GkIL+1XskjfRGfcbFslbCKFwhvl10pDm6IR5Mez7ic0xbJAKJNbPMav3A3sJn/QGKfjV98NaYbB9WoY4giYxUe4XBj5C24dQ/peT1jAJF2FUha+kJtl3mCupgWCQ89Qw95Z45PsNw/0oeY0JXzAvnwKL+WRRAseB7NE8sBEMahTJ8rg7GMXEuiO6akMIGmnncvpUiH8ZqXPsVqhFb0eRs99ELPZHNBQVPN0m5XVI5UlS1HN27tVZK+rnHhQNm34QYCjZJyIsiZIh3qGNfaK6ZF2TetWkNCr4blVqNMesj/z80oyiNttp8N6o86I99lcm059V+F+9z1TjYZb3hSVj+36goWXc7R1I7gvL4YP3Qjzs91ISNbmnwVuS7ZL2UNpnfHe1HSnzgTtFp6Y4at3cyJX193t047+45U7OtbLe1xZhw/cLT++G0T+NjqZ2/8GQ7R9jDsN5GHmv+uyB413aPa7Z8+La1896l2kXXD9QD0P/wBCGMPQPDGEIQ//AEIYw9A8MYQhD/8AQhvL32pwvt3djLBv3jX2SjqsgAAAAAAAAAAAAAAAAAAAAAOD/4Q9tQkhDbo2dwAAAAABJRU5ErkJggg=="
        alt="No profile picture"
        boxSize="200px"
        borderRadius="full"
        objectFit="cover"
        zIndex="1"
      />
      <Heading as="h2" size="xl" color="white" zIndex="1" mb={4}>
        Doctor: {doctor.name}
      </Heading>
      <Heading as="h2" size="lg" color="white" zIndex="1" mb={4}>
        Specialization: {doctor.specialization}
      </Heading>
    </Box>
  );
};
