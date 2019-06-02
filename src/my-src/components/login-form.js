import React from "react";


export default class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.input = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {};
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.input.current.value !== "admin") {
            return this.setState(state => { return { ...state, error: "Enter 'admin in password field!'" } })
        }

        this.props.history.push("/main");

    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className={"form-control" + (this.state.error ? "  is-invalid" : "")} id="exampleInputPassword1" placeholder="Password" ref={this.input}></input>
                    {
                        this.state.error &&
                        <div class="invalid-feedback">
                            {this.state.error}
                        </div>
                    }

                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}