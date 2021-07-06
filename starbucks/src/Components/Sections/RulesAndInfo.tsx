function RulesAndInfo() {
    return (
        <div className="flex flex-col space-y-7 mt-18 pb-8 px-4 md:px-10 pt-6 bg-secondary-light">
            <p className="font-semibold">At participating stores. Restrictions apply.</p>
            <div className="text-sm space-y-7 md:space-y-0 md:flex md:space-x-10">
                <div className="flex flex-col md:flex-1 space-y-3">
                    <h1 className="font-bold text-gray-500">EARNING STARS</h1>
                    <p>Stars cannot be earned on purchases of alcohol, Starbucks Cards or
                        Starbucks Card reloads.</p>
                    <p>Earn 1 Star per 1$ spent when you scan your member barcode in the app, then
                        pay with cash, credit/debit
                        cards or mobile wallets at participating stores.. You can also earn 1 Star per 1$ spent when you
                        link a
                        payment method and pay directly through the app.
                    </p>
                    <p>Earn 2 Stars per 1$ spent when you load funds and pay with your digital
                        Starbucks Card in the app. You
                        can also earn 2 Stars per $1 spent when you pay in-person at a participating store with your
                        registered
                        physical Starbucks Card or scan your member barcode in the app, and then use any physical Starbucks
                        Card
                        (regardless of whether it is registered) to complete the purchase.
                    </p>
                </div>
                <div className="flex flex-col md:flex-1 space-y-3">
                    <h1 className="font-bold text-gray-500">TERMS OF USE</h1>
                    <p>For full program details visit <a className="underline text-primary-medium"
                        href="#">starbucks.com/rewards/terms</a>
                    </p>
                    <p>* Earn 1 Star per $1 when digitally loading your Starbucks Card with your
                        Starbucks® Rewards Visa® Card:
                        See your Card Rewards Program Agreement for more details.
                    </p>
                    <p>Starbucks® Rewards benefits are available at participating Starbucks stores. Not
                        all
                        the stores have the
                        ability to honor Rewards at this time. Visit the <a className="underline text-primary-medium"
                            href="#">Starbucks Store Locator</a> and search
                        for
                        Locations
                        honoring "Redeem Rewards".
                    </p>
                    <p>Deposit and credit card products provided by JPMorgan Chase Bank, N.A. Member
                        FDIC
                    </p>
                </div>
            </div>
            <div className="text-sm md:flex md:space-x-10 space-y-7 md:space-y-0">
                <div className="flex flex-col md:flex-1 space-y-3">
                    <h1 className="font-bold text-gray-500">BENEFITS</h1>
                    <p>Free refills available during same in-store visit only. To qualify for the
                        Birthday
                        Reward, you must have
                        made at least one Star-earning transaction.
                    </p>
                </div>
                <div className="flex flex-col md:flex-1 space-y-3">
                    <h1 className="font-bold text-gray-500">REDEEMING REWARDS</h1>
                    <p>Rewards cannot be redeemed for alcoholic beverages or multi-serve items. Not all
                        stores honor tiered
                        Rewards. Select stores redeem 150 Stars for free food or drink items only.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default RulesAndInfo;