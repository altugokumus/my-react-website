import React from 'react'

const Contact = () => {
  return (
    <>
    <div className='contactmain'>
    <div className='contact'>
        <p><strong>Tel: </strong>0553 409 83 30</p>
        <p><strong>E-mail: </strong>altugokumus@gmail.com</p>
    </div>
    <div className='formcontainer'>
        <form action="none" >
            <input placeholder='Name' type="text" />
            <input placeholder='Email' type="email" />
            <textarea placeholder='Message' name="message" id="" cols="30" rows="10"></textarea>
            <button>Send</button>
        </form>
    </div>
</div>
<footer>
        <div className='icons'>
            <a target={"_blank"} href="https://www.linkedin.com/in/altu%C4%9F-okumu%C5%9F-a2304644/"><img width={25} src="linkedin_icon.png" alt="linkedin" /></a>
            <a target={"_blank"} href="https://github.com/altugokumus"><img width={25} src="github_icon.png" alt="linkedin" /></a>
            <a target={"_blank"} href="https://twitter.com/altgokms"><img width={25} src="twitter_icon.png" alt="linkedin" /></a>
        </div>
        <p>Copyrights © 2023 Designed by Altug Okumus</p>
    </footer>
</>
  )
}

export default Contact