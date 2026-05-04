import React, { useReducer, useState } from 'react'



let curdFun = (customerList, action) => {

    switch (action.type) {
        case "save":
            return [...customerList, action.payload]

        case "update":
            console.log(action);
            // debugger
            const ul = customerList.map((ele, index) => (index == action.payload.eid) ? (action.payload.customer) : (ele))

            return [...ul]

        case "delete":
            const fl = customerList.filter((ele, index) => index != action.payload)
            return [...fl]
        default:
            break;
    }
}

const Register = () => {

    let cs = {
        cname: "",
        email: "",
        phone: "",
        password: ""
    }

    const [customer, setCustomer] = useState(cs)

    const [editIdx, setEditIdx] = useState(null)

    const [customerList, dispatch] = useReducer(curdFun, [])



    let register = (e) => {
        e.preventDefault()
        // debugger
        if (editIdx == null) { 
            dispatch({ type: 'save', payload: customer })
        }
        else {

            dispatch({ type: 'update', payload: { customer, eid: editIdx } })

            setEditIdx(null)
        }

    }

    let editFun = (ele, idx) => {
        console.log(ele, idx);
        setCustomer(ele)
        setEditIdx(idx)
    }

    console.log("customer=>", customer);
    console.log(customerList);

    return (
        <>

            <form action="" onSubmit={(e) => register(e)}>
                <label htmlFor="">Name</label><br />
                <input type="text"
                    placeholder='Ex.john'
                    value={customer.cname}
                    onChange={(e) => setCustomer({ ...customer, cname: e.target.value })} /> <br />
                <label htmlFor="">Email</label><br />
                <input type="email"
                    placeholder='Ex.john@gmail.com'
                    value={customer.email}
                    onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
                /> <br />
                <label htmlFor="">Phone</label><br />
                <input type="number" placeholder='Ex.9565756756'
                    value={customer.phone}
                    onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                /> <br />
                <label htmlFor="">Password</label><br />
                <input type="password" placeholder='Ex.XXXX'
                    value={customer.password}
                    onChange={(e) => setCustomer({ ...customer, password: e.target.value })}
                /> <br />

                <button type='submit' >Submit</button>
            </form>

            <table>
                <thead>
                    <tr>
                        <th>Sno</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Password</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        customerList && customerList.length > 0 ? customerList.map((ele, idx) => (
                            <tr>
                                <td>{idx + 1}</td>
                                <td>{ele.cname}</td>
                                <td>{ele.email}</td>
                                <td>{ele.phone}</td>
                                <td>{ele.password}</td>
                                <td>
                                    <button
                                        onClick={() => editFun(ele, idx)}
                                    >Update</button>
                                    <button
                                        onClick={() => dispatch({ type: "delete", payload: idx })} >Delete</button>
                                </td>
                            </tr>
                        ))

                            :
                            (
                                <tr>
                                    <td >No Record Found</td>

                                </tr>
                            )
                    }

                </tbody>
            </table>
        </>
    )
}

export default Register