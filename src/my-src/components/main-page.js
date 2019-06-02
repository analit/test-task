import React from "react";
import Product from "./product";
import data from "../data/data";
import Paginator from "./paginator";
import { connect } from "react-redux";
import {Link} from "react-router-dom";


class MainPage extends React.Component {

    constructor(props) {
        super(props)
        this.products = data;
        this.productsPerToPage = 4;
    }

    render() {
        const start = (this.props.activePage - 1) * this.productsPerToPage;
        const end = start + this.productsPerToPage;

        return (
            <div className="mt-5">
                <Link to="/" className="btn btn-primary mb-3">Exit</Link>
                <ul className="list-unstyled">
                    {this.products.slice(start, end).map((product, i) => <Product name={product.name} description={product.description} key={i} />)}
                </ul>
                <Paginator countPage={Math.ceil(this.products.length / this.productsPerToPage)} activePage={this.props.activePage} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        activePage: state.activePage
    }
}

export default connect(mapStateToProps)(MainPage);