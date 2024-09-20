import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  IconButton,
  Box,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { MdFirstPage, MdKeyboardArrowLeft, MdKeyboardArrowRight, MdLastPage } from 'react-icons/md';


// Styled components (same as before)
const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  borderRadius: '12px',
  overflow: 'hidden',
}));

const StyledTable = styled(Table)(({ theme }) => ({
  minWidth: 650,
}));

const StyledTableHead = styled(TableHead)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
}));

const StyledHeaderCell = styled(TableCell)(({ theme }) => ({
  color: theme.palette.common.white,
  fontWeight: 600,
  textTransform: 'uppercase',
  fontSize: '0.875rem',
  padding: '16px',
  fontFamily: 'Poppins, sans-serif',
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
  transition: 'background-color 0.3s',
  '&:hover': {
    backgroundColor: theme.palette.action.selected,
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  padding: '16px',
  fontFamily: 'Poppins, sans-serif',
}));

// Custom pagination component
const TablePagination = ({ count, page, rowsPerPage, onPageChange }) => {
  const handleFirstPageButtonClick = () => {
    onPageChange(0);
  };

  const handleBackButtonClick = () => {
    onPageChange(page - 1);
  };

  const handleNextButtonClick = () => {
    onPageChange(page + 1);
  };

  const handleLastPageButtonClick = () => {
    onPageChange(Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5, display: 'flex', alignItems: 'center' }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        <MdFirstPage />
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        <MdKeyboardArrowLeft />
      </IconButton>
      <Typography variant="body2" sx={{ mx: 2, fontFamily: 'Poppins, sans-serif' }}>
        Page {page + 1} of {Math.ceil(count / rowsPerPage)}
      </Typography>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        <MdKeyboardArrowRight />
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        <MdLastPage />
      </IconButton>
    </Box>
  );
};

const ModernTable = ({
  columns,
  data,
  includeSerialNumber = false,
  tableProps = {},
  containerProps = {},
  rowsPerPage = 10,
}) => {
  const [page, setPage] = useState(0);

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const renderCellContent = (item, column) => {
    if (column.render) {
      return column.render(item);
    }

    const value = item[column.field];

    if (column.type === 'image' && value) {
      return <img src={value} alt="Row item" style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '50%' }} />;
    }

    return value;
  };

  const paginatedData = data.slice(page * rowsPerPage, (page + 1) * rowsPerPage);

  return (
    <StyledTableContainer component={Paper} {...containerProps}>
      <StyledTable {...tableProps}>
        <StyledTableHead>
          <TableRow>
            {includeSerialNumber && (
              <StyledHeaderCell align="center">
                S/N
              </StyledHeaderCell>
            )}
            {columns.map((column) => (
              <StyledHeaderCell
                key={column.field}
                align={column.align || 'left'}
                style={column.headerStyle}
              >
                {column.headerName}
              </StyledHeaderCell>
            ))}
          </TableRow>
        </StyledTableHead>
        <TableBody>
          {paginatedData.map((item, index) => (
            <StyledTableRow key={item.id || index}>
              {includeSerialNumber && (
                <StyledTableCell align="center">{page * rowsPerPage + index + 1}</StyledTableCell>
              )}
              {columns.map((column) => (
                <StyledTableCell
                  key={column.field}
                  align={column.align || 'left'}
                  style={column.cellStyle}
                >
                  {renderCellContent(item, column)}
                </StyledTableCell>
              ))}
            </StyledTableRow>
          ))}
        </TableBody>
      </StyledTable>
      {data.length === 0 ? (
        <Typography 
          variant="body1" 
          style={{ 
            padding: '40px', 
            textAlign: 'center', 
            fontFamily: 'Poppins, sans-serif',
            color: '#666'
          }}
        >
          No data available
        </Typography>
      ) : (
        <Box sx={{ padding: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <TablePagination
            count={data.length}
            page={page}
            rowsPerPage={rowsPerPage}
            onPageChange={handleChangePage}
          />
        </Box>
      )}
    </StyledTableContainer>
  );
};

export default ModernTable;