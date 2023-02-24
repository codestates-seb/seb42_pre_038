import styled from 'styled-components';

const PageinationWrap = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: center;
`;

const Pagination = () => {
  return (
    <PageinationWrap>
      {' '}
      <div className="s-pagination">
        <a className="s-pagination--item" href="…">
          Prev
        </a>
        <span className="s-pagination--item is-selected" aria-current="page">
          1
        </span>
        <a className="s-pagination--item" href="…">
          2
        </a>
        <a className="s-pagination--item" href="…">
          3
        </a>
        <a className="s-pagination--item" href="…">
          4
        </a>
        <a className="s-pagination--item" href="…">
          5
        </a>
        <span className="s-pagination--item s-pagination--item__clear">…</span>
        <a className="s-pagination--item" href="…">
          10
        </a>
        <a className="s-pagination--item" href="…">
          Next
        </a>
      </div>
    </PageinationWrap>
  );
};

export default Pagination;
