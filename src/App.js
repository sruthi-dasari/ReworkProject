
import './App.css'

import {Component} from 'react'

class App extends Component {
  state = {
    
  }
  
  render() {

    return (
      <div className="app-container">
        <div className='nav-bar'>
          <div className='logo-container'>
            <img src = "./Images/Logo.png" alt = "logo"/>
          </div>
          <button type='button' className='get-btn'>Get for free</button>
        </div>
    
        <div className='home-container'>
          <div className='heading-para-btn-container'>
          <h1 className='home-heading'>One Task at a Time</h1>
        <p className='home-para'>Celebrate the joy of accomplishment with an app designed to track your progress, motivate
          your efforts and celebrate your successes.
        </p>
        <button className='get-btn'>Get for free</button>
          </div>
        
        </div>

        <div className='teams-container'>
          <p className='teams-para'>Trusted by worlds most innovative team</p>
          <img src = "./Images/Frame 21.png" alt = "logo ticker"/>
        </div>

        <div className='grid-container'>
          <div className='grid-text-container'>
          <h1 className='grid-heading'>Everything you need</h1>
          <p className='grid-para'>Enjoy customizable lists, team work tools, and smart tracking all in one place. Set tasks, get reminders, and see 
            your progress simply and quickly.
          </p>
          </div>
          <div className='grid-inner-container'>
            <div className='grid-inner-block'>
              <img src = "./Images/Frame leaf.png" alt = "frame leaf"/>
              <h1 className='grid-inner-heading'>Integration ecosystem</h1>
              <p className='grid-inner-para'>Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one page.</p>
            </div>
            <div className='grid-inner-block'>
              <img src = "./Images/Frame leaf.png" alt = "frame leaf"/>
              <h1 className='grid-inner-heading'>Integration ecosystem</h1>
              <p className='grid-inner-para'>Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one page.</p>
            </div>
            <div className='grid-inner-block'>
              <img src = "./Images/Frame leaf.png" alt = "frame leaf"/>
              <h1 className='grid-inner-heading'>Integration ecosystem</h1>
              <p className='grid-inner-para'>Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one page.</p>
            </div>
          </div>
        </div>

        <div className='product-container'>
        <div className='product-text-container'>
          <h1 className='product-heading'>Intuitive Interface</h1>
          <p className='product-para'>Enjoy customizable lists, team work tools, and smart tracking all in one place. Set tasks, get reminders, and see 
            your progress simply and quickly.
          </p>
          </div>
          <img src = "./Images/App Night.png" alt = "app night"/>
        </div>

        <div className='faq-container'>
          <h1 className='faq-heading'>Frequently asked questions</h1>
          <img src = "./Images/FAQ'S.png" alt = "faqs"/>
        </div>


        <div className='sign-up-container'>
          <h1 className='sign-up-heading'>Get instant access</h1>
          <p className='sign-up-para'>Celebrate the joy of accomplishment with an app designed to track your progress, motivate
          your efforts and celebrate your successes.</p>
          <div className='input-container'>
            <input type = "text" placeholder='name@email.com' className='input-text-container'/>
            <button className='get-btn'>Get access</button>
          </div>
        </div>

        <div className='footer-container'>
          <p className='footer-para'>@2024 Your Company, Inc. Allrights reserved</p>
          <img src = "./Images/Frame 26.png" alt = "social icons"/>
        </div>
        
      </div>
    )
  }
}


export default App
