import { Link } from "react-router-dom";
import Nav from "../Nav";

function ViewCart({carts, onRemoveItem}) {
    
    let totalSum = 0;

    carts.forEach((cart) => {
        totalSum += parseFloat(cart.price);
    });
    return (
        <>
        <Nav></Nav>
            <div className="book-image-container">
                {carts.map((cart)=>
                    <div key={cart.id} className="book-image">
                        <img src={cart.book.image_url} alt="Image Loading..." />
                        <p>{cart.book.title}</p>
                        <p>{cart.book.author}</p>
                        <p>{cart.book.description}</p>
                        <button onClick={() => onRemoveItem(cart.id)}>Remove Item</button>
                    </div>
                )}
            </div>
            <div className="order-summary">
                <h2>Order Summary</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {carts.map((cart)=>
                        <tr key={cart.id}>
                            <td>{cart.book.title}</td>
                            <td>{cart.price}</td>
                        </tr>
                        )}
                        {/* <tr>
                            <td colSpan="1">Total</td>
                            <td>{totalSum.toFixed(2)}</td>
                        </tr> */}
                    </tbody>
                </table>
                <p>Total {totalSum.toFixed(2)}</p>
                <Link to='/payment'><button>CHECKOUT</button></Link>
            </div>
        </>
    )
}

export default ViewCart;