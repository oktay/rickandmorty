import { Button, HStack, Select } from '@chakra-ui/react';
import { useContext } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { AppContext } from '../App';

function Pagination() {
  const { page, setPage, info } = useContext(AppContext);

  function handlePagination(direction) {
    const currentPage = Number(page);

    setPage(direction === 'next' ? currentPage + 1 : currentPage - 1);
  }

  function handleChange(e) {
    setPage(e.target.value);
  }

  return (
    <HStack justifyContent="center">
      <Button
        onClick={() => handlePagination('prev')}
        isDisabled={!info.prev}
        leftIcon={<FaChevronLeft />}
        variant="outline"
      >
        Prev
      </Button>
      <Select w="auto" onChange={handleChange} value={page}>
        {Array(info.pages)
          .fill({})
          .map((_, index) => (
            <option key={index} value={index + 1}>
              {index + 1}
            </option>
          ))}
      </Select>
      <Button
        onClick={() => handlePagination('next')}
        isDisabled={!info.next}
        rightIcon={<FaChevronRight />}
        variant="outline"
      >
        Next
      </Button>
    </HStack>
  );
}

export default Pagination;
