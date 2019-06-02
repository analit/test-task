import React from "react";


export default class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.input = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.input.current.value !== "admin") {
            alert("Enter 'admin in password field!'")
            return;
        }

        this.props.history.push("/main");

    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" ref={this.input}></input>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}