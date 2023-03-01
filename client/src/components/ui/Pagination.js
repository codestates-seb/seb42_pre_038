import '../../Paging.css';
import Pagination from 'react-js-pagination';
import { PropTypes } from 'prop-types';

const Paging = ({ page, count, setPage }) => {
  const handlePageChange = (page) => {
    setPage(page);
  };
  console.log();

  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={10}
      totalItemsCount={count}
      pageRangeDisplayed={5}
      prevPageText={'‹'}
      nextPageText={'›'}
      onChange={handlePageChange}
    />
  );
};
Paging.propTypes = {
  page: PropTypes.number,
  count: PropTypes.number,
  setPage: PropTypes.func,
};
export default Paging;
