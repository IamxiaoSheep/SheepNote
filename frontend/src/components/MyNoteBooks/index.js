import "./MyNoteBooks.css";
import { NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllNotebooks } from "../../store/notebooks";
function MyNoteBook() {
  const dispatch = useDispatch();
  const [info, setInfo] = useState("Hello");

  const checkNotes = useSelector((state) => state.notebook);

  const user = useSelector((state) => state.session);
  const information = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    dispatch(getAllNotebooks());
  }, [dispatch]);

  const currentNoteBooks = Object.values(checkNotes).map((el) => (
    <li key={el?.notetitle}>{el?.notetitle}</li>
  ));

  return (
    <div className="notebook">
      <div className="left">
        <div className="username">{currentNoteBooks}</div>
        <Link className="homeLink" to="/">
          Home
        </Link>
        <Link className="homeLink" to="/">
          Sheep Info
        </Link>
        <Link className="homeLink" to="/">
          LogOut
        </Link>
      </div>
      <div className="middle">
        <label>Enter value : </label>
        <input type="textarea" name="textValue" onChange={information} />
      </div>
      <div className="right"></div>
    </div>
  );
  // return (
  //   <>
  //     <div id="layout" className="content pure-g">
  //       <div id="nav" className="pure-u">
  //         <div className="nav-inner">
  //           <button className="primary-button pure-button">Compose</button>

  //           <div className="pure-menu">
  //             <ul className="pure-menu-list">
  //               <li className="pure-menu-item"></li>
  //               <li className="pure-menu-item">
  //                 <p href="#" className="pure-menu-link">
  //                   Important
  //                 </p>
  //               </li>
  //               <li className="pure-menu-item">
  //                 <p href="#" className="pure-menu-link">
  //                   Sent
  //                 </p>
  //               </li>
  //               <li className="pure-menu-item">
  //                 <p href="#" className="pure-menu-link">
  //                   Drafts
  //                 </p>
  //               </li>
  //               <li className="pure-menu-item">
  //                 <p href="#" className="pure-menu-link">
  //                   Trash
  //                 </p>
  //               </li>
  //               <li className="pure-menu-heading">Labels</li>
  //               <li className="pure-menu-item">
  //                 <p href="#" className="pure-menu-link">
  //                   <span className="email-label-personal"></span>Personal
  //                 </p>
  //               </li>
  //               <li className="pure-menu-item">
  //                 <p href="#" className="pure-menu-link">
  //                   <span className="email-label-work"></span>Work
  //                 </p>
  //               </li>
  //               <li className="pure-menu-item">
  //                 <p href="#" className="pure-menu-link">
  //                   <span className="email-label-travel"></span>Travel
  //                 </p>
  //               </li>
  //             </ul>
  //           </div>
  //         </div>
  //       </div>

  //       <div id="list" className="pure-u-1">
  //         <div className="email-item email-item-selected pure-g">
  //           <div className="pure-u"></div>
  //           <form>
  //             <div className="pure-u-3-4">
  //               <h5 className="email-name">Tilo Mitra</h5>
  //               <input className="email-subject">Hello from Toronto</input>
  //               <ul>{currentNoteBooks}</ul>
  //             </div>
  //           </form>
  //         </div>

  //         <div className="email-item email-item-unread pure-g">
  //           <div className="pure-u"></div>

  //           <div className="pure-u-3-4">
  //             <h5 className="email-name">Eric Ferraiuolo</h5>
  //             <h4 className="email-subject">Re: Pull Requests</h4>
  //             <p className="email-desc">
  //               Hey, I had some feedback for pull request #51. We should center
  //               the menu so it looks better on mobile.
  //             </p>
  //           </div>
  //         </div>

  //         <div className="email-item pure-g">
  //           <div className="pure-u"></div>

  //           <div className="pure-u-3-4">
  //             <h5 className="email-name">Reid Burke</h5>
  //             <h4 className="email-subject">Re: Design Language</h4>
  //             <p className="email-desc">
  //               Excepteur sint occaecat cupidatat non proident, sunt in culpa.
  //             </p>
  //           </div>
  //         </div>

  //         <div className="email-item pure-g">
  //           <div className="pure-u"></div>

  //           <div className="pure-u-3-4">
  //             <h5 className="email-name">Yahoo! Finance</h5>
  //             <h4 className="email-subject">
  //               How to protect your finances from winter storms
  //             </h4>
  //             <p className="email-desc">
  //               Mauris tempor mi vitae sem aliquet pharetra. Fusce in dui purus,
  //               nec malesuada mauris.
  //             </p>
  //           </div>
  //         </div>

  //         <div className="email-item pure-g">
  //           <div className="pure-u"></div>

  //           <div className="pure-u-3-4">
  //             <h5 className="email-name">Yahoo! News</h5>
  //             <h4 className="email-subject">Summary for April 3rd, 2021</h4>
  //             <p className="email-desc">
  //               We found 10 news articles that you may like.
  //             </p>
  //           </div>
  //         </div>
  //       </div>

  //       <div id="main" className="pure-u-1">
  //         <div className="email-content">
  //           <div className="email-content-header pure-g">
  //             <div className="pure-u-1-2">
  //               <h1 className="email-content-title">Hello from Toronto</h1>
  //               <p className="email-content-subtitle">
  //                 From <p to="/">Tilo Mitra</p> at{" "}
  //                 <span>3:56pm, April 3, 2021</span>
  //               </p>
  //             </div>

  //             <div className="email-content-controls pure-u-1-2">
  //               <button className="secondary-button pure-button">Reply</button>
  //               <button className="secondary-button pure-button">
  //                 Forward
  //               </button>
  //               <button className="secondary-button pure-button">
  //                 Move to
  //               </button>
  //             </div>
  //           </div>

  //           <div className="email-content-body">
  //             <p>
  //               Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
  //               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
  //               enim ad minim veniam, quis nostrud exercitation ullamco laboris
  //               nisi ut aliquip ex ea commodo consequat.
  //             </p>
  //             <p>
  //               Duis aute irure dolor in reprehenderit in voluptate velit
  //               essecillum dolore eu fugiat nulla pariatur. Excepteur sint
  //               occaecat cupidatat non proident, sunt in culpa qui officia
  //               deserunt mollit anim id est laborum.
  //             </p>
  //             <p>
  //               Aliquam ac feugiat dolor. Proin mattis massa sit amet enim
  //               iaculis tincidunt. Mauris tempor mi vitae sem aliquet pharetra.
  //               Fusce in dui purus, nec malesuada mauris. Curabitur ornare arcu
  //               quis mi blandit laoreet. Vivamus imperdiet fermentum mauris, ac
  //               posuere urna tempor at. Duis pellentesque justo ac sapien
  //               aliquet egestas. Morbi enim mi, porta eget ullamcorper at,
  //               pharetra id lorem.
  //             </p>
  //             <p>
  //               Donec sagittis dolor ut quam pharetra pretium varius in nibh.
  //               Suspendisse potenti. Donec imperdiet, velit vel adipiscing
  //               bibendum, leo eros tristique augue, eu rutrum lacus sapien vel
  //               quam. Nam orci arcu, luctus quis vestibulum ut, ullamcorper ut
  //               enim. Morbi semper erat quis orci aliquet condimentum. Nam
  //               interdum mauris sed massa dignissim rhoncus.
  //             </p>
  //             <p>
  //               Regards,
  //               <br />
  //               Tilo
  //             </p>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // );
}

export default MyNoteBook;
