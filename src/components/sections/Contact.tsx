import ContactForm from '../ui/contact-form';

// function isEmailValid(email: string){
//     const reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     return reg.test(email);
// }

export default function Contact(){

    return (
        <section id='contact'>
            <header className="flex flex-col items-center pt-20 pb-10 text-white">
            <h1 className="text-3xl text-center font-semibold mb-5">Reach me out</h1>
            <p className="text-center w-10/12 tracking-wide">Let&#39;s connect! If you have some doubts, tips or suggestions, do not leave without write a message for me.</p>
            </header>

            <ContactForm/>


            <hr className='m-auto w-11/12 mt-8'/>
      </section>
    )
}