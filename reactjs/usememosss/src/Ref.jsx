import React, { useEffect, useRef } from 'react'

export const Ref = () => {

    const nameRef = useRef("")
    const emailRef = useRef("")
    const phoneRef = useRef("")
    const boxRef = useRef("")
    const colorRef = useRef("")


    let handleSubmit = (e) => {
        e.preventDefault()

        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(phoneRef.current.value);
        nameRef.current.style.background = "red"
        console.log();


    }


    useEffect(() => {
        emailRef.current.focus()
    }, [])


    let handleFocus = () => {
        nameRef.current.focus()
        boxRef.current.style.border = "2px solid red"
        boxRef.current.style.width = "300px"
        boxRef.current.style.height = "300px"

    }

    let handleCicle = () => {
        boxRef.current.style.borderRadius = "50%"
    }

    let handleColr = () => {
        console.log(colorRef.current.value);

        // boxRef.current.style.background = "blue"
        boxRef.current.style.background = colorRef.current.value
    }

    let handleMovement = () => {
        boxRef.current.style.transform = "translateX(500px)"
        boxRef.current.style.transition = "2s"
    }
    let left = 0
    let top = 0;
    document.addEventListener("keyup", (event) => {
        // console.log(event);

        console.log(event.key);

        switch (event.key) {
            case "ArrowRight":
                left += 10
                break;
            case "ArrowLeft":
                left -= 10
                break;
            case "ArrowDown":
                top += 10
                break;
            case "ArrowUp":
                top -= 10
                break;

            default:
                break;
        }

        console.log("left",left);
        console.log("top",top);

        boxRef.current.style.left = left+"px"
        boxRef.current.style.top = top+"px"
        

    })

    document.addEventListener("click",(event)=>{
        console.log(event.clientX);
        console.log(event.clientY);
         boxRef.current.style.left = event.clientX+"px"
        boxRef.current.style.top = event.clientY+"px"
        boxRef.current.style.transition = "2s"
    })


    return (
        <>

            <p>useRef</p>
            <button onClick={handleFocus}>boxDesign</button>
            <button onClick={handleCicle}>cicle</button>
            <button onClick={handleColr}>Fill Colur</button>
            <button onClick={handleMovement}>Movement</button>

            <input type="color" name="" id="" ref={colorRef} />


            <form action="" onSubmit={(e) => handleSubmit(e)}>
                <input type="text" ref={nameRef} placeholder='Enter name' />
                <input type="text" ref={emailRef} placeholder='Enter Email' />
                <input type="text" ref={phoneRef} placeholder='Enter phone' />
                <button type='submit'>Submit</button>
            </form>

            <div className="box" ref={boxRef}>

            </div>

        </>
    )
}
