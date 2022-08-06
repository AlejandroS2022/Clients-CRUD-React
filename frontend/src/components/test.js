/*import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// App Imports
import { getClients } from '../actions/client'
import Loading from '../loading'
import ClientList from './list'

class ClientListContainer extends Component {
  componentDidMount () {
    this.props.getClients()
  }

  render () {
    return (
      <section>
        <h2><span role="img" aria-label="clients">💭</span> Clients</h2>

        <br/>

        {this.props.clients.loading ? <Loading/> : <ClientList clients={this.props.clients.list}/>}
      </section>
    )
  }
}

ClientListContainer.propTypes = {
  clients: PropTypes.object.isRequired,
  getClients: PropTypes.func.isRequired
}

function clientsState (state) {
  return {
    clients: state.clients
  }
}

export default connect(clientsState, {getClients})(ClientList)

*/


import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getAll } from "../features/client/clientSlice"

const Clients = () => {
    const clients = useSelector((state) => state.client.data);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAll());
    }, [dispatch]);

    return(
        <div>
            List of clients
            <div>
            { clients.map((client, index) => {
                return (
                <div> En el carrito: {client.cedula} </div>
                );
            })}</div>
        </div>
    );
};

export default Clients;