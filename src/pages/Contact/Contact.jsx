
const Contact = () => {
    return (
        <div className="hero min-h-screen p-2 xl:p-0">

            <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                <form className="card-body shadow-xl rounded-2xl">
                    <h1 className="text-2xl text-center font-bold my-4 ">Contact Us</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Enter Your Name</span>
                        </label>
                        <input  autoFocus name="name" type="text" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Enter Your Message</span>
                        </label>
                        <input  type="password" placeholder="message" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6 space-y-3">
                        <button className="btn btn-primary">Send Email</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact