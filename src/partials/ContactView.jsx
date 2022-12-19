import React from "react";

import emailjs from "emailjs-com";
import { Form, Button } from "semantic-ui-react";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
// require('dotenv').config()

const SERVICE_ID = "service_cx4sjvu";
const TEMPLATE_ID = "template_0x7p9pi";
const USER_ID = "W_2SHf331gtm6yJqv";


// console.log(process.env.REACT_APP_WEBSITE_NAME);



// function ContactView() {
//     const handleOnSubmit = (e) => {
//         e.preventDefault();
//         emailjs.sendForm(SERVICE_ID,TEMPLATE_ID, e.target, USER_ID).then(
//         (result) => {
//             console.log(result.text);
//             Swal.fire({
//             icon: 'success',
//             title: 'Message Sent Successfully!',
//             text: 'You will hear back from us in the next 1 hour! ',
//             showConfirmButton: true,
//             confirmButtonColor: '#348FF3',
//             });
//         },
//         (error) => {
//             console.log(error.text);
//             Swal.fire({
//             icon: "error",
//             title: "Ooops, something went wrong",
//             text: error.text,
//             });
//         }
//         );
//         e.target.reset();
//     };
//     return (

//     <section className="relative mt-20 ">
//         <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
//             <h1 className="h2 mt-20 text-blitblue-400">Contact Us</h1>
//         </div>
//         <form  onSubmit={handleOnSubmit}>
//             <div className="relative max-w-6xl mx-auto px-4 sm:px-6 bg-blitblue-200 shadow-2xl rounded-2xl px-8 pt-6 pb-8 mb-4">
//             <div className="flex flex-wrap -mx-3 mb-6">
//                 <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//                 <label
//                     className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
//                     for="grid-first-name"
//                 >
//                     First Name
//                 </label>
//                 <input
//                     className="appearance-none block w-full bg-blitblue-100 text-white border-0 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blitblue-100 focus:border:bg-black"
//                     name="user_name"
//                     id="grid-first-name"
//                     type="text"
//                     placeholder="Jane"
//                     required="required"
//                 />
//                 {/* <p className="text-red-500 text-xs italic">
//                     Please fill out this field.
//                 </p> */}
//                 </div>
//                 <div className="w-full md:w-1/2 px-3">
//                 <label
//                     className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
//                     for="grid-last-name"
//                 >
//                     Last Name
//                 </label>
//                 <input
//                     className="appearance-none block w-full bg-blitblue-100 text-white border-0 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blitblue-100 focus:border:bg-black"
//                     id="grid-last-name"
//                     type="text"
//                     placeholder="Doe"
//                     required="required"
//                 />
//                 </div>
//             </div>
//             <div className="flex flex-wrap -mx-3 mb-6">
//                 <div className="w-full px-3">
//                 <label
//                     className="block uppercase tracking-wide text-blittext-100 text-xs font-bold mb-2"
//                     for="grid-password"
//                 >
//                     E-mail
//                 </label>
//                 <input
//                     className="appearance-none block w-full bg-blitblue-100 text-blittext-100 border-0 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blitblue-100 focus:border:bg-black"
//                     name="user_email"
//                     id="email"
//                     type="email"
//                     required="required"
//                 />
//                 <p className="text-blittext-100 text-xs italic">
//                     Some tips - as long as needed
//                 </p>
//                 </div>
//             </div>
//             <div className="flex flex-wrap -mx-3 mb-6">
//                 <div className="w-full px-3">
//                 <label
//                     className="block uppercase tracking-wide text-blittext-100 text-xs font-bold mb-2"
//                     for="grid-password"
//                 >
//                     Message
//                 </label>
//                 <textarea
//                     className=" no-resize appearance-none block w-full bg-blitblue-100 text-blittext-100 border-0 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blitblue-100 focus:border:bg-black h-48 resize-none"
//                     name="user_message"
//                     id="message"
//                     required="required"
//                 ></textarea>
//                 {/* <p className="text-gray-600 text-xs italic">
//                     Re-size can be disabled by set by resize-none / resize-y /
//                     resize-x / resize
//                 </p> */}
//                 </div>
//             </div>
//             <div className="md:flex md:items-center mb-5">

//             <div  className="md:w-1/3">
//                 <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500" required/>
//                 <label for="default-checkbox" class="text-sm ml-3 font-medium text-blittext-100">I agree to the <a href="#" class="text-blue-600 hover:underline">terms and conditions</a></label>
//             </div>
//             </div>
//             <div className="md:flex md:items-center">
//                 <div className="md:w-1/3">
//                 <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" type="submit">
//                     Submit</button>
//                 </div>
//                 <div className="md:w-2/3"></div>
//             </div>
//             </div>
//             </form>
//         </section>
//     );
// }

export default ContactView;
