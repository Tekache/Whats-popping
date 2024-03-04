function Signup() {
    return(
        <>
        <div>
            <h1>Organiser Signup</h1>
            <form>
                <label htmlFor="name">
                    Full name
                    <input type="text" id="name" name="name" placeholder="Enter full name here" required/>
                </label>
                <label htmlFor="email">
                    Email
                    <input type="email" id="email" name="email" placeholder="Enter email here" required/>
                </label>
                <label htmlFor="phone">
                    Phone Number
                    <input type="phone" id="phone" name="phone" placeholder="Enter phone number here" required/>
                </label>
                <label htmlFor="address">
                    Residential Address
                    <input type="address" id="address" name="address" placeholder="Enter address here" required/>
                </label>
                <button>Signup</button>
                <p></p>
            </form>

        </div>
        </>
    )
}
export default Signup;