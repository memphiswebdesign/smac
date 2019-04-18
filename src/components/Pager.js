import React, { Component } from 'react';

class Pager extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1,
      limit: 6
    };
  }

  componentDidMount() {
    this.returnDataSet(this.state.page);
  }

  switchPage = (modifier) => {
    if (typeof modifier === "number") {
      this.setState({ page: modifier });
      this.returnDataSet(modifier);
    } else if (typeof modifier === "string") {
      const newPage = this.state.page + parseInt(modifier);
      if (newPage < 1 || newPage > Math.ceil(this.props.data.totalCount / this.state.limit)) { return; }
      this.setState({ page: newPage });
      this.returnDataSet(newPage);
    }
  };

  returnDataSet = (page) => {
    let { edges } = this.props.data;
    const begin = (page - 1) * this.state.limit;
    const end = (page * this.state.limit);
    edges = edges.slice(begin, end);
    this.props.onPageChanged(edges);
  };

  render() {
    const numPages = Math.ceil(this.props.data.totalCount / this.state.limit);

    if (numPages === 1) {
      return null;
    }

    let pages = Array(numPages).fill().map((undef, index) => {
      return (
          <React.Fragment key={ index }>
            { pages }
            <button className={`page-numbers ${this.state.page === index + 1 ? 'current' : ''}`}
               onClick={() => this.switchPage(index + 1) }>
              <span className="meta-nav screen-reader-text">Page </span>
              { index + 1}
            </button>
          </React.Fragment>
      )
    });

    return (<nav className="navigation pagination" role="navigation">
      <h2 className="screen-reader-text">Posts navigation</h2>
      <div className="nav-links">
        <button className="prev page-numbers" onClick={() => this.switchPage('-1') }>
          <i className="fa fa-chevron-left"></i>
          <span className="screen-reader-text">Previous page</span>
        </button>
        { pages }
        <button className="next page-numbers" onClick={() => this.switchPage('+1') }>
          <span className="screen-reader-text">Next page</span>
          <i className="fa fa-chevron-right"></i>
        </button>
      </div>
    </nav>);
  }
}

export default Pager;
