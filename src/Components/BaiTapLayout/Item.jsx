import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    return (
    <div className="card bg-light border-0 h-100">
    <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-collection" /></div>
    <h2 className="fs-4 fw-bold">Card title</h2>
    <p className="mb-50">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <button className="btn btn-primary">Find Out More</button>
  </div>
</div>

    )
  }
}
