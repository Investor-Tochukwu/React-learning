function Intro() {
    const userName = "Kelechi John";
    const age = 30;
    const skills = ["HTML", "CSS", "JavaScript", "React"]

    return(
        <div>
            <h2>
             {userName}
            </h2>

            <p>
            I am {userName}. I am {age} years old. I have the following skills: {skills.join(", ")}.
            </p>
        </div>
    )
}

export default Intro;