import React, { useState } from 'react'
import { Box, Button,Card,CardActions,CardContent,Modal,Typography } from '@mui/material'


export function Dashboard() {

    const [buySelected, setBuySelected] = useState(true)

    const [openModal, setOpenModal] = useState(false)

    const buyOrders = [{
        user: "Diamond", security: "AAPL", price:"150", quantity:"50"
    }, {
        user: "Paper", security: "AMZ", price:"70", quantity:"20"
    }]

    const sellOrders = [{
        user: "Diamond", security: "WFG", price:"200", quantity:"120"
    }, {
        user: "Paper", security: "WBS", price:"100", quantity:"100"
    }]

    const handleSelectBuy = () => { setBuySelected(true) }

    const handleSelectSell = () => { setBuySelected(false) }

    const handleOpenModal = () => { setOpenModal(true) }

    const handleCloseModal = () => { setOpenModal(false) }

    const [selectedOrder, setSelectedOrder] = useState()

    const handleSelectOrder = (o) => { 
        setSelectedOrder(o)
        handleOpenModal()
    }

    return (

        <Box width={'100vh'} height={'100vh'} display={"flex"} flexDirection={'column'}>
            <Modal open={openModal} onClose={handleCloseModal}>
                {buySelected ? (
                    <Typography variant={"h5"}>Create a Sell Order</Typography>
                ):(
                    <Typography variant={"h5"}>Create a Buy Order</Typography>
                )}
            </Modal>

            <Box width={'100%'} height={'60px'} display={'flex'} alignItems={"center"} justifyContent={'center'}>
                <Typography fontFamily={'serif'} variant={'h5'}>Welcome, Username!</Typography>
            </Box>
            <Box width={'100%'} height={'40px'} display={'flex'} alignItems={"flex-start"}>                   
                <Button variant={'contained'} style={{'margin':'10px'}} onClick={handleSelectBuy}>Buy Orders</Button>
                <Button variant={'contained'} style={{'margin':'10px'}} onClick={handleSelectSell}>Sell Orders</Button>  
            </Box>
            <Box margin={"30px"} width={"100%"} display={"flex"} alignItems={"flex-start"}>
                {buySelected ? (
                    <Box display={"flex"} flexDirection={"row"} width={"100%"} alignContent={"space-around"}>
                        {buyOrders.map(o => { return (
                            <Box width="200px" margin={"10px"}>
                            <Card >
                            <CardContent>
                                <Typography color="GrayText">{o.user}</Typography>
                                <Typography variant={"h5"}>{o.security}</Typography>
                                <Typography color="GrayText">Price: {o.price}</Typography>
                                <Typography variant={"body2"}>Quantity: {o.quantity}</Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" onClick={handleSelectOrder(o)}>Create Sell Order</Button>
                            </CardActions>  
                            </Card> 
                            </Box>
                        )
                        
                    })}
                    </Box>
                ):(
                    <Box display={"flex"} flexDirection={"row"} width={"100%"} alignContent={"space-around"}>
                        {sellOrders.map(o => { return (
                            <Box width="200px" margin={"10px"}>
                            <Card >
                            <CardContent>
                                <Typography color="GrayText">{o.user}</Typography>
                                <Typography variant={"h5"}>{o.security}</Typography>
                                <Typography color="GrayText">Price: {o.price}</Typography>
                                <Typography variant={"body2"}>Quantity: {o.quantity}</Typography>
                            </CardContent>  
                            </Card> 
                            </Box>
                        )
                        
                    })}
                    </Box>
                )}
            </Box>
        </Box>

    );

}