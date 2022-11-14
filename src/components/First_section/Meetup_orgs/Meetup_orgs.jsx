import React, { Component } from "react";
import s from "./Meetup_orgs.module.css";
// const Meetup_orgs = () => {
//   return (
//     <div className={s.meetup_orgs}>
//       <img src={this.props.image} alt="" />
//       <h3>{this.props.h3}</h3>
//       <p>{this.props.p}</p>
//       <a href="#s">START NOW</a>
//     </div>
//   );
// };
class Meetup_orgs extends Component {
  render() {
    return (
      <div className={s.meetup_orgs}>
        <img src={this.props.image} alt="" />
        <a href="#s">{this.props.h3}</a>
        <p>{this.props.p}</p>
      </div>
    );
  }
}
export default Meetup_orgs;
