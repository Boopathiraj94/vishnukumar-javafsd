import React, { useState } from 'react'

export const Register = () => {

    const [employee, setEmployee] = useState({
        empname: "",
        empemail: "",
        empphone: "",
        salary: 0
    })

    const [totalEmp, setEmp] = useState([])


    // [{},{},{},{}]
    let handleSubmit = (e) => {
        e.preventDefault();



        setEmp([...totalEmp, employee])

    }

    console.log(totalEmp);


    return (
        <>
            <form action="" onSubmit={handleSubmit}>

                <input type="text"
                    placeholder='enter name'
                    onChange={(e) => setEmployee({ ...employee, empname: e.target.value })}
                /> <br />

                <input type="email"
                    placeholder='enter email'
                    onChange={(e) => setEmployee({ ...employee, empemail: e.target.value })}
                /> <br />
                <input type="number"
                    placeholder='enter phone'
                    onChange={(e) => setEmployee({ ...employee, empphone: e.target.value })}
                /><br />
                <input type="number"
                    placeholder='enter salary'
                    onChange={(e) => setEmployee({ ...employee, salary: Number(e.target.value) })}
                /><br />

                <button type='submit'>submit</button>

            </form>

            <table border={1}>
                <thead>
                    <tr>
                        <th>SNo</th>
                        <th>Name</th>
                        <th>email</th>
                        <th>phone</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        totalEmp && totalEmp.length > 0 ? totalEmp.map((ele, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{ele.empname}</td>
                                <td>{ele.empemail}</td>
                                <td>{ele.empphone}</td>
                                <td>{ele.salary}</td>
                            </tr>

                        ))

                            :
                            (
                                <tr>
                                    <td colSpan={5} align='center'>No Record Found!!!</td>
                                </tr>
                            )


                    }
                </tbody>
            </table>
        </>
    )
}
