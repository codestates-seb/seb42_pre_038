import styled from 'styled-components';
import PropTypes from 'prop-types';

const FilterWrap = styled.div``;
const Filter = ({ setFilterOption }) => {
  return (
    <FilterWrap>
      <div className="d-flex ai-center mb16">
        <div className="flex--item fl1 fs-body3"></div>
        <div className="flex--item">
          <div className=" d-flex s-btn-group js-filter-btn">
            <a
              className="js-sort-preference-change flex--item s-btn s-btn__muted s-btn__outlined"
              href="javacsript:void(0)"
              onClick={() => setFilterOption(3)}
            >
              Score
            </a>
            <a
              className="js-sort-preference-change flex--item s-btn s-btn__muted s-btn__outlined"
              href="javacsript:void(0)"
              onClick={() => setFilterOption(0)}
            >
              Newest
            </a>
            <a
              className="js-sort-preference-change flex--item s-btn s-btn__muted s-btn__outlined"
              href="javacsript:void(0)"
              onClick={() => setFilterOption(2)}
            >
              Unanswered
            </a>
            <a
              className="js-sort-preference-change flex--item s-btn s-btn__muted s-btn__outlined"
              href="javacsript:void(0)"
              onClick={() => setFilterOption(1)}
            >
              Active
            </a>
          </div>
        </div>
      </div>
    </FilterWrap>
  );
};
Filter.propTypes = {
  setFilterOption: PropTypes.func,
};
export default Filter;
