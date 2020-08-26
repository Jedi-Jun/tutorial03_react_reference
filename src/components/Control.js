import React, { Component } from 'react';

class Control extends Component {
  render() {
    console.log(`Control render`);
    var _create, _update, _delete;
    if(this.props.mode === 'welcome'){
      _create = <li><a href="/create" onClick={function(e){
        e.preventDefault();
        this.props.onChangeMode('create');
      }.bind(this)}>create</a></li>;
      _update = <li>update</li>
      _delete = <li>delete</li>
    } else {
        _create = <li><a href="/create" onClick={function(e){
          e.preventDefault();
          this.props.onChangeMode('create');
        }.bind(this)}>create</a></li>;
        _update = <li><a href="/update" onClick={function(e){
          e.preventDefault();
          this.props.onChangeMode('update');
        }.bind(this)}>update</a></li>
        _delete = <li><input type="button" value="delete" onClick={function(e){
          e.preventDefault();
          this.props.onChangeMode('delete');
        }.bind(this)}></input></li>
      }
    return (
      <ul>
        {_create}
        {_update}
        {_delete}
      </ul>
    );
    }
  }

  export default Control;