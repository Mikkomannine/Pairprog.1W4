import Title from "./Title";
import './Registration.css';

const Registration = () => {
    return (
        <div>
            <section className="section" id="registration">
                <Title title="join our" span="community" />
                <div className="section-center featured-center">
                    <form action="" className="registration-form">
                        <div className="form-group">
                            <label htmlFor="name">name</label>
                            <input type="text" id="name" className="form-control" placeholder="john smith" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">email</label>
                            <input type="email" id="email" className="form-control" placeholder="Your email here" />

                        </div>
                        <div className="form-group">
                            <label htmlFor="password">password</label>
                            <input type="password" id="password" className="form-control" placeholder="Your password here" />
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};
export default Registration;
