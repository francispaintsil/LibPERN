import React, { Component } from 'react'

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date : Date.now()
        };
    }

    _onDateChange(e) {
        let state = this.state;
        state['date'] = e.target.value;
        // Or (you can use below method to access component in another method)
        state['date'] = this.dateRef.value;
        this.setState(state);
    }

    render() {
        return (
<div className="col-md-4 col-md-offset-4" id="login">
<section id="inner-wrapper" className="login">
  <article>
    <form>
    <div className="form-group">
        <div className="input-group">
          <span className="input-group-addon"></span>
          <div id="date-picker-example" className=" input-group datepicker">
          <input type="datetime-local" className="form-control" ref={(date) => {this.dateRef = date;}} 
          value={this.state.date} onChange={this._onDateChange.bind(this)}/>
          </div>
        </div>
      </div>
      <div className="form-group">
        <div className="input-group">
          <span className="input-group-addon"></span>
          <input type="text" className="form-control" placeholder="Enter Username"/>
        </div>
      </div>
      <div className="form-group">
        <div className="input-group">
          <span className="input-group-addon"></span>
          <input type="text" className="form-control" placeholder="Enter Library Code Here"/>
        </div>
      </div>
        <button type="submit" className="btn btn-success btn-block">LOGIN</button>
    </form>
  </article>
</section>
</div>
        )
    }
}
export default Login;
