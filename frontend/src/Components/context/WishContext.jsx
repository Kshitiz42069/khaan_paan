import { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types'

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState([]);

    return (
        <WishlistContext.Provider value={{ wishlist, setWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
};

export const useWishlistContext = () => useContext(WishlistContext);

WishlistProvider.propTypes = {
    children: PropTypes.node.isRequired,
}