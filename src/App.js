import React from 'react';
import { BrowserRouter as Router, HashRouter, MemoryRouter, StaticRouter, Route, NavLink, Switch, Redirect, Prompt, BrowserRouter} from 'react-router-dom';
import './App.css';

// const isActiveFunc = (match, location) => {
//   console.log(match, location);
//   return match;
// }

// const Header = (match) => (
//   <div className="header">
//     <Route path="/:page" render={({match}) => (<h1>{match.params.page} header</h1>)}/>
//   </div>
// )

// const Content = (match) => (
//   <div className="content">
//     <Route path="/:page" render={({match}) => (<p>{match.params.page} content</p>)}/>
//   </div>
// )

// const Links = () => (
//   <nav>
//     <NavLink to="/home ">Home</NavLink>
//     <NavLink to="/about">About</NavLink>
//     {/* <Header />
//     <Content /> */}
//     {/* <NavLink to="/?id=123">Inline</NavLink>
//     <NavLink to={{pathname: '/', search:'id=456'}}>Object</NavLink>
//     <NavLink to="/pageNotFound">Page Not Found</NavLink> */}
//     {/* <NavLink exact activeClassName="active" to="/">Home</NavLink>
//     <NavLink activeStyle={{color: 'green'}} to={{pathname: '/about'}}>About</NavLink>
//     <NavLink isActive={isActiveFunc}activeClassName="active" replace to="/contact">Contact</NavLink> */}
//   </nav>
// )

// const Home = () => (<h1>Home</h1>)
// const Menu = () => (
//   <div>
//     <h1>Menu</h1>
//     <NavLink to="/menu/food">Food</NavLink>
//     <NavLink to="/menu/drinks">Drinks</NavLink>
//     <NavLink to="/menu/sides">Sides</NavLink>
//     <Route path="/menu/:section" render={({match}) =>  (<h2>{match.params.section}</h2>)}/>
//   </div>
// )

// class Form extends React.Component{
//   state={dirty: false}
//   setDirty = () => this.setState({dirty: true})

//   render(){
//     return(
//       <div>
//         <h1>Form</h1>
//         <input type="text" onInput={this.setDirty}/>
//         <Prompt 
//           when={this.state.dirty}
//           message="Data will be lost!"
//         />
//       </div>
//     )
//   }
// }

const LinksRoutes = () => (
  <div>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/about">About</NavLink>
    <Route exact path="/" render={() => <h1>Home</h1>} />
    <Route path="/about" render={() => <h1>About</h1>}/>
  </div>
)

const forceRefresh = () => {
  console.log(new Date());
  return true;
}
const BrowserRouterApp = () => (
  <BrowserRouter forceRefresh={forceRefresh()}>
    <LinksRoutes />
  </BrowserRouter>
)
const HashRouterApp = () => (
  <HashRouter hashType="slash">
    <LinksRoutes />
  </HashRouter>
)
const MemoryRouterApp = () => (
  <MemoryRouter initialEntries={['/', '/about']} initialIndex={1}>
    <LinksRoutes />
  </MemoryRouter>
)
const StaticRouterApp = () => (
  // MEANT TO BE SERVER SIDE
  <StaticRouter location="/about" context={{}}>
    <LinksRoutes />
  </StaticRouter>
)

// const App = (props ) => (
//   <Router>
//     <div>
//       {/* <Links/> */}
//       {/* <Switch> */}
//         {/* <Route exact path="/" component={Home}/> */}
//         {/* <Route path="/about" children={({match}) => match && <h1>About</h1>}/> */}
//         {/* <Route exact path="/:a(\d+)/:b" render={
//           ({match}) => <h1>
//             paramA: {match.params.a || 'Home'}<br />
//             paramB: {match.params.b}
//           </h1>
//         }/> */}
//         {/* <Route path="/" render={({match, location}) => 
//           <div>
//             <p>Root</p>
//             <p>{JSON.stringify(match)}</p>
//             <p>{JSON.stringify(location)}</p>
//             <p>{new URLSearchParams(location.search).get('id')}</p>
//           </div>
//         }/>
//         <Route path="/about" render={() => <h1>About</h1>}/>
//         <Route path="/contact" render={() => <h1>Contact</h1>}/>
//         <Route render={() => <h1>Page not Found</h1>}/>
//         <Route path="/:itemid" render={({match}) => <h1>items: {match.params.itemid}</h1>}/> */}
//         {/* <Header />
//         <Content /> */}
//       {/* </Switch> */}
//       {/* <NavLink to="/">Home</NavLink>
//       <NavLink to="/menu">Menu</NavLink>
//       <Route exact path="/" component={Home}/>
//       <Route path="/menu" component={Menu}/> */}
//       {/* <NavLink to="/">Home</NavLink>
//       <NavLink to="/form">Form</NavLink>
//       <Route exact path="/" component={Home} />
//       <Route path="/form" component={Form} /> */}
//     </div>
//   </Router>
// )


export default StaticRouterApp;
