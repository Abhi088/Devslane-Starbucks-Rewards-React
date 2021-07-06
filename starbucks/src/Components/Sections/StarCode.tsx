function StarCodes() {
    return (
        <div className="mt-18 px-4 md:mt-32 md:space-y-40 md:max-w-1/2 md:ml-60 md:mb-36">
            <div className="flex flex-col space-y-5">
                <h1 className="text-2xl font-medium md:text-4xl">Star Codes</h1>
                <p className="font-medium">Yesssss. You’ve got Stars in your hand. Enter your code here and we’ll add Stars to
                    your
                    account.</p>
                <form className="flex flex-col space-y-4">
                    <input className="border rounded-md p-2 w-full" name="starcode" placeholder="Enter your Star Code" />
                    <button className="self-end border rounded-2xl px-5 py-1 w-min">Submit</button>
                </form>
                <p>Have a receipt but don't have a code?<br />
                    Go to <a href=" #" className="underline text-primary-medium">starbucks-stars.com</a> opens in new window to
                    upload
                    your receipt and collect your Stars.</p>
            </div>
            <div className="flex flex-col mt-16 space-y-4">
                <h1 className="text-2xl font-medium md:text-4xl">Questions?</h1>
                <p>We want to help in any way we can. You can ask your barista anytime or we’ve answered the most commonly
                    asked questions <a href="#" className="underline text-primary-medium">right over here</a>
                </p>
            </div>
        </div>
    );
}

export default StarCodes;