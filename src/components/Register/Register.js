
import { Link } from 'react-router-dom';

const Register = () => {


    const handleRegistation = e => {
        e.preventDefault();
    }



    return (
        <div className="m-5">

            <form onSubmit={handleRegistation}>
                <h3 className="text-primary my-5">Please Register</h3>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail3" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword3" />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
            <Link to="/login">Already Registered?</Link>
        </div>
    );
};

export default Register;