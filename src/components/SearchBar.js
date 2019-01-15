import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onSubmitForm = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitForm} className='ui form'>
          <div className='ui segment'>
              <div className='field'>
                <label>Image Search</label>
                <input
                  type="text"
                  value={this.state.term}
                  onChange={(e) => { this.setState({ term: e.target.value }) }}
                />
              </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
