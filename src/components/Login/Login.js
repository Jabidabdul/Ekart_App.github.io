import React, {
    useCallback,
    useContext,
    useMemo,
    useReducer,
    useState
} from "react";
import "./Login.css";

const LoginForm = (props) => {
    // let [name, setName] = useState('')
    // let [email, setemail] = useState('')
    // let [pass, setpass] = useState('')
    // let [npass, setnpass] = useState('')
    // let [state, setstate] = useState('')

    // let changeName = (e) => {
    //     setName(e.target.value)
    // }
    // let changeEmail = (e) => {
    //     setemail(e.target.value)
    // }
    // let changePass = (e) => {
    //     setpass(e.target.value)
    // }
    // let changenPass = (e) => {
    //     setnpass(e.target.value)
    // }
    // let changeState = (e) => {
    //     setstate(e.target.value)
    // }

    let [valueState, setValue] = React.useState({
        name: "",
        email: "",
        pass: "123",
        npass: "123",
        state: "Assam"
    });

    let [err, seterr] = React.useState(false);
    let [errtext, seterrtxt] = React.useState("");

    function handleInputChange(e) {
        setValue({
            ...valueState,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (
            !valueState.name ||
            !valueState.email ||
            !valueState.pass ||
            !valueState.npass
        ) {
            seterr(true);
            seterrtxt("Some fields are missing");
        } else if (valueState.name.length < 2) {
            seterr(true);
            seterrtxt("Name is too small");
        } else if (valueState.pass !== valueState.npass) {
            seterr(true);
            seterrtxt("Values do not match");
        } else {
            seterr(false);
            props.changeName(valueState.name);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="input_group">
                <label className="input_label red_star">
                    <span className="label_text">Name</span>
                </label>
                <input
                    className="input "
                    name="name"
                    required
                    value={valueState.name}
                    onChange={handleInputChange}
                />
            </div>
            <div className="input_group">
                <label className="input_label red_star">
                    <span className="label_text">Email</span>
                </label>
                <input
                    className="input"
                    name="email"
                    required
                    type="email"
                    value={valueState.email}
                    onChange={handleInputChange}
                />
            </div>
            <div className="input_group">
                <label className="input_label red_star">
                    <span className="label_text">Password</span>
                </label>
                <input
                    className="input"
                    name="pass"
                    type="password"
                    value={valueState.pass}
                    required
                    onChange={handleInputChange}
                />
            </div>
            <div className="input_group">
                <label className="input_label red_star">
                    <span className="label_text">Re eneter your password</span>
                </label>
                <input
                    className="input"
                    name="npass"
                    type="password"
                    value={valueState.npass}
                    required
                    onChange={handleInputChange}
                />
            </div>
            <div className="input_group">
                <label className="input_label">
                    <span className="label_text">State</span>
                </label>
                <select onChange={handleInputChange} value={valueState.state}>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Goa">Goa</option>
                    <option value="Punjab">Punjab</option>
                </select>
            </div>
            {err ? <div className="err">{errtext}</div> : null}
            <button
                type="submit"
                value="Submit"
                className="button button_wide"
                onClick={handleSubmit}
            >
                Create your account
            </button>
        </form>
    );
};

const Login = (props) => {
    return (
        <div className="login-wrapper">
            <div className="login-form">
                <div className="banner-img">
                    <img
                        alt="img"
                        src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2021/7/1/d07fff8e-c616-44ae-a01d-f0163c2e743c1625160833447-Banner-Hamburger-500--1-.jpg"
                    />
                </div>
                {/* FORM ELEMENT STARTS HERE */}
                <div className="form-container">
                    <LoginForm changeName={props.changeData} />
                </div>
            </div>
        </div>
    );
};

export default Login;
