import { useState, useEffect } from "react";
import "./catalog.css";
import Product from "./product";
import DataService from "../services/dataService";

const Catalog = () => {
        let [products, setProducts] = useState([]);

        const loadCatalog = async () => {
                console.log("Data retrieved");
                
                let service = new DataService();
                let data = await service.getCatalog();
                setProducts(data);
        }

        useEffect( () =>{
                loadCatalog();
        }, []);

        return(<div className="catalog">
                <h2>We have {products.length} products!</h2>
                {
                        products.map(
                                (prod) => (<Product 
                                key={prod._id}
                                data={prod}/>)
                        )    
                }
        </div>)
}

export default Catalog;