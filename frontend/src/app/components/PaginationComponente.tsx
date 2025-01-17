// import React from 'react';
// import { Pagination, PaginationItem } from '@mui/material';
// import Link from 'next/link';

// interface PaginationComponentProps {
//   currentPage: number;
//   lastPage: number;
//   links: { label: string; url: string | null; active: boolean }[];
// }

// const PaginationComponent: React.FC<PaginationComponentProps> = ({ currentPage, lastPage, links }) => {
//   return (
//     <Pagination
//       count={lastPage}
//       page={currentPage}
//       renderItem={({ page }) => {
//         const link = links.find((link) => link.label === String(page));
//         return (
//           <PaginationItem
//             component={Link}
//             href={link?.url || '#'}
//             page={page}
//             disabled={!link?.url}
//             sx={{ margin: '0 5px' }}
//             color={link?.active ? 'primary' : 'standard'}
//           />
//         );
//       }}
//       sx={{
//         display: 'flex',
//         justifyContent: 'center',
//         margin: '20px 0',
//       }}
//     />
//   );
// };

// export default PaginationComponent;



import React from 'react';
import { Pagination, PaginationItem } from '@mui/material';

interface PaginationComponentProps {
  currentPage: number;
  lastPage: number;
  onPageChange: (page: number) => void; // Passa uma função para lidar com a mudança de página
}

const PaginationComponent: React.FC<PaginationComponentProps> = ({ currentPage, lastPage, onPageChange }) => {
  return (
    <Pagination
      count={lastPage}
      page={currentPage}
      onChange={(event, page) => onPageChange(page)} // Atualiza a página ao clicar
      renderItem={({ page }) => (
        <PaginationItem
          page={page}
          sx={{ margin: '0 5px' }}
          color={page === currentPage ? 'primary' : 'standard'} // Destaca a página atual
        />
      )}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        margin: '20px 0',
      }}
    />
  );
};

export default PaginationComponent;
