// import { AppBar, Box, Button , Paper, Toolbar, Typography} from '@mui/material';
// import React from 'react'
// import { useNavigate, Link } from 'react-router-dom';

// const User = () => {
//     const user = JSON.parse(localStorage.getItem('user'));
//     var navigate = useNavigate()

//     const handleLogout = () =>{
//         localStorage.removeItem('user')
//         navigate("/log")
//     }

//   return (
//     <div>
//       <br></br>
//       <AppBar>
//         <Toolbar>
//           <Typography variant='h4' component="div" sx={{ flexGrow: 1 }}>User</Typography>
//             <Link to="/log">
//                 <Button variant="contained" color="secondary" sx={{ marginLeft: 1 }}>Login</Button>
//             </Link>
//             &nbsp;
//             <Link to="/">
//                 <Button color="secondary" variant="contained" sx={{ marginLeft: 1 }}>View</Button>
//             </Link>
//             &nbsp;
//         </Toolbar>
//       </AppBar>
//       <br></br><br></br>
//       <center>
//       <Box sx={{ padding: 3 }}>
//       <Paper elevation={3} sx={{ padding: 3, maxWidth: 600, margin: 'auto' }}>
//       <h1>User</h1>
//       <h3>Name : {user.name}</h3>
//       <h4>Email : {user.email}</h4>
//       <Button variant='contained' onClick={handleLogout}>Logout</Button>
//       </Paper>
//       </Box>
//       </center>
//     </div>
//   )
// }

// export default User




// import { AppBar, Box, Button, Paper, Toolbar, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
// import React, { useEffect, useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import axios from 'axios';

// const User = () => {
//   const user = JSON.parse(localStorage.getItem('user'));
//   var navigate = useNavigate();
//   const [products, setProducts] = useState([]);

//   const handleLogout = () => {
//     localStorage.removeItem('user');
//     navigate("/log");
//   };

//   // Fetch products on page load
//   useEffect(() => {
//     axios.get("http://localhost:3000/view")
//       .then(res => setProducts(res.data))
//       .catch(err => console.log("Product fetch error:", err));
//   }, []);

//   const handleAddToCart = (productId) => {
//     axios.post("http://localhost:3000/add-to-cart", {
//       userId: user.userId,
//       productId: productId,
//       quantity: 1
//     })
//     .then(res => alert(res.data.message))
//     .catch(err => {
//       console.error("Add to cart error:", err);
//       alert("Failed to add to cart");
//     });
//   };

//   return (
//     <div>
//       <br />
//       <AppBar>
//         <Toolbar>
//           <Typography variant='h4' component="div" sx={{ flexGrow: 1 }}>User</Typography>
//           <Link to="/log">
//             <Button variant="contained" color="secondary" sx={{ marginLeft: 1 }}>Login</Button>
//           </Link>
//           &nbsp;
//           <Link to="/">
//             <Button color="secondary" variant="contained" sx={{ marginLeft: 1 }}>View</Button>
//           </Link>
//           &nbsp;
//         </Toolbar>
//       </AppBar>
//       <br /><br />
//       <center>
//         <Box sx={{ padding: 3 }}>
//           <Paper elevation={3} sx={{ padding: 3, maxWidth: 600, margin: 'auto' }}>
//             <h1>User</h1>
//             <h3>Name : {user.name}</h3>
//             <h4>Email : {user.email}</h4>
//             <Button variant='contained' onClick={handleLogout}>Logout</Button>
//           </Paper>
//         </Box>
//       </center>

//       {/* ✅ Product List Section */}
//       <Box sx={{ padding: 4 }}>
//         <Typography variant='h5' gutterBottom>Available Products</Typography>
//         <Grid container spacing={3}>
//           {products.map(product => (
//             <Grid item xs={12} sm={6} md={4} key={product._id}>
//               <Card>
//                 <CardMedia
//                   component="img"
//                   height="140"
//                   image={product.imageURL || "https://via.placeholder.com/150"}
//                   alt={product.name}
//                 />
//                 <CardContent>
//                   <Typography variant="h6">{product.name}</Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     ₹{product.price}
//                   </Typography>
//                   <Button
//                     variant="contained"
//                     color="secondary"
//                     onClick={() => handleAddToCart(product._id)}
//                     sx={{ mt: 1 }}
//                   >
//                     Add to Cart
//                   </Button>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//     </div>
//   );
// };

// export default User;


// import { AppBar, Box, Button, Paper, Toolbar, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
// import React, { useEffect, useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import axios from 'axios';

// const User = () => {
//   const user = JSON.parse(localStorage.getItem('user'));
//   var navigate = useNavigate();
//   const [products, setProducts] = useState([]);

//   const handleLogout = () => {
//     localStorage.removeItem('user');
//     navigate("/log");
//   };

  
//   // Fetch products on page load
//   useEffect(() => {
//     axios.get("http://localhost:3000/view")
//       .then(res => setProducts(res.data))
//       .catch(err => console.log("Product fetch error:", err));
//   }, []);

//   const handleAddToCart = (productId) => {
//     axios.post("http://localhost:3000/add-to-cart", {
//       userId: user.userId,
//       productId: productId,
//       quantity: 1
//     })
//     .then(res => alert(res.data.message))
//     .catch(err => {
//       console.error("Add to cart error:", err);
//       alert("Failed to add to cart");
//     });
//   };

//   return (
//     <div>
//       <br />
//       <AppBar>
//         <Toolbar>
//           <Typography variant='h4' component="div" sx={{ flexGrow: 1 }}>User</Typography>

//           {/* ✅ Replace Login with Profile */}
//           <Link to="/userprofile">
//             <Button variant="contained" color="secondary" sx={{ marginLeft: 1 }}>Profile</Button>
//           </Link>

//           &nbsp;
//           <Link to="/">
//             <Button color="secondary" variant="contained" sx={{ marginLeft: 1 }}>View</Button>
//           </Link>
//           &nbsp;
//            <Button variant="contained" color="secondary" sx={{ ml: 1 }} onClick={handleLogout}>Logout</Button>
//         </Toolbar>
//       </AppBar>
//       <br /><br />
//       {/* <center>
//         <Box sx={{ padding: 3 }}>
//           <Paper elevation={3} sx={{ padding: 3, maxWidth: 600, margin: 'auto' }}>
//             <h1>User</h1>
//             <h3>Name : {user.name}</h3>
//             <h4>Email : {user.email}</h4>
//             <Button variant='contained' onClick={handleLogout}>Logout</Button>
//           </Paper>
//         </Box>
//       </center> */}

//       {/* ✅ Product List Section */}
//       <Box sx={{ padding: 4 }}>
//         <Typography variant='h5' gutterBottom>Available Products</Typography>
//         <Grid container spacing={2}>
//           {products.map(product => (
//             <Grid key={product._id} item xs={12} sm={6} md={4}>
//               <Card
//                 sx={{
//                   maxWidth: 345,
//                   height: '100%',
//                   display: 'flex',
//                   flexDirection: 'column'
//                 }}
//               >
//                 <CardMedia
//                   component="img"
//                   alt={product.Name}
//                   height="140"
//                   image={product.Image || "https://via.placeholder.com/150"}
//                 />
//                 <CardContent>
//                   <Typography gutterBottom variant="h5">
//                     <b>{product.Name}</b>
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     {product.Description}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     <b>₹{product.Price}</b>
//                   </Typography>   
//                   <Button
//                     variant="contained"
//                     color="secondary"
//                     onClick={() => handleAddToCart(product._id)}
//                     sx={{ mt: 1 }}
//                   >
//                     Add to Cart
//                   </Button>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//     </div>
//   );
// };

// export default User;



import {
  AppBar,
  Box,
  Button,
  Paper,
  Toolbar,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const User = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  var navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate("/log");
  };

  useEffect(() => {
    axios.get("http://localhost:3000/view")
      .then(res => setProducts(res.data))
      .catch(err => console.log("Product fetch error:", err));
  }, []);

  const handleAddToCart = (productId) => {
    axios.post("http://localhost:3000/add-to-cart", {
      userId: user.userId,
      productId: productId,
      quantity: 1
    })
      .then(res => {
        alert(res.data.message);
        navigate("/cart"); // ✅ Redirect to cart page after adding
      })
      .catch(err => {
        console.error("Add to cart error:", err);
        alert("Failed to add to cart");
      });
  };

  return (
    <div>
      <br />
      <AppBar>
        <Toolbar>
          <Typography variant='h4' component="div" sx={{ flexGrow: 1 }}>User</Typography>
          <Link to="/userprofile">
            <Button variant="contained" color="secondary" sx={{ marginLeft: 1 }}>Profile</Button>
          </Link>
          &nbsp;
          <Link to="/">
            <Button color="secondary" variant="contained" sx={{ marginLeft: 1 }}>View</Button>
          </Link>
          &nbsp;
          <Button variant="contained" color="secondary" sx={{ ml: 1 }} onClick={handleLogout}>Logout</Button>
        </Toolbar>
      </AppBar>

      <Box sx={{ padding: 4 }}>
        <Typography variant='h5' gutterBottom>Available Products</Typography>
        <Grid container spacing={2}>
          {products.map(product => (
            <Grid key={product._id} item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  maxWidth: 345,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <CardMedia
                  component="img"
                  alt={product.Name}
                  height="140"
                  image={product.Image || "https://via.placeholder.com/150"}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    <b>{product.Name}</b>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">{product.Description}</Typography>
                  <Typography variant="body2" color="text.secondary"><b>₹{product.Price}</b></Typography>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleAddToCart(product._id)}
                    sx={{ mt: 1 }}
                  >
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default User;






