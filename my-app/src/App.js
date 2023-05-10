import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <form className="wrapper">
            <h2>Sign Up</h2>
            <section className="group">
                <input
                    type="text"
                    size="30"
                    className="input"
                    name="email"
                    required
                />
                <label htmlFor="email" className="label">
                    Name Of Company
                </label>
            </section>
            <section className="group">
                <input
                    type="text"
                    size="30"
                    className="input"
                    name="email"
                    required
                />
                <label htmlFor="email" className="label">
                    Name Of Employer
                </label>
            </section>
            <section className="group">
                <input
                    type="text"
                    size="30"
                    className="input"
                    name="email"
                    required
                />
                <label htmlFor="email" className="label">
                    Position
                </label>
            </section>
            <section className="group">
                <input
                    type="text"
                    size="30"
                    className="input"
                    name="email"
                    required
                />
                <label htmlFor="email" className="label">
                    Location
                </label>
            </section>
            <section className="group">
                <input
                    type="text"
                    size="30"
                    className="input"
                    name="email"
                    required
                />
                <label htmlFor="email" className="label">
                    Salary
                </label>
            </section>
            
            <button type="button" className="btn">
                SUBMIT
            </button>
            <span className="footer"></span>
        </form>
  );
}



export default App;
