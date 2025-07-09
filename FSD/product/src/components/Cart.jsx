// import { Card, CardMedia, Grid, CardContent, Typography } from '@mui/material';
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Cart = () => {
//   const navigate = useNavigate();
//   const [cartItems, setCartItems] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("user"));

//     if (!user) {
//       alert("Please login to view cart.");
//       navigate("/log");
//       return;
//     }

//     axios.get(`http://localhost:3000/my-cart/${user.userId}`)
//       .then((res) => {
//         setCartItems(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.log("Failed to fetch cart items:", err);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <div>
//       <Typography variant="h4" align="center" sx={{ my: 3 }}>My Cart</Typography>
//       {loading ? (
//         <Typography align="center">Loading...</Typography>
//       ) : cartItems.length === 0 ? (
//         <Typography align="center">Your cart is empty.</Typography>
//       ) : (
//         <Grid container spacing={2}>
//           {cartItems.map((item) => (
//             <Grid item xs={12} sm={6} md={4} key={item._id}>
//               <Card>
//                 <CardMedia sx={{ height: 140 }} image={item.productId.Image || "https://via.placeholder.com/150"} />
//                 <CardContent>
//                   <Typography variant="h6">{item.productId.Name}</Typography>
//                   <Typography variant="body2" color="text.secondary">{item.productId.Description}</Typography>
//                   <Typography variant="body2" color="text.primary"><b>₹{item.productId.Price}</b></Typography>
//                 </CardContent>
//               </Card> 
//             </Grid>
//           ))}
//         </Grid>
//       )}
//     </div>
//   );
// };

// export default Cart;

// import { Card, CardMedia, Grid, CardContent, Typography } from '@mui/material';
// import { Button } from '@mui/material';
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Cart = () => {
//   const navigate = useNavigate();
//   const [cartItems, setCartItems] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("user"));

//     if (!user) {
//       alert("Please login to view cart.");
//       navigate("/log");
//       return;
//     }

//     axios.get(`http://localhost:3000/my-cart/${user.userId}`)
//       .then((res) => {
//         setCartItems(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.log("Failed to fetch cart items:", err);
//         setLoading(false);
//       });
//   }, []);


//   const handleRemove = (cartItemId) => {
//   axios.delete(`http://localhost:3000/remove-from-cart/${cartItemId}`)
//     .then(res => {
//       alert(res.data.message);
//       setCartItems(cartItems.filter(item => item._id !== cartItemId));
//     })
//     .catch(err => {
//       console.error("Error removing item:", err);
//     });
// };


//   return (
//     <div>
//       <Typography variant="h4" align="center" sx={{ my: 3 }}>My Cart</Typography>
//       {loading ? (
//         <Typography align="center">Loading...</Typography>
//       ) : cartItems.length === 0 ? (
//         <Typography align="center">Your cart is empty.</Typography>
//       ) : (
//         <Grid container spacing={2}>
//           {cartItems.map((item) => (
//             <Grid item xs={12} sm={6} md={4} key={item._id}>
//               <Card>
//                 <CardMedia
//                   sx={{ height: 140 }}
//                   image={item.productId?.Image || "https://via.placeholder.com/150"}
//                 />
//                 <CardContent>
//                   <Typography variant="h6">{item.productId?.Name}</Typography>
//                   <Typography variant="body2" color="text.secondary">{item.productId?.Description}</Typography>
//                   <Typography variant="body2" color="text.primary"><b>₹{item.productId?.Price}</b></Typography>
//                   <Button variant="contained" color="error" onClick={() => handleRemove(item._id)} sx={{ mt: 1 }}>
//                      Remove </Button> 
//                 </CardContent>
//                 <Typography variant="h6" align="center" sx={{ mt: 3 }}>
//                  Total: ₹{cartItems.reduce((sum, item) => sum + item.productId?.Price * item.quantity, 0)}
//                 </Typography>

//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       )}
//     </div>
//   );
// };

// export default Cart;


// import React, { useEffect, useState } from 'react';
// import {
//   Card, CardMedia, Grid, CardContent, Typography, Button,
//   AppBar,
//   Toolbar
// } from '@mui/material';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Cart = () => {
//   const user = JSON.parse(localStorage.getItem("user"));
//   const navigate = useNavigate();
//   const [cartItems, setCartItems] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (!user) {
//       alert("Please login to view cart.");
//       navigate("/log");
//       return;
//     }

//     axios.get(`http://localhost:3000/my-cart/${user.userId}`)
//       .then((res) => {
//         setCartItems(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.log("Failed to fetch cart items:", err);
//         setLoading(false);
//       });
//   }, []);

//   const handleRemove = (cartItemId) => {
//     axios.delete(`http://localhost:3000/remove-from-cart/${cartItemId}`)
//       .then(res => {
//         alert(res.data.message);
//         setCartItems(cartItems.filter(item => item._id !== cartItemId));
//       })
//       .catch(err => {
//         console.error("Error removing item:", err);
//       });
//   };

//   const total = cartItems.reduce((sum, item) => {
//     return sum + (item.productId?.Price || 0) * (item.quantity || 1);
//   }, 0);

//   return (
//     <div>

//         <AppBar>
//             <Toolbar>
//                    <Typography variant='h4' component="div" sx={{ flexGrow: 1 }}>My Cart</Typography>
//             </Toolbar>
//         </AppBar>
   
//         <br></br>
//         <br></br>
//         <br></br>
//         <br></br>
//         <br></br>
//       {loading ? (
//         <Typography align="center">Loading...</Typography>
//       ) : cartItems.length === 0 ? (
//         <Typography align="center">Your cart is empty.</Typography>
//       ) : (
//         <>
//           <Grid container spacing={2}>
//             {cartItems.map((item) => (
//               <Grid item xs={12} sm={6} md={4} key={item._id}>
//                 <Card>
//                   <CardMedia
//                     sx={{ height: 140 }}
//                     image={item.productId?.Image || "https://via.placeholder.com/150"}
//                   />
//                   <CardContent>
//                     <Typography variant="h6">{item.productId?.Name}</Typography>
//                     <Typography variant="body2" color="text.secondary">{item.productId?.Description}</Typography>
//                     <Typography variant="body2" color="text.primary"><b>₹{item.productId?.Price}</b></Typography>
//                     <Button
//                       variant="contained"
//                       color="error"
//                       onClick={() => handleRemove(item._id)}
//                       sx={{ mt: 1 }}
//                     >
//                       Remove
//                     </Button>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>

//           <Typography variant="h5" align="center" sx={{ mt: 4 }}>
//             Total: ₹{total}
//           </Typography>
//         </>
//       )}
//     </div>
//   );
// };

// export default Cart;



// import React, { useEffect, useState } from 'react';
// import {
//   Card, CardMedia, Grid, CardContent, Typography, Button,
//   AppBar,
//   Toolbar,
//   CircularProgress // Added for a better loading indicator
// } from '@mui/material';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Cart = () => {
//   // It's good that you're parsing the user here.
//   // We'll use a local state for the user to make it reactive to changes.
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();
//   const [cartItems, setCartItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null); // Added state to handle API errors

//   useEffect(() => {
//     // Attempt to load user from localStorage only once on component mount
//     const storedUser = JSON.parse(localStorage.getItem("user"));
//     setUser(storedUser);

//     // If no user is found, redirect. This handles the 'undefined' userId case.
//     if (!storedUser || !storedUser.userId) {
//       alert("Please log in to view your cart.");
//       navigate("/log");
//       setLoading(false); // Stop loading if no user
//       return; // Exit useEffect early
//     }

//     // If user is present, proceed to fetch cart items
//     fetchCartItems(storedUser.userId);
//   }, [navigate]); // Added navigate to dependency array for best practice

//   // Function to fetch cart items, makes it reusable
//   const fetchCartItems = async (userId) => {
//     setLoading(true); // Start loading before the request
//     setError(null); // Clear previous errors

//     try {
//       const res = await axios.get(`http://localhost:3000/my-cart/${userId}`);
//       setCartItems(res.data);
//     } catch (err) {
//       console.error("Failed to fetch cart items:", err);
//       // Set a user-friendly error message
//       setError("Failed to load cart items. Please try again later.");
//       // If the error is a 500, it's server-side.
//       // You might want to handle specific error codes differently.
//     } finally {
//       setLoading(false); // Stop loading regardless of success or failure
//     }
//   };

//   const handleRemove = async (cartItemId) => {
//     try {
//       const res = await axios.delete(`http://localhost:3000/remove-from-cart/${cartItemId}`);
//       alert(res.data.message);
//       // Filter out the removed item directly for immediate UI update
//       setCartItems(cartItems.filter(item => item._id !== cartItemId));
//     } catch (err) {
//       console.error("Error removing item:", err);
//       alert("Failed to remove item from cart. Please try again.");
//     }
//   };

//   const total = cartItems.reduce((sum, item) => {
//     // Ensure productId and Price exist before accessing them
//     return sum + (item.productId?.Price || 0) * (item.quantity || 1);
//   }, 0);

//   // --- Render Logic ---
//   if (!user || !user.userId) {
//     // This state should ideally be caught by the useEffect redirect,
//     // but acts as a fallback for rendering
//     return null; // Or a simple "Redirecting to login..." message
//   }

//   return (
//     <div>
//       <AppBar> 
//         <Toolbar>
//           <Typography variant='h4' component="div" sx={{ flexGrow: 1 }}>My Cart</Typography>
//         </Toolbar>
//       </AppBar>

//       {/* Adding some space below AppBar */}
//       <Toolbar /> {/* This creates a div with the height of the AppBar */}
//       <br />

//       {loading ? (
//         <Typography align="center" sx={{ mt: 4 }}>
//           <CircularProgress />
//           <p>Loading your cart...</p>
//         </Typography>
//       ) : error ? (
//         <Typography align="center" color="error" sx={{ mt: 4 }}>
//           {error}
//         </Typography>
//       ) : cartItems.length === 0 ? (
//         <Typography align="center" sx={{ mt: 4 }}>
//           Your cart is empty.
//         </Typography>
//       ) : (
//         <>
//           <Grid container spacing={3} sx={{ p: 2 }}> {/* Added padding */}
//             {cartItems.map((item) => (
//               <Grid item xs={12} sm={6} md={4} key={item._id}>
//                 <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}> {/* Ensure cards are same height */}
//                   <CardMedia
//                     component="img" // Use component="img" for better semantics
//                     sx={{ height: 180, objectFit: 'contain', pt: 2 }} // objectFit for better image scaling
//                     image={item.productId?.Image || "https://via.placeholder.com/200"} // Better placeholder size
//                     alt={item.productId?.Name || "Product image"}
//                   />
//                   <CardContent sx={{ flexGrow: 1 }}> {/* Makes content grow to fill space */}
//                     <Typography gutterBottom variant="h6">{item.productId?.Name || "N/A"}</Typography>
//                     <Typography variant="body2" color="text.secondary">
//                       {item.productId?.Description || "No description available."}
//                     </Typography>
//                     <Typography variant="body1" color="text.primary" sx={{ mt: 1 }}>
//                       <b>₹{item.productId?.Price || '0.00'}</b> x {item.quantity || 1}
//                     </Typography>
//                     <Typography variant="subtitle1" color="text.primary">
//                       Subtotal: ₹{((item.productId?.Price || 0) * (item.quantity || 1)).toFixed(2)}
//                     </Typography>
//                   </CardContent>
//                   <Button
//                     variant="contained"
//                     color="error"
//                     onClick={() => handleRemove(item._id)}
//                     sx={{ m: 2 }} // Margin for button
//                   >
//                     Remove
//                   </Button>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>

//           <Typography variant="h5" align="center" sx={{ mt: 4, mb: 4 }}>
//             Total: ₹{total.toFixed(2)} {/* Format total to 2 decimal places */}
//           </Typography>
//         </>
//       )}
//     </div>
//   );
// };

// export default Cart;

import React, { useEffect, useState } from 'react';
import {
  Card, CardMedia, Grid, CardContent, Typography, Button,
  AppBar,
  Toolbar,
  CircularProgress
} from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Import the CSS file
import './Cart.css'; // Adjust path if your CSS file is in a different directory

const Cart = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);

    if (!storedUser || !storedUser.userId) {
      alert("Please log in to view your cart.");
      navigate("/log");
      setLoading(false);
      return;
    }

    fetchCartItems(storedUser.userId);
  }, [navigate]);

  const fetchCartItems = async (userId) => {
    setLoading(true);
    setError(null);

    try {
      const res = await axios.get(`http://localhost:3000/my-cart/${userId}`);
      setCartItems(res.data);
    } catch (err) {
      console.error("Failed to fetch cart items:", err);
      setError("Failed to load cart items. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleRemove = async (cartItemId) => {
    try {
      const res = await axios.delete(`http://localhost:3000/remove-from-cart/${cartItemId}`);
      alert(res.data.message);
      setCartItems(cartItems.filter(item => item._id !== cartItemId));
    } catch (err) {
      console.error("Error removing item:", err);
      alert("Failed to remove item from cart. Please try again.");
    }
  };

  const total = cartItems.reduce((sum, item) => {
    return sum + (item.productId?.Price || 0) * (item.quantity || 1);
  }, 0);

  if (!user || !user.userId) {
    return null;
  }

  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant='h4' component="div" sx={{ flexGrow: 1 }}>My Cart</Typography>
        </Toolbar>
      </AppBar>

      <Toolbar />
      <br />

      {loading ? (
        <Typography className="text-center"> {/* Applied class */}
          <CircularProgress />
          <p>Loading your cart...</p>
        </Typography>
      ) : error ? (
        <Typography className="text-center" color="error"> {/* Applied class */}
          {error}
        </Typography>
      ) : cartItems.length === 0 ? (
        <Typography className="text-center"> {/* Applied class */}
          Your cart is empty.
        </Typography>
      ) : (
        <>
          <Grid container spacing={3} className="cart-grid-container"> {/* Applied class */}
            {cartItems.map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item._id}>
                <Card className="cart-product-card"> {/* Applied class */}
                  <CardMedia
                    component="img"
                    // No need for sx prop here, handled by CSS
                    image={item.productId?.Image || "https://via.placeholder.com/200"}
                    alt={item.productId?.Name || "Product image"}
                  />
                  <CardContent> {/* No need for sx prop here, handled by CSS */}
                    <Typography gutterBottom variant="h6">{item.productId?.Name || "N/A"}</Typography>
                    <Typography variant="body2" color="text.secondary" mb={1}>
                      {item.productId?.Description || "No description available."}
                    </Typography>
                    <Typography variant="body1" color="text.primary" sx={{ mt: 1 }}>
                      <b>₹{item.productId?.Price?.toFixed(2) || '0.00'}</b> x {item.quantity || 1}
                    </Typography>
                    <Typography variant="subtitle1" color="text.primary">
                      Subtotal: ₹{((item.productId?.Price || 0) * (item.quantity || 1)).toFixed(2)}
                    </Typography>
                  </CardContent>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleRemove(item._id)}
                    // No need for sx prop here, handled by CSS
                  >
                    Remove
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Typography variant="h5" className="cart-total-typography"> {/* Applied class */}
            Total: ₹{total.toFixed(2)}
          </Typography>
        </>
      )}
    </div>
  );
};

export default Cart;