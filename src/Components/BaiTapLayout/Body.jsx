import React, { Component } from 'react'
import Item from './Item'
import Banner from './Banner'

export default class Body extends Component {
  render() {
    return (
      <>
       <div>
  <header className="py-5">
    <div className="container px-lg-5">
      <Banner/>
    </div>
  </header>
  <section className="pt-4">
    <div className="container px-lg-5">
      <div className="row gx-lg-5">
        <div  className="col-lg-3 col-xxl-4 mb-5 ">
        <Item/>
        </div>
        <div className="col-lg-3 col-xxl-4 mb-5">
        <Item/>
        </div>
        <div className="col-lg-3 col-xxl-4 mb-5">
        <Item/>
        </div>
        <div className="col-lg-3 col-xxl-4 mb-5">
        <Item/>
        </div>
       
      </div>
    </div>
  </section>
</div>

      </>
    )
  }
}
