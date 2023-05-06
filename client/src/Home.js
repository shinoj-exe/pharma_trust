import React from 'react'
import { useHistory } from "react-router-dom"
import "./Home.css"

function Home() {
    const history = useHistory()
    const redirect_to_roles = () => {
        history.push('/roles')
    }
    const redirect_to_addmed = () => {
        history.push('/addmed')
    }
    const redirect_to_supply = () => {
        history.push('/supply')
    }
    const redirect_to_track = () => {
        history.push('/track')
    }
    return (
        <div>
            <div className='d-flex justify-content-center align-items-center mt-3'>
                <h1 >Pharma-Trust</h1>
            </div>
            <br />
            {/* <h6>(Note: Here <u>Owner</u> is the person who deployed the smart contract on the blockchain)</h6>
            <h5>Step 1: Owner Should Register Raw material suppliers ,Manufacturers, Distributors and Retailers</h5>
            <h6>(Note: This is a one time step. Skip to step 2 if already done)</h6> */}
            <div className="content d-flex align-items-center justify-content-center">
                <div className="content-wrapper ">
                    <div className="register">
                        <div className="h2">Register</div>
                        <div>
                            <p>The <strong>government</strong> is able to register the users of the blockchain network.</p>
                            <button onClick={redirect_to_roles} className="btn btn-outline-primary btn-lg">Register</button>
                        </div>
                    </div>
                </div>
                <div className="content-wrapper">
                    <div className="order">
                        <div className="h2">Order Medicines</div>
                        <div>
                            <p>Order for medicines can be placed onto the network</p>
                            <button onClick={redirect_to_addmed} className="btn btn-outline-primary btn-lg">Order Medicine</button>
                        </div>
                    </div>
                </div>
                <div className="content-wrapper">
                    <div className="update">
                        <div className="h2">Update status into blockchain</div>
                        <div>
                            <p>The status of medicine is updated by the stakeholders </p>
                            <button onClick={redirect_to_supply} className="btn btn-outline-primary btn-lg">Update</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* <button onClick={redirect_to_roles} className="btn btn-outline-primary btn-sm">Register</button>
            <br />
            <h5>Step 2: Owner should order medicines</h5>
            <button onClick={redirect_to_addmed} className="btn btn-outline-secondary btn-sm">Order Medicines</button>
            <br />
            <h5>Step 3: Update the Blockchain Network</h5>
            <button onClick={redirect_to_supply} className="btn btn-outline-secondary btn-sm">Update</button> */}
            <br />
            <hr />
            <div className='d-flex justify-content-center align-items-center p-2'>
                <h5><b>Track</b> the medicines-</h5>
                <button onClick={redirect_to_track} className="btn btn-outline-primary btn-sm ml-3">Track Medicines</button>
            </div>
            <hr />
            <div className="box-wrapper">
                <div className="box">
                    <div className="box-header">
                        <h1>Update</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic velit tempore dignissimos architecto debitis molestiae cum perferendis. Deleniti, blanditiis animi?</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}


export default Home