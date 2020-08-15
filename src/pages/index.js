import React, { Component } from "react";
import fetch from "isomorphic-unfetch";

import Head from "next/head";

export default class extends Component {
  static async getInitialProps() {
    const res = await fetch(
      "https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=true&amp;land_success=true&amp;launch_year=2014"
    );
    const data = await res.json();
    let launch_year = Object.keys(data).map((value) => ({
      launch_year: value.launch_year,
      value,
    }));
    return {
      data,
      launch_year,
    };
  }

  render() {
    console.log(this.props.data);
    return (
      <main className="container">
        <Head>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
            integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu"
            crossorigin="anonymous"
          ></link>

          <title>SpaceX Launch Calender</title>
        </Head>

        <p>hdd</p>
        <button className="btn btn-primary">button</button>
        <div>{this.props.title}</div>
        <div>
          <img src={this.props.imageUrl} />
        </div>
      </main>
    );
  }
}
