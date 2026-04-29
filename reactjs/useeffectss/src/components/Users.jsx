import React, { useEffect, useState } from 'react'

const Users = () => {

    const [suser, setUser] = useState(null);

    const [userId, setUserId] = useState(1)

    // only one time call while page render
    useEffect(() => {
        let getUser = async () => {

            try {
                let obj = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
                    'method': "GET",
                    'headers': {
                        'content-type': 'application/json'
                    }
                })

                let response = await obj.json();
                console.log(response);

                if (response) {
                    setUser(response)
                } else {
                    setUser(null)
                }


            }
            catch (err) {
                console.log("err", err);
            }

        }

        setTimeout(() => {
            getUser()
        }, 1000)


    }, [userId])


    return (
        // wait 2 mins
        <>
            <button onClick={() => setUserId(userId + 1)}>change user ID {userId}</button >

            {
                suser && suser != null ?

                (
                    <div className="card" style={{ width: "18rem" }}>
                        <img src="https://img.magnific.com/free-photo/full-shot-travel-concept-with-landmarks_23-2149153258.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{suser.name} {suser.phone}</h5>
                            <p className="card-text">
                                {suser.address.street}
                            </p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                )

                :
                (
                    <p>No Record Found</p>
                )
}



        </>
    )
}

export default Users