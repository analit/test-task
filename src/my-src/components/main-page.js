import React from "react";
import Product from "./product";
import data from "../data/data";
import Paginator from "./paginator";


export default class MainPage extends React.Component {

    constructor(props) {
        super(props)
        this.products = data;
    }

    render() {
        return (
            <div>
                <ul className="list-unstyled">
                    {this.products.map((product, i) => <Product name={product.name} description={product.description} key={i} />)}
                </ul>
                <Paginator countPage="10" activePage="3" />
            </div>
        )
    }
}