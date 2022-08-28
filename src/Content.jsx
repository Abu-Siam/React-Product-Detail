import React from 'react';
import './App.css';
import DetailsThumb from "./components/DetailsThumb";
// import {useState} from 'react';
// import NumericInput from 'react-numeric-input';
// import NumberFormat from 'react-number-format';


class Content extends React.Component {


    state = {
        products: [
            {
                "_id": "1",
                "title": "Fresh Mango from Rajshahi",
                "url": "Product/Fruits/",
                "dir": "Mangoes",
                "src": [
                    "https://media.istockphoto.com/photos/mango-picture-id467328250?k=20&m=467328250&s=612x612&w=0&h=b21g4jLnkNRkcOX84X_Vn-z1gHnLW1n3RXK8bKV692s=",
                    "https://www.agroponiente.com/wp-content/uploads/2021/08/mango-Agroponiente.png",
                    "https://www.pinkvilla.com/imageresize/is_there_any_side_effect_of_mango_on_our_health_find_out.jpg?width=752&format=webp&t=pvorg"

                ],
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "price": 23,
                "colors": ["red", "black", "crimson", "teal"],
                "count": 1
            }
        ],
        index: 0,

    };

    myRef = React.createRef();


    handleTab = index => {
        this.setState({index: index})
        const images = this.myRef.current.children;
        for (let i = 0; i < images.length; i++) {
            images[i].className = images[i].className.replace("active", "");
        }
        images[index].className = "active";
    };

    componentDidMount() {
        const {index} = this.state;
        this.myRef.current.children[index].className = "active";
    }


    render() {
        // eslint-disable-next-line react-hooks/rules-of-hooks

        const {products, index} = this.state;

        return (
            <div className="app">
                {
                    products.map(item => (
                        <div className="details" key={item._id}>
                            <div>
                                <div className="big-img">
                                    <img src={item.src[index]} alt=""/>
                                </div>
                                <div className="d-flex justify-content-evenly">
                                    <DetailsThumb images={item.src} tab={this.handleTab} myRef={this.myRef}/>
                                </div>
                            </div>


                            <div className="box" style={{marginLeft: "50px"}}>
                                <div className="row">
                                    <h2 style={{textAlign: "left", fontSize: "30px"}}>{item.title}</h2>
                                    <span
                                        style={{textAlign: "left", fontSize: "20px"}}>{item.url}<b>{item.dir}</b></span>

                                </div>
                                <div className="d-flex justify-content-evenly" style={{marginLeft: "-20px"}}>
                                    <div className="black-boxed-text">
                                        <span style={{fontSize: "30px"}}>89 tk</span>
                                        <br/>
                                        <span>per kg</span>
                                    </div>
                                    <div className="orange-boxed-text">
                                        <span style={{fontSize: "30px"}}>289 tk</span>
                                        <br/>
                                        <span>3 kg</span>
                                    </div>
                                    <div className="green-boxed-text">
                                        <div className="d-flex justify-content-evenly">
                                            <div>
                                                <span style={{fontSize: "30px"}}>449 tk</span>
                                                <br/>
                                                <span>per kg</span>
                                            </div>

                                            <div style={{fontSize: "50px"}}> |</div>
                                            <div>
                                                <span style={{fontSize: "20px"}}>Save</span>
                                                <br/>
                                                <span style={{fontSize: "30px"}}>15%</span>
                                            </div>
                                        </div>
                                        {/*<span style={{fontSize:"50px"}}> |</span>*/}
                                        {/*<span style={{fontSize:"30px"}}>Save</span>*/}

                                    </div>
                                </div>
                                <div style={{borderBottom:"1px solid lightgrey",marginTop:"20px"}}>

                                </div>
                                <div className="d-flex justify-content-between" style={{marginTop:"35px"}}>
                                    <div style={{textAlign: "left"}}>
                                            <input type = "number" className="input-style" min="1" max="1000" placeholder="1"/>
                                    </div>
                                    <div className="grey-boxed-text">
                                        <span style={{fontSize: "30px"}}>{"89"} tk</span>
                                    </div>
                                    <div >
                                        <button className="green-button">
                                            Order Now!
                                        </button>

                                    </div>
                                </div>

                                <p style={{textAlign:"left",color:"grey", marginTop:"20px"}}>{item.content}</p>

                                {/*<button className="cart">Add to cart</button>*/}

                            </div>


                        </div>

                    ))
                }
            </div>
        );
    };

}

export default Content;