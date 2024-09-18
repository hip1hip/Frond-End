// import React from "react";
import { useState } from "react";
import "./Body.css";

function Body() {
    const [state, setState] = useState({
        name: "",
        gender: "",
        birth: "",
        bio: "",
    });

    const handleOnChange = (e) => {
        console.log("현재 수정 대상 : ", e.target.name);
        console.log("수정값:", e.target.value);
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };
    // const [name, setName] = useState("");
    // const [gender, setGender] = useState("");
    // const [birth, setBorth] = useState("");
    // const [bio, setBio] = useState("");

    // const onChangeName = (e) => {
    //     setName(e.target.value);
    // };
    // const onChangeGender = (e) => {
    //     setGender(e.target.value);
    // };
    // const onChangeBirth = (e) => {
    //     setBorth(e.target.value);
    // };
    // const onChangeBio = (e) => {
    //     setBio(e.target.value);
    // };


    return (
        <>
            <div>
                <input
                    name="name"
                    value={state.name}
                    onChange={handleOnChange}
                    placeholder="이름">
                </input>
            </div>

            <div>
                <select name="gender" value={state.gender} onChang={handleOnChange}>
                    <option key={""}></option>
                    <option key={"남성"}>남성</option>
                    <option key={"여성"}>여성</option>
                </select>
            </div>
            <div>
                <input name="birth" type="date" value={state.birth} onChange={handleOnChange}></input>
            </div>
            <div>
                <textarea name="bio" value={state.bio} onChange={handleOnChange}></textarea>
            </div>
        </>


    );
}



export default Body;