function Header() {
    return (
        <div className="bg-primary-dark h-14 flex place-content-between text-white sticky top-0">
            <h1 className="m-3 font-bold md:pl-36">STARBUCKS® REWARDS</h1>
            <button className="border rounded-full py-0.5 px-5 my-3 mr-3 md:hidden">Join in the app</button>
        </div>
    );
}

export default Header;