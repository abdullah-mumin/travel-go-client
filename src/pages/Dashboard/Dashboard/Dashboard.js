import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import {
    // eslint-disable-next-line no-unused-vars
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import Review from '../../UserReviews/UserReviews';
import AddBlog from '../AddBlog/AddBlog';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageBlogs from '../AllBlogs/AllBlogs';
import AdminRoute from '../AdminRoute/AdminRoute';
import useFirebase from '../../../Hooks/useFirebase';
import useAuth from '../../../Hooks/useAuth';
import MyBlogs from '../MyBlogs/MyBlogs';

const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { admin, logout } = useFirebase();
    const {user} = useAuth();
    // console.log(admin);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    let { path, url } = useRouteMatch();

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <Link style={{ textDecoration: 'none', color: 'white',marginLeft:'10px' }} to='/'><Button variant="outlined" sx={{ width: '90%',my:2 }}>Home</Button></Link>
            <Link style={{ textDecoration: 'none', color: 'white',marginLeft:'10px' }} to={`${url}/writeBlog`}><Button variant="outlined" sx={{  width: '90%' }}>Add Blog</Button></Link>
            <List>
                
                {
                    admin && <Box>                        
                        <Link style={{ textDecoration: 'none', color: 'white',marginLeft:'10px' }} to={`${url}/makeAdmin`}><Button variant="outlined" sx={{ width: '90%' }}>Make Admin</Button></Link>
                        <Link style={{ textDecoration: 'none', color: 'white',marginLeft:'10px' }} to={`${url}/manageAllblogs`}><Button variant="outlined" sx={{ mt: 2, width: '90%' }}>Manage All Blogs</Button></Link>
                    </Box>
                }
                <Link to="/home" style={{ textDecoration: 'none',marginLeft:'10px' }}><Button onClick={logout} variant="outlined" sx={{ width: '90%', my: 2 }}>Log out</Button></Link>
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <h1 className='text-center'>Hello <span className='text-green-500'>{user?.displayName}</span>, This is your Dashboard.</h1>
                        <h1 className='text-center text-blue-500'>See things That you can Control.</h1>
                        {/* <MyBlogs></MyBlogs> */}
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review></Review>
                    </Route>
                    <Route path={`${path}/writeBlog`}>
                        <AddBlog></AddBlog>
                    </Route>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageAllblogs`}>
                        <ManageBlogs></ManageBlogs>
                    </AdminRoute>
                </Switch>
            </Box>
        </Box >
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;