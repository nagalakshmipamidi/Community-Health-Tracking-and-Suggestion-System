import React from 'react';
import './Profile.css';

function Profile() {
  return (
    <div className="App">
      <header className="header">
        <div className="logo">LOGO</div>
        <nav className="nav">
          <button>Community</button>
          <button>Profile</button>
          <button>Log Out</button>
          <button>Profile</button>
        </nav>
      </header>

      <h1 classname = "profileheader">Profile</h1>
      <main className="profile">
        <section className="basic-info">
          <h2>Basic Info</h2>
          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="Your email address" />
          <input type="password" placeholder="Your password" />
        </section>

        <section className="bmi">
          <h2>BMI</h2>
          <input type="number" placeholder="Enter Height (in cms)" />
          <input type="number" placeholder="Enter Weight (in kgs)" />
          <button>Calculate BMI</button>
          <div className="bmi-result">BMI</div>
        </section>

        <section className="extra-info">
          <h2>Extra Info</h2>
          <div className="activity-excercise">
            <div className="activity-level">
                <h3>Activity Level</h3>
                <label>
                    <input type="checkbox"  className='checkbox'/>
                        Little to No
                </label>
                <label>
                    <input type="checkbox" className='checkbox'/>
                        Moderately
                </label>
                <label>
                    <input type="checkbox" className='checkbox'/>
                        Advanced
                </label>
            </div>
            <div className="type-of-exercise">
                <h3>Type of Exercise</h3>
                <label>
                    <input type="checkbox" className='checkbox'/>
                        Running
                </label>
                <label>
                    <input type="checkbox" className='checkbox'/>
                        Gym
                </label>
                <label>
                    <input type="checkbox" className='checkbox'/>
                        Cycling
                </label>
            </div>
          </div>
        </section>

        <section className="your-journey">
          <h2>Your Journey</h2>
          <textarea placeholder="Give a detailed process of your journey"></textarea>
          <button className='button1'>Share with others</button>
        </section>

        <section className="your-progress">
          <h2>Your Progress</h2>
          <div className="progress-chart">
            {/* Placeholder for progress chart */}
            <svg viewBox="0 0 32 32">
              <circle r="16" cx="16" cy="16"></circle>
            </svg>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Profile;
