// import React, { Component } from 'react';
//
// class ItemForm extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       title: '',
//       description: '',
//       maker: '',
//       year: '',
//       price: ''
//       };
//   }
//
//   onSubmit(event) {
//     event.preventDefault();
//
//     this.props.onSubmit(this.state);
//   }
//
//   render() {
//     return (
//       <div className="row">
//         <form onSubmit={this.onSubmit.bind(this)} className="col s6">
//           <div className="input-field">
//             <input
//               placeholder="Title"
//               value={this.state.title}
//               onChange={e => this.setState({ title: e.target.value })}
//             />
//           </div>
//           <div className="input-field">
//             <input
//               placeholder="Description"
//               value={this.state.description}
//               onChange={e => this.setState({ description: e.target.value})}
//             />
//           </div>
//           <div className="input-field">
//             <input
//               placeholder="Maker"
//               value={this.state.maker}
//               onChange={e => this.setState({ maker: e.target.value})}
//             />
//           </div>
//           <div className="input-field">
//             <input
//               placeholder="Year"
//               type="number"
//               value={this.state.year}
//               onChange={e => this.setState({ year: e.target.value})}
//             />
//           </div>
//           <div className="input-field">
//             <input
//               placeholder="Price"
//               type="number"
//               value={this.state.price}
//               onChange={e => this.setState({ price: e.target.value})}
//             />
//           </div>
//           <div className="errors">
//             {this.props.errors.map(error => <div key={error}>{error}</div>)}
//           </div>
//           <button className="btn">Submit</button>
//         </form>
//       </div>
//
//     );
//   }
// }
//
// export default ItemForm;
