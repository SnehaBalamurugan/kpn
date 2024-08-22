import React, { useEffect, useState } from 'react';
import { List, Card, Button, Divider } from 'antd';
import './categoryPage.css';
import axios from 'axios';
import { HomeOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';

const YourComponent = () => {
    const [selectedCategory, setSelectedCategory] = useState('men\'s clothing');
    const [products, setProducts] = useState([]);
    const categories = ['men\'s clothing', 'jewelery', 'electronics', 'women\'s clothing'];
    const [filteredProducts,setFilteredProducts] = useState([])

    const handleSelect = (category) => {
        setSelectedCategory(category);
    };

    //Mock API Call
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    useEffect(()=>{
        if(products && products.length > 0){
        const filteredProduct = products.filter(product => product.category === selectedCategory);
        setFilteredProducts(filteredProduct)
        }
    },[selectedCategory,products])

    return (
        <div className="category-container">
            {/* Left Side List */}
            <div className="left-list">
                <List
                    bordered
                    dataSource={categories}
                    renderItem={item => (
                        <List.Item
                            className="left-list-item"
                            onClick={() => handleSelect(item)}
                            style={{
                                backgroundColor: selectedCategory === item ? 'rgb(243, 243, 86)' : '#fff',
                                cursor: 'pointer', // Set cursor to pointer
                            }}
                        >
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                        </List.Item>
                    )}
                />
            </div>

            {/* Right Side Content */}
            <div className="right-content">
                {/* Header with selected category and count */}
                <div className="right-header">
                    {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} ({filteredProducts.length} Items)
                </div>
                <Breadcrumb
                    items={[
                        {
                                href: '/',
                                title: (
                                  <>
                                    <HomeOutlined />
                                    <span>Home</span>
                                  </>
                                ),
                        },
                        {
                            title: 'Categories',
                        }
                    ]}
                />
                <Divider className="right-divider" />

                {/* Cards Display */}
                <div className="right-cards d-flex m-2">
                    {filteredProducts.map((item, index) => (
                        <Card key={index} className="card-item">
                            <img src={item.image} alt={item.title} style={{ width: '100%', height: '150px', marginBottom: '5px', objectFit: 'cover' }} />
                            <Card.Meta title={item.title} description={`Price: ₹${item.price}`} />
                            <div className="card-discount">50% Off</div>
                            <div className="card-save">Save ₹5</div>
                            <Button type="primary" className="add-button">Add</Button>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default YourComponent;
