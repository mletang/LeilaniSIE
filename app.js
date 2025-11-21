// SIE flashcards web app v5.0
// Flashcards only, with SIE-likely highlighting and mark-for-review
// Data generated based on 19-unit structure from Kaplan SIE License Exam Manual

const FLASHCARDS = [
  // -----------------------------
  // Unit 1 – Equity Securities
  // -----------------------------
  {
    id: "u1_security_definition",
    unit: "U1",
    unitLabel: "Chapter 1: Equity Securities",
    sectionLabel: "Lesson 1.1: Securities",
    topic: "Definition of a Security",
    sieLikely: true,
    question: "What are the two basic types of securities?",
    answer: "Stocks (equity) and bonds (debt). Stocks represent ownership, while bonds represent a loan to an issuer."
  },
  {
    id: "u1_common_stock",
    unit: "U1",
    unitLabel: "Chapter 1: Equity Securities",
    sectionLabel: "Lesson 1.2: Common Stock",
    topic: "Common Stock Basics",
    sieLikely: true,
    question: "What does owning common stock represent?",
    answer: "It represents a share of ownership in a corporation, giving the owner rights to earnings (dividends) and a vote in major management decisions."
  },
  {
    id: "u1_stock_classes",
    unit: "U1",
    unitLabel: "Chapter 1: Equity Securities",
    sectionLabel: "Lesson 1.2: Common Stock",
    topic: "Stock Classifications",
    sieLikely: true,
    question: "Define authorized, issued, outstanding, and treasury stock.",
    answer: "Authorized: Max shares a company can issue. Issued: Shares sold to investors. Outstanding: Shares held by investors. Treasury: Shares repurchased by the company."
  },
  {
    id: "u1_market_cap",
    unit: "U1",
    unitLabel: "Chapter 1: Equity Securities",
    sectionLabel: "Lesson 1.3: Types of Common Stock",
    topic: "Market Capitalization",
    sieLikely: true,
    question: "How is market capitalization calculated and what are the three main categories?",
    answer: "Market Cap = Outstanding Shares × Current Market Value. The main categories are Large-Cap, Mid-Cap, and Small-Cap."
  },
  {
    id: "u1_penny_stock",
    unit: "U1",
    unitLabel: "Chapter 1: Equity Securities",
    sectionLabel: "Lesson 1.3: Types of Common Stock",
    topic: "Penny Stocks",
    sieLikely: true,
    question: "What is a penny stock and what is a key requirement for soliciting them?",
    answer: "An unlisted security trading at less than $5 per share. The customer must sign a suitability statement before the initial transaction."
  },
  {
    id: "u1_stockholder_rights",
    unit: "U1",
    unitLabel: "Chapter 1: Equity Securities",
    sectionLabel: "Lesson 1.4: Rights of Common Stockholders",
    topic: "Stockholder Rights",
    sieLikely: true,
    question: "What are the key rights of a common stockholder?",
    answer: "The right to vote (for directors, etc.), the right to transfer shares, the right to information (like annual reports), and preemptive rights (to maintain proportionate ownership)."
  },
  {
    id: "u1_dividend_dates",
    unit: "U1",
    unitLabel: "Chapter 1: Equity Securities",
    sectionLabel: "Lesson 1.4: Rights of Common Stockholders",
    topic: "Dividend Dates",
    sieLikely: true,
    question: "What are the four key dates in the dividend process (in order)?",
    answer: "1. Declaration Date (dividend announced), 2. Ex-Dividend Date (stock trades without dividend), 3. Record Date (must own by this date to receive), 4. Payable Date (dividend is paid)."
  },
  {
    id: "u1_common_benefits_risks",
    unit: "U1",
    unitLabel: "Chapter 1: Equity Securities",
    sectionLabel: "Lesson 1.5: Benefits of Owning Common Stock",
    topic: "Benefits and Risks",
    sieLikely: true,
    question: "What is a primary benefit and a primary risk of owning common stock?",
    answer: "Benefit: Potential for capital appreciation (growth) and hedge against inflation. Risk: Value risk (price decline) and low priority at dissolution."
  },
  {
    id: "u1_preferred_stock",
    unit: "U1",
    unitLabel: "Chapter 1: Equity Securities",
    sectionLabel: "Lesson 1.6: Preferred Stock",
    topic: "Preferred Stock",
    sieLikely: true,
    question: "How does preferred stock differ from common stock regarding dividends and voting?",
    answer: "Preferred stock pays a fixed, stated dividend (e.g., as a % of par). It has dividend preference over common stock but generally has no voting rights."
  },
  {
    id: "u1_preferred_types",
    unit: "U1",
    unitLabel: "Chapter 1: Equity Securities",
    sectionLabel: "Lesson 1.6: Preferred Stock",
    topic: "Types of Preferred Stock",
    sieLikely: false,
    question: "What is the difference between cumulative and callable preferred stock?",
    answer: "Cumulative: Accrues missed dividend payments (dividends in arrears) which must be paid before common. Callable: Issuer has the right to buy back the stock at a stated price."
  },

  // -----------------------------
  // Unit 2 – Other Types of Equities and Corporate Actions
  // -----------------------------
  {
    id: "u2_adr",
    unit: "U2",
    unitLabel: "Chapter 2: Other Types of Equities",
    sectionLabel: "Lesson 2.1: American Depositary Receipts",
    topic: "ADRs",
    sieLikely: true,
    question: "What is an American Depositary Receipt (ADR)?",
    answer: "A security that simplifies foreign investing for U.S. investors. It's a receipt for foreign shares held by a U.S. bank, denominated in U.S. dollars."
  },
  {
    id: "u2_adr_risk",
    unit: "U2",
    unitLabel: "Chapter 2: Other Types of Equities",
    sectionLabel: "Lesson 2.1: American Depositary Receipts",
    topic: "ADR Risks",
    sieLikely: true,
    question: "What specific risk is associated with ADRs, even though they trade in USD?",
    answer: "Currency risk. The value of the ADR and its dividend (which is converted from the foreign currency) can fall if the foreign currency weakens against the U.S. dollar."
  },
  {
    id: "u2_rule144",
    unit: "U2",
    unitLabel: "Chapter 2: Other Types of Equities",
    sectionLabel: "Lesson 2.2: Rule 144 Stock",
    topic: "Rule 144",
    sieLikely: true,
    question: "What two types of securities does Rule 144 cover?",
    answer: "1. Restricted Stock (unregistered shares acquired in a private placement) and 2. Control Stock (shares held by directors, officers, or >10% owners)."
  },
  {
    id: "u2_rule144_holding",
    unit: "U2",
    unitLabel: "Chapter 2: Other Types of Equities",
    sectionLabel: "Lesson 2.2: Rule 144 Stock",
    topic: "Rule 144 Holding Period",
    sieLikely: false,
    question: "What is the holding period for restricted stock under Rule 144 before it can be sold by a non-affiliate?",
    answer: "A six-month holding period (after being fully paid for) is required."
  },
  {
    id: "u2_rights_warrants",
    unit: "U2",
    unitLabel: "Chapter 2: Other Types of Equities",
    sectionLabel: "Lesson 2.3: Rights and Warrants",
    topic: "Rights vs. Warrants",
    sieLikely: true,
    question: "What is the key difference between stock rights and warrants?",
    answer: "Rights are short-term, given to existing shareholders, and allow purchase below market price. Warrants are long-term, often bundled with other securities, and have an exercise price above market value at issuance."
  },
  {
    id: "u2_stock_split",
    unit: "U2",
    unitLabel: "Chapter 2: Other Types of Equities",
    sectionLabel: "Lesson 2.4: Stock Dividends and Stock Splits",
    topic: "Stock Splits",
    sieLikely: true,
    question: "In a 2-for-1 forward stock split, what happens to the number of shares and the price per share?",
    answer: "The number of shares doubles, and the price per share is halved. The total market value of the investor's position remains the same."
  },
  {
    id: "u2_reverse_split",
    unit: "U2",
    unitLabel: "Chapter 2: Other Types of Equities",
    sectionLabel: "Lesson 2.4: Stock Dividends and Stock Splits",
    topic: "Reverse Stock Splits",
    sieLikely: false,
    question: "Why would a company do a reverse stock split?",
    answer: "To increase the market price per share, often to avoid being delisted from an exchange for trading below a minimum price."
  },
  {
    id: "u2_corporate_actions_tax",
    unit: "U2",
    unitLabel: "Chapter 2: Other Types of Equities",
    sectionLabel: "Lesson 2.5: Actions of Corporations",
    topic: "Corporate Actions & Taxes",
    sieLikely: true,
    question: "Are stock splits and stock dividends generally taxable events for the shareholder?",
    answer: "No. The shareholder receives more shares, but their cost basis per share is adjusted downward, so no tax is due at the time of the split/dividend."
  },
  {
    id: "u2_m_and_a",
    unit: "U2",
    unitLabel: "Chapter 2: Other Types of Equities",
    sectionLabel: "Lesson 2.5: Actions of Corporations",
    topic: "M&A",
    sieLikely: false,
    question: "What is a merger vs. an acquisition?",
    answer: "Merger: Two companies combine into a new company. Acquisition: One company takes over another."
  },
  {
    id: "u2_tender_offer",
    unit: "U2",
    unitLabel: "Chapter 2: Other Types of Equities",
    sectionLabel: "Lesson 2.5: Actions of Corporations",
    topic: "Tender Offer",
    sieLikely: false,
    question: "What is a tender offer?",
    answer: "An offer by a company or outside investor to buy a security directly from the owners (not through the market), typically at a premium, to gain control."
  },

  // -----------------------------
  // Unit 3 – Debt Securities
  // -----------------------------
  {
    id: "u3_bond_basics",
    unit: "U3",
    unitLabel: "Chapter 3: Debt Securities",
    sectionLabel: "Lesson 3.1: Bond Basics",
    topic: "Bond Characteristics",
    sieLikely: true,
    question: "Define Par Value, Coupon Rate, and Maturity Date for a bond.",
    answer: "Par Value: The face value, usually $1,000, paid at maturity. Coupon Rate: The fixed annual interest rate paid (as a % of par). Maturity Date: The date the par value is repaid."
  },
  {
    id: "u3_bond_pricing",
    unit: "U3",
    unitLabel: "Chapter 3: Debt Securities",
    sectionLabel: "Lesson 3.1: Bond Basics",
    topic: "Bond Pricing",
    sieLikely: true,
    question: "What does it mean if a bond is trading at a discount, premium, or par?",
    answer: "Discount: Price is below $1,000 par. Premium: Price is above $1,000 par. Par: Price is equal to $1,000 par."
  },
  {
    id: "u3_interest_rate_risk",
    unit: "U3",
    unitLabel: "Chapter 3: Debt Securities",
    sectionLabel: "Lesson 3.1: Bond Basics",
    topic: "Interest Rate Risk",
    sieLikely: true,
    question: "What is the relationship between bond prices and interest rates?",
    answer: "They have an inverse relationship. When interest rates rise, existing bond prices fall. When interest rates fall, existing bond prices rise."
  },
  {
    id: "u3_yield_to_maturity",
    unit: "U3",
    unitLabel: "Chapter 3: Debt Securities",
    sectionLabel: "Lesson 3.2: Bond Yields",
    topic: "Yield to Maturity (YTM)",
    sieLikely: true,
    question: "What is Yield to Maturity (YTM)?",
    answer: "The total annualized return of a bond if held to maturity, including all coupon payments plus the difference between the purchase price and par value."
  },
  {
    id: "u3_yield_premium_discount",
    unit: "U3",
    unitLabel: "Chapter 3: Debt Securities",
    sectionLabel: "Lesson 3.2: Bond Yields",
    topic: "Bond Yield Relationships",
    sieLikely: true,
    question: "For a bond trading at a premium, rank its yields (Coupon, Current, YTM) from highest to lowest.",
    answer: "Coupon Rate > Current Yield > Yield to Maturity (YTM)."
  },
  {
    id: "u3_yield_discount",
    unit: "U3",
    unitLabel: "Chapter 3: Debt Securities",
    sectionLabel: "Lesson 3.2: Bond Yields",
    topic: "Bond Yield Relationships",
    sieLikely: true,
    question: "For a bond trading at a discount, rank its yields (Coupon, Current, YTM) from highest to lowest.",
    answer: "Yield to Maturity (YTM) > Current Yield > Coupon Rate."
  },
  {
    id: "u3_bond_ratings",
    unit: "U3",
    unitLabel: "Chapter 3: Debt Securities",
    sectionLabel: "Lesson 3.3: Bond Ratings",
    topic: "Bond Ratings",
    sieLikely: true,
    question: "What do bond ratings (like AAA or Baa) measure?",
    answer: "They measure the issuer's default risk, or the risk that they will fail to pay interest or principal when due. Higher ratings (AAA) mean lower risk."
  },
  {
    id: "u3_investment_grade",
    unit: "U3",
    unitLabel: "Chapter 3: Debt Securities",
    sectionLabel: "Lesson 3.3: Bond Ratings",
    topic: "Investment Grade vs. Junk",
    sieLikely: true,
    question: "What is the difference between investment-grade and high-yield (junk) bonds?",
    answer: "Investment-grade bonds (Baa/BBB or higher) have lower risk and lower yields. High-yield bonds (Ba/BB or lower) have higher risk and offer higher yields."
  },
  {
    id: "u3_corporate_bonds",
    unit: "U3",
    unitLabel: "Chapter 3: Debt Securities",
    sectionLabel: "Lesson 3.5: Corporate Bonds",
    topic: "Secured vs. Unsecured Bonds",
    sieLikely: true,
    question: "What is the difference between a secured bond and a debenture?",
    answer: "A secured bond is backed by specific collateral (e.g., a mortgage bond backed by real estate). A debenture is an unsecured bond, backed only by the issuer's full faith and credit."
  },
  {
    id: "u3_liquidation_priority",
    unit: "U3",
    unitLabel: "Chapter 3: Debt Securities",
    sectionLabel: "Lesson 3.5: Corporate Bonds",
    topic: "Liquidation Priority",
    sieLikely: true,
    question: "In a corporate liquidation, what is the priority of claims among secured debt, debentures, preferred stock, and common stock?",
    answer: "1. Secured Debt, 2. Unsecured Debt (Debentures) & General Creditors, 3. Preferred Stock, 4. Common Stock."
  },
  {
    id: "u3_treasury_securities",
    unit: "U3",
    unitLabel: "Chapter 3: Debt Securities",
    sectionLabel: "Lesson 3.6: Government Securities",
    topic: "Treasury Securities",
    sieLikely: true,
    question: "Define T-Bills, T-Notes, and T-Bonds by their maturities.",
    answer: "T-Bills: Short-term (1 year or less). T-Notes: Intermediate-term (2-10 years). T-Bonds: Long-term (over 10 years)."
  },
  {
    id: "u3_gnma",
    unit: "U3",
    unitLabel: "Chapter 3: Debt Securities",
    sectionLabel: "Lesson 3.6: Government Securities",
    topic: "Agency Securities",
    sieLikely: true,
    question: "What is unique about Ginnie Mae (GNMA) securities compared to other agency securities (like Fannie Mae or Freddie Mac)?",
    answer: "GNMA securities are the only agency securities backed by the full faith and credit of the U.S. government."
  },
  {
    id: "u3_municipal_bonds",
    unit: "U3",
    unitLabel: "Chapter 3: Debt Securities",
    sectionLabel: "Lesson 3.7: Municipal Bonds",
    topic: "Municipal Bond Tax",
    sieLikely: true,
    question: "What is the primary tax advantage of municipal bonds?",
    answer: "The interest income is generally exempt from federal income tax. It is also often exempt from state and local taxes if the investor lives in the state of issuance."
  },
  {
    id: "u3_go_vs_revenue_bonds",
    unit: "U3",
    unitLabel: "Chapter 3: Debt Securities",
    sectionLabel: "Lesson 3.7: Municipal Bonds",
    topic: "GO vs. Revenue Bonds",
    sieLikely: true,
    question: "How do General Obligation (GO) bonds and Revenue Bonds differ in how they are secured?",
    answer: "GO bonds are backed by the full faith, credit, and taxing power of the municipality. Revenue bonds are backed by the revenue from a specific project (e.g., tolls)."
  },
  {
    id: "u3_money_market",
    unit: "U3",
    unitLabel: "Chapter 3: Debt Securities",
    sectionLabel: "Lesson 3.8: Money Market Instruments",
    topic: "Money Market",
    sieLikely: true,
    question: "What are the three defining characteristics of money market instruments?",
    answer: "They are short-term (one year or less to maturity), high-quality (low risk), and highly liquid."
  },

  // -----------------------------
  // Unit 4 – Investment Companies
  // -----------------------------
  {
    id: "u4_investment_company",
    unit: "U4",
    unitLabel: "Chapter 4: Investment Companies",
    sectionLabel: "Lesson 4.1: Investment Companies",
    topic: "Investment Company Act of 1940",
    sieLikely: true,
    question: "What are the three types of investment companies defined by the Investment Company Act of 1940?",
    answer: "1. Face-Amount Certificates (FACs), 2. Unit Investment Trusts (UITs), 3. Management Companies (which includes open-end and closed-end funds)."
  },
  {
    id: "u4_open_vs_closed_end",
    unit: "U4",
    unitLabel: "Chapter 4: Investment Companies",
    sectionLabel: "Lesson 4.1: Investment Companies",
    topic: "Open-End vs. Closed-End",
    sieLikely: true,
    question: "How do open-end and closed-end funds differ in terms of capitalization and trading?",
    answer: "Open-end (mutual funds) continuously issue new shares and redeem shares at NAV. Closed-end funds issue a fixed number of shares in an IPO, which then trade on an exchange at market prices."
  },
  {
    id: "u4_uit",
    unit: "U4",
    unitLabel: "Chapter 4: Investment Companies",
    sectionLabel: "Lesson 4.1: Investment Companies",
    topic: "Unit Investment Trusts (UITs)",
    sieLikely: false,
    question: "What is a key feature of a Unit Investment Trust (UIT)?",
    answer: "A UIT has a fixed, unmanaged portfolio of securities that are held until a set termination date. Investors buy redeemable units, not shares."
  },
  {
    id: "u4_mutual_fund_pricing",
    unit: "U4",
    unitLabel: "Chapter 4: Investment Companies",
    sectionLabel: "Lesson 4.2: Investing in Mutual Funds",
    topic: "Mutual Fund Pricing",
    sieLikely: true,
    question: "What is 'forward pricing' for a mutual fund?",
    answer: "It's the rule that all incoming purchase (buy) and redemption (sell) orders are executed at the next Net Asset Value (NAV) calculated after the order is received."
  },
  {
    id: "u4_share_classes",
    unit: "U4",
    unitLabel: "Chapter 4: Investment Companies",
    sectionLabel: "Lesson 4.2: Investing in Mutual Funds",
    topic: "Mutual Fund Share Classes",
    sieLikely: true,
    question: "Describe the sales charges for Class A, Class B, and Class C shares.",
    answer: "Class A: Front-end load (paid at purchase). Class B: Back-end load (CDSC) that declines over time. Class C: Level load (ongoing 12b-1 fee), possibly a small back-end load."
  },
  {
    id: "u4_breakpoints",
    unit: "U4",
    unitLabel: "Chapter 4: Investment Companies",
    sectionLabel: "Lesson 4.3: Reducing Front-End Loads",
    topic: "Breakpoints",
    sieLikely: true,
    question: "What are breakpoints for Class A shares?",
    answer: "Quantity discounts on the front-end sales charge. The greater the dollar amount invested, the lower the percentage of the sales charge."
  },
  {
    id: "u4_breakpoint_sale",
    unit: "U4",
    unitLabel: "Chapter 4: Investment Companies",
    sectionLabel: "Lesson 4.3: Reducing Front-End Loads",
    topic: "Breakpoint Sale",
    sieLikely: true,
    question: "What is a 'breakpoint sale' and is it allowed?",
    answer: "A breakpoint sale is the prohibited practice of a representative encouraging a customer to invest just *below* a breakpoint (to earn a higher commission). It is a violation."
  },
  {
    id: "u4_nav_calculation",
    unit: "U4",
    unitLabel: "Chapter 4: Investment Companies",
    sectionLabel: "Lesson 4.4: Net Asset Value",
    topic: "NAV Calculation",
    sieLikely: true,
    question: "How is a mutual fund's Net Asset Value (NAV) per share calculated?",
    answer: "(Total Fund Assets - Total Fund Liabilities) / Number of Shares Outstanding."
  },
  {
    id: "u4_prospectus",
    unit: "U4",
    unitLabel: "Chapter 4: Investment Companies",
    sectionLabel: "Lesson 4.5: Disclosure Documents",
    topic: "Prospectus",
    sieLikely: true,
    question: "When must a mutual fund investor receive a prospectus?",
    answer: "Before or at the time of the solicitation (sale). A summary prospectus may be used, but the full prospectus must be available."
  },
  {
    id: "u4_conduit_theory",
    unit: "U4",
    unitLabel: "Chapter 4: Investment Companies",
    sectionLabel: "Lesson 4.5: Conduit Theory",
    topic: "Conduit (Pipeline) Theory",
    sieLikely: true,
    question: "What is the 'Conduit Theory' of taxation for a mutual fund?",
    answer: "If a fund (Subchapter M) distributes at least 90% of its Net Investment Income to shareholders, the fund only pays taxes on the retained amount. Shareholders pay taxes on the distributions."
  },
  {
    id: "u4_annuity",
    unit: "U4",
    unitLabel: "Chapter 4: Investment Companies",
    sectionLabel: "Lesson 4.6: Annuities",
    topic: "Annuities",
    sieLikely: true,
    question: "What is the key difference between a fixed annuity and a variable annuity?",
    answer: "Fixed Annuity: Insurance company bears the investment risk; guarantees a fixed return. Not a security. Variable Annuity: Investor bears the investment risk; returns depend on subaccount performance. Is a security."
  },

  // -----------------------------
  // Unit 5 – Options
  // -----------------------------
  {
    id: "u5_option_definition",
    unit: "U5",
    unitLabel: "Chapter 5: Options",
    sectionLabel: "Lesson 5.1: Basic Options",
    topic: "Options Definition",
    sieLikely: true,
    question: "What is an option contract?",
    answer: "A two-party contract giving the buyer (holder) the right to buy or sell the underlying security at a set price (strike price) before a set date (expiration)."
  },
  {
    id: "u5_call_option",
    unit: "U5",
    unitLabel: "Chapter 5: Options",
    sectionLabel: "Lesson 5.1: Basic Options",
    topic: "Call Options",
    sieLikely: true,
    question: "What right does the buyer of a call option have? What is their market attitude?",
    answer: "The right to BUY the underlying security at the strike price. The buyer is bullish (wants the stock price to go up)."
  },
  {
    id: "u5_put_option",
    unit: "U5",
    unitLabel: "Chapter 5: Options",
    sectionLabel: "Lesson 5.1: Basic Options",
    topic: "Put Options",
    sieLikely: true,
    question: "What right does the buyer of a put option have? What is their market attitude?",
    answer: "The right to SELL the underlying security at the strike price. The buyer is bearish (wants the stock price to go down)."
  },
  {
    id: "u5_option_seller",
    unit: "U5",
    unitLabel: "Chapter 5: Options",
    sectionLabel: "Lesson 5.1: Basic Options",
    topic: "Option Sellers (Writers)",
    sieLikely: true,
    question: "What is the obligation of an option seller (writer)?",
    answer: "The seller (writer) receives the premium and has the OBLIGATION to perform (sell the stock if a call writer, buy the stock if a put writer) if the buyer exercises the contract."
  },
  {
    id: "u5_call_in_the_money",
    unit: "U5",
    unitLabel: "Chapter 5: Options",
    sectionLabel: "Lesson 5.2: Intrinsic Value",
    topic: "Intrinsic Value (Calls)",
    sieLikely: true,
    question: "When is a call option 'in-the-money' and what is its intrinsic value?",
    answer: "When the Market Price is ABOVE the Strike Price. Intrinsic Value = Market Price - Strike Price."
  },
  {
    id: "u5_put_in_the_money",
    unit: "U5",
    unitLabel: "Chapter 5: Options",
    sectionLabel: "Lesson 5.2: Intrinsic Value",
    topic: "Intrinsic Value (Puts)",
    sieLikely: true,
    question: "When is a put option 'in-the-money' and what is its intrinsic value?",
    answer: "When the Market Price is BELOW the Strike Price. Intrinsic Value = Strike Price - Market Price."
  },
  {
    id: "u5_out_of_the_money",
    unit: "U5",
    unitLabel: "Chapter 5: Options",
    sectionLabel: "Lesson 5.2: IntrinsicValue",
    topic: "Intrinsic Value (Out)",
    sieLikely: true,
    question: "What is the intrinsic value of any option that is 'at-the-money' or 'out-of-the-money'?",
    answer: "Zero."
  },
  {
    id: "u5_premium_formula",
    unit: "U5",
    unitLabel: "Chapter 5: Options",
    sectionLabel: "Lesson 5.2: Intrinsic Value",
    topic: "Option Premium",
    sieLikely: true,
    question: "What is the formula for an option's premium (price)?",
    answer: "Premium = Intrinsic Value + Time Value."
  },
  {
    id: "u5_call_breakeven",
    unit: "U5",
    unitLabel: "Chapter 5: Options",
    sectionLabel: "Lesson 5.3: Option Calculations",
    topic: "Breakeven (Calls)",
    sieLikely: true,
    question: "What is the breakeven point for the buyer of a call option?",
    answer: "Strike Price + Premium."
  },
  {
    id: "u5_put_breakeven",
    unit: "U5",
    unitLabel: "Chapter 5: Options",
    sectionLabel: "Lesson 5.3: Option Calculations",
    topic: "Breakeven (Puts)",
    sieLikely: true,
    question: "What is the breakeven point for the buyer of a put option?",
    answer: "Strike Price - Premium."
  },
  {
    id: "u5_long_call_max_gain_loss",
    unit: "U5",
    unitLabel: "Chapter 5: Options",
    sectionLabel: "Lesson 5.3: Option Calculations",
    topic: "Max Gain/Loss (Long Call)",
    sieLikely: true,
    question: "What is the maximum gain and maximum loss for the buyer of a call option?",
    answer: "Maximum Gain: Unlimited. Maximum Loss: The premium paid."
  },
  {
    id: "u5_long_put_max_gain_loss",
    unit: "U5",
    unitLabel: "Chapter 5: Options",
    sectionLabel: "Lesson 5.3: Option Calculations",
    topic: "Max Gain/Loss (Long Put)",
    sieLikely: true,
    question: "What is the maximum gain and maximum loss for the buyer of a put option?",
    answer: "Maximum Gain: Breakeven (Strike - Premium). Maximum Loss: The premium paid."
  },
  {
    id: "u5_short_call_max_gain_loss",
    unit: "U5",
    unitLabel: "Chapter 5: Options",
    sectionLabel: "Lesson 5.3: Option Calculations",
    topic: "Max Gain/Loss (Short Call)",
    sieLikely: true,
    question: "What is the maximum gain and maximum loss for the seller (writer) of an uncovered call option?",
    answer: "Maximum Gain: The premium received. Maximum Loss: Unlimited."
  },
  {
    id: "u5_short_put_max_gain_loss",
    unit: "U5",
    unitLabel: "Chapter 5: Options",
    sectionLabel: "Lesson 5.3: Option Calculations",
    topic: "Max Gain/Loss (Short Put)",
    sieLikely: true,
    question: "What is the maximum gain and maximum loss for the seller (writer) of a put option?",
    answer: "Maximum Gain: The premium received. Maximum Loss: Breakeven (Strike - Premium)."
  },
  {
    id: "u5_hedge_long_stock",
    unit: "U5",
    unitLabel: "Chapter 5: Options",
    sectionLabel: "Lesson 5.4: Option Strategies",
    topic: "Hedging",
    sieLikely: true,
    question: "What option strategy protects (hedges) a long stock position from a potential decline?",
    answer: "Buying a put (a 'protective put'). This locks in a minimum selling price for the stock."
  },
  {
    id: "u5_covered_call",
    unit: "U5",
    unitLabel: "Chapter 5: Options",
    sectionLabel: "Lesson 5.4: Option Strategies",
    topic: "Covered Call",
    sieLikely: true,
    question: "What is a 'covered call' strategy and what is its goal?",
    answer: "Selling a call option against a stock you already own. The goal is to generate premium income. It's a neutral-to-bullish strategy."
  },
  {
    id: "u5_index_option",
    unit: "U5",
    unitLabel: "Chapter 5: Options",
    sectionLabel: "Lesson 5.5: Nonequity Options",
    topic: "Index Options",
    sieLikely: true,
    question: "How do index options (like SPX) settle if they are exercised?",
    answer: "They are settled in cash. The writer pays the holder the in-the-money amount. There is no delivery of the underlying (e.g., all 500 stocks)."
  },
  {
    id: "u5_occ",
    unit: "U5",
    unitLabel: "Chapter 5: Options",
    sectionLabel: "Lesson 5.6: Options Rules",
    topic: "Options Clearing Corp (OCC)",
    sieLikely: true,
    question: "What is the role of the Options Clearing Corporation (OCC)?",
    answer: "The OCC is the issuer, guarantor, and clearing agent for all listed options. It guarantees performance, eliminating counterparty risk."
  },
  {
    id: "u5_options_agreement",
    unit: "U5",
    unitLabel: "Chapter 5: Options",
    sectionLabel: "Lesson 5.6: Options Rules",
    topic: "Options Account Opening",
    sieLikely: true,
    question: "What is the timeline for a customer to return the signed options agreement?",
    answer: "The customer must return the signed options agreement within 15 days of account approval. Trading can begin after approval, but only closing transactions are allowed if the agreement is not returned."
  },

  // -----------------------------
  // Unit 6 – Other Investment Types
  // -----------------------------
  {
    id: "u6_529",
    unit: "U6",
    unitLabel: "Chapter 6: Other Investment Types",
    sectionLabel: "Lesson 6.1: Municipal Fund Securities",
    topic: "529 Plans",
    sieLikely: true,
    question: "What is a 529 Plan and its main tax benefit?",
    answer: "A state-sponsored municipal fund security for saving for education. Earnings grow tax-deferred, and withdrawals for qualified education expenses are tax-free at the federal level."
  },
  {
    id: "u6_dpp",
    unit: "U6",
    unitLabel: "Chapter 6: Other Investment Types",
    sectionLabel: "Lesson 6.2: Partnerships",
    topic: "Direct Participation Programs (DPPs)",
    sieLikely: true,
    question: "What is a Direct Participation Program (DPP) or Limited Partnership?",
    answer: "An investment (like a real estate or oil & gas partnership) that passes all income, gains, losses, and tax benefits directly to the partners. They are illiquid."
  },
  {
    id: "u6_lp_roles",
    unit: "U6",
    unitLabel: "Chapter 6: Other Investment Types",
    sectionLabel: "Lesson 6.2: Partnerships",
    topic: "LP Roles",
    sieLikely: false,
    question: "What is the difference between a General Partner (GP) and a Limited Partner (LP)?",
    answer: "The GP manages the business and has unlimited liability. The LP is a passive investor whose liability is limited to their investment."
  },
  {
    id: "u6_reit",
    unit: "U6",
    unitLabel: "Chapter 6: Other Investment Types",
    sectionLabel: "Lesson 6.3: REITs, ETFs, and ETNs",
    topic: "Real Estate Investment Trust (REIT)",
    sieLikely: true,
    question: "What is a REIT and how does it avoid double taxation?",
    answer: "A company that manages a portfolio of real estate or mortgages. Like a mutual fund, it avoids double taxation by passing through at least 90% of its Net Investment Income to shareholders."
  },
  {
    id: "u6_reit_losses",
    unit: "U6",
    unitLabel: "Chapter 6: Other Investment Types",
    sectionLabel: "Lesson 6.3: REITs, ETFs, and ETNs",
    topic: "REITs vs. DPPs",
    sieLikely: false,
    question: "What is a key difference between a REIT and a DPP (Limited Partnership) regarding losses?",
    answer: "REITs pass through income to shareholders, but they do NOT pass through losses. DPPs pass through both income and losses."
  },
  {
    id: "u6_etf",
    unit: "U6",
    unitLabel: "Chapter 6: Other Investment Types",
    sectionLabel: "Lesson 6.3: REITs, ETFs, and ETNs",
    topic: "Exchange-Traded Fund (ETF)",
    sieLikely: true,
    question: "What is an Exchange-Traded Fund (ETF) and how does it trade?",
    answer: "An investment company (like an index fund) that is traded intraday on a stock exchange at market prices (which can differ from its NAV)."
  },
  {
    id: "u6_etf_vs_mutual_fund",
    unit: "U6",
    unitLabel: "Chapter 6: Other Investment Types",
    sectionLabel: "Lesson 6.3: REITs, ETFs, and ETNs",
    topic: "ETFs vs. Mutual Funds",
    sieLikely: true,
    question: "Name two advantages ETFs have over open-end mutual funds.",
    answer: "1. Traded intraday (vs. once daily at NAV). 2. Can be bought on margin and sold short. 3. Generally lower expense ratios and greater tax efficiency."
  },
  {
    id: "u6_etn",
    unit: "U6",
    unitLabel: "Chapter 6: Other Investment Types",
    sectionLabel: "Lesson 6.3: REITs, ETFs, and ETNs",
    topic: "Exchange-Traded Note (ETN)",
    sieLikely: true,
    question: "What is an Exchange-Traded Note (ETN) and what is its main risk?",
    answer: "An unsecured debt security issued by a bank. Its performance is linked to an index. Its main risk is default risk (credit risk) of the issuing bank, as it is not backed by any assets."
  },
  
  // -----------------------------
  // Unit 7 – Issuing Securities
  // -----------------------------
  {
    id: "u7_primary_market",
    unit: "U7",
    unitLabel: "Chapter 7: Issuing Securities",
    sectionLabel: "Lesson 7.1: Primary Market Basics",
    topic: "Primary Market",
    sieLikely: true,
    question: "What is the primary market?",
    answer: "The market where issuers sell new securities directly to investors to raise capital. The issuer receives the proceeds from the sale."
  },
  {
    id: "u7_ipo_vs_apo",
    unit: "U7",
    unitLabel: "Chapter 7: Issuing Securities",
    sectionLabel: "Lesson 7.1: Primary Market Basics",
    topic: "IPO vs. APO",
    sieLikely: true,
    question: "What is the difference between an Initial Public Offering (IPO) and an Additional Public Offering (APO)?",
    answer: "An IPO is the very first time an issuer sells shares to the public. An APO (or follow-on) is any subsequent sale of new shares to the public by an already-public company."
  },
  {
    id: "u7_underwriter_roles",
    unit: "U7",
    unitLabel: "Chapter 7: Issuing Securities",
    sectionLabel: "Lesson 7.1: Primary Market Basics",
    topic: "Underwriter",
    sieLikely: true,
    question: "What is the role of an underwriter (or investment banker) in a primary offering?",
    answer: "They are broker-dealers that help the issuer structure the offering, prepare the registration, and sell the new securities to the public."
  },
  {
    id: "u7_firm_commitment",
    unit: "U7",
    unitLabel: "Chapter 7: Issuing Securities",
    sectionLabel: "Lesson 7.2: Underwriting New Issues",
    topic: "Firm Commitment",
    sieLikely: true,
    question: "What is a 'firm commitment' underwriting?",
    answer: "The underwriter acts as a principal, buying the entire issue from the issuer and reselling it to the public. The underwriter bears the risk of any unsold shares."
  },
  {
    id: "u7_best_efforts",
    unit: "U7",
    unitLabel: "Chapter 7: Issuing Securities",
    sectionLabel: "Lesson 7.2: Underwriting New Issues",
    topic: "Best Efforts",
    sieLikely: true,
    question: "What is a 'best efforts' underwriting?",
    answer: "The underwriter acts as an agent, agreeing to sell as much as it can to the public. The underwriter does not bear financial risk for unsold shares; the issuer does."
  },
  {
    id: "u7_act_of_1933",
    unit: "U7",
    unitLabel: "Chapter 7: Issuing Securities",
    sectionLabel: "Lesson 7.2: Underwriting New Issues",
    topic: "Securities Act of 1933",
    sieLikely: true,
    question: "What is the main purpose of the Securities Act of 1933?",
    answer: "To ensure that investors receive full and fair disclosure about new issues (IPOs). It requires registration of securities and delivery of a prospectus."
  },
  {
    id: "u7_registration_process",
    unit: "U7",
    unitLabel: "Chapter 7: Issuing Securities",
    sectionLabel: "Lesson 7.2: Underwriting New Issues",
    topic: "Registration Process",
    sieLikely: true,
    question: "What activity is permitted during the 'cooling-off' period after a registration statement is filed?",
    answer: "The underwriter can gather non-binding indications of interest, distribute a preliminary prospectus (red herring), and publish tombstone ads."
  },
  {
    id: "u7_prospectus",
    unit: "U7",
    unitLabel: "Chapter 7: Issuing Securities",
    sectionLabel: "Lesson 7.2: Underwriting New Issues",
    topic: "Prospectus",
    sieLikely: true,
    question: "When must a final prospectus be delivered to a customer buying an IPO?",
    answer: "No later than the confirmation of the sale."
  },
  {
    id: "u7_exempt_securities",
    unit: "U7",
    unitLabel: "Chapter 7: Issuing Securities",
    sectionLabel: "Lesson 7.3: Underwriting Exemptions",
    topic: "Exempt Securities",
    sieLikely: true,
    question: "Name three types of securities that are exempt from registration under the Act of 1933.",
    answer: "U.S. Government securities, Municipal securities, and Commercial Paper (max 270 days)."
  },
  {
    id: "u7_reg_d",
    unit: "U7",
    unitLabel: "Chapter 7: Issuing Securities",
    sectionLabel: "Lesson 7.3: Underwriting Exemptions",
    topic: "Regulation D",
    sieLikely: true,
    question: "What is a Regulation D (Reg D) offering?",
    answer: "An exempt transaction, known as a 'private placement.' It allows an issuer to sell securities to accredited investors without registration."
  },
  {
    id: "u7_rule_147",
    unit: "U7",
    unitLabel: "Chapter 7: Issuing Securities",
    sectionLabel: "Lesson 7.3: Underwriting Exemptions",
    topic: "Rule 147 (Intrastate)",
    sieLikely: true,
    question: "What is a Rule 147 Intrastate offering?",
    answer: "An exempt transaction where an offering is made only to residents of one state, by an issuer who is based in that state. (e.g., 80% of assets, revenue, and proceeds are in-state)."
  },

  // -----------------------------
  // Unit 8 – Trading Securities
  // -----------------------------
  {
    id: "u8_secondary_market",
    unit: "U8",
    unitLabel: "Chapter 8: Trading Securities",
    sectionLabel: "Lesson 8.1: Secondary Market Basics",
    topic: "Secondary Market",
    sieLikely: true,
    question: "What is the secondary market and what act governs it?",
    answer: "The market where investors trade existing securities with each other (not with the issuer). It is governed by the Securities Exchange Act of 1934."
  },
  {
    id: "u8_exchange_market",
    unit: "U8",
    unitLabel: "Chapter 8: Trading Securities",
    sectionLabel: "Lesson 8.1: Secondary Market Basics",
    topic: "Exchange Market",
    sieLikely: true,
    question: "What is an exchange market (like the NYSE)?",
    answer: "A physical or electronic auction market where listed securities are traded. It features a Designated Market Maker (DMM) who maintains a fair and orderly market."
  },
  {
    id: "u8_otc_market",
    unit: "U8",
    unitLabel: "Chapter 8: Trading Securities",
    sectionLabel: "Lesson 8.2: OTC Market",
    topic: "OTC Market",
    sieLikely: true,
    question: "What is the Over-the-Counter (OTC) market?",
    answer: "A decentralized network of market makers (dealers) who trade unlisted securities. Trading is done through negotiation, not an auction."
  },
  {
    id: "u8_market_maker",
    unit: "U8",
    unitLabel: "Chapter 8: Trading Securities",
    sectionLabel: "Lesson 8.3: Participants",
    topic: "Market Maker",
    sieLikely: true,
    question: "What is the role of a market maker?",
    answer: "A dealer (principal) who stands ready to buy or sell a specific security from its own inventory, at its own risk, to provide liquidity to the market."
  },
  {
    id: "u8_bid_ask",
    unit: "U8",
    unitLabel: "Chapter 8: Trading Securities",
    sectionLabel: "Lesson 8.4: Placing a Trade",
    topic: "Bid and Ask",
    sieLikely: true,
    question: "Define the 'Bid' and 'Ask' price in a quote.",
    answer: "Bid: The highest price a market maker will pay (what an investor sells for). Ask: The lowest price a market maker will accept (what an investor buys for). The Ask is always higher than the Bid."
  },
  {
    id: "u8_spread",
    unit: "U8",
    unitLabel: "Chapter 8: Trading Securities",
    sectionLabel: "Lesson 8.4: Placing a Trade",
    topic: "Spread",
    sieLikely: true,
    question: "What is the 'spread'?",
    answer: "The difference between the Bid and Ask prices. This is the market maker's profit."
  },
  {
    id: "u8_market_order",
    unit: "U8",
    unitLabel: "Chapter 8: Trading Securities",
    sectionLabel: "Lesson 8.5: Types of Orders",
    topic: "Market Order",
    sieLikely: true,
    question: "What is a 'market order'?",
    answer: "An order to buy or sell a security immediately at the best available market price. Execution is guaranteed; price is not."
  },
  {
    id: "u8_limit_order",
    unit: "U8",
    unitLabel: "Chapter 8: Trading Securities",
    sectionLabel: "Lesson 8.5: Types of Orders",
    topic: "Limit Order",
    sieLikely: true,
    question: "What is a 'limit order'?",
    answer: "An order to buy or sell at a specific price or better. Price is guaranteed; execution is not."
  },
  {
    id: "u8_stop_order",
    unit: "U8",
    unitLabel: "Chapter 8: Trading Securities",
    sectionLabel: "Lesson 8.5: Types of Orders",
    topic: "Stop Order",
    sieLikely: true,
    question: "What is a 'stop order' (or 'stop-loss' order)?",
    answer: "An order that becomes a market order once the stock trades at or through a specific 'stop' price. Used to limit losses or protect a profit."
  },
  {
    id: "u8_long_vs_short",
    unit: "U8",
    unitLabel: "Chapter 8: Trading Securities",
    sectionLabel: "Lesson 8.6: Positions",
    topic: "Long vs. Short",
    sieLikely: true,
    question: "What is the difference between a 'long' position and a 'short' position?",
    answer: "Long: An investor buys and owns the security. They are bullish and profit if the price goes up. Short: An investor borrows a security and sells it. They are bearish and profit if the price goes down."
  },
  {
    id: "u8_short_sale_risk",
    unit: "U8",
    unitLabel: "Chapter 8: Trading Securities",
    sectionLabel: "Lesson 8.6: Positions",
    topic: "Short Sale Risk",
    sieLikely: true,
    question: "What is the maximum loss on a short stock position?",
    answer: "Unlimited. Since a stock's price can theoretically rise indefinitely, the loss potential is unlimited."
  },
  {
    id: "u8_agent_vs_principal",
    unit: "U8",
    unitLabel: "Chapter 8: Trading Securities",
    sectionLabel: "Lesson 8.7: Broker-Dealer Capacity",
    topic: "Agent vs. Principal",
    sieLikely: true,
    question: "What is the difference between a broker-dealer acting as an 'agent' vs. a 'principal'?",
    answer: "Agent (Broker): The firm arranges a trade between a customer and another party (like a market maker) and charges a commission. Principal (Dealer): The firm trades directly with the customer from its own inventory and charges a markup/markdown."
  },
  {
    id: "u8_settlement",
    unit: "U8",
    unitLabel: "Chapter 8: Trading Securities",
    sectionLabel: "Lesson 8.7: Settlement",
    topic: "Settlement Date",
    sieLikely: true,
    question: "What is the regular-way settlement for corporate securities (stocks/bonds) and options?",
    answer: "Corporate Securities (Stocks & Bonds): T+2 (Trade date + 2 business days). Options: T+1 (Trade date + 1 business day)."
  },

  // -----------------------------
  // Unit 9 – Basic Accounts
  // -----------------------------
  {
    id: "u9_jtwros",
    unit: "U9",
    unitLabel: "Chapter 9: Basic Accounts",
    sectionLabel: "Lesson 9.1: Accounts for Adults",
    topic: "Joint Tenants w/ Right of Survivorship",
    sieLikely: true,
    question: "What is a 'Joint Tenants with Right of Survivorship' (JTWROS) account?",
    answer: "A joint account where, if one owner dies, their share of the account passes directly to the surviving owner(s), avoiding probate."
  },
  {
    id: "u9_tic",
    unit: "U9",
    unitLabel: "Chapter 9: Basic Accounts",
    sectionLabel: "Lesson 9.1: Accounts for Adults",
    topic: "Tenants in Common (TIC)",
    sieLikely: true,
    question: "What is a 'Tenants in Common' (TIC) account?",
    answer: "A joint account where, if one owner dies, their share of the account passes to their estate, not to the other account owners."
  },
  {
    id: "u9_tod",
    unit: "U9",
    unitLabel: "Chapter 9: Basic Accounts",
    sectionLabel: "Lesson 9.1: Accounts for Adults",
    topic: "Transfer on Death (TOD)",
    sieLikely: true,
    question: "What is a 'Transfer on Death' (TOD) registration?",
    answer: "A designation on an individual or JTWROS account that allows the assets to pass directly to a named beneficiary upon the death of all account owners, avoiding probate."
  },
  {
    id: "u9_corporate_account",
    unit: "U9",
    unitLabel: "Chapter 9: Basic Accounts",
    sectionLabel: "Lesson 9.2: Accounts for Organizations",
    topic: "Corporate Accounts",
    sieLikely: false,
    question: "What two documents are required to open a corporate brokerage account?",
    answer: "1. The Corporate Charter (to prove the corporation exists) and 2. The Corporate Resolution (to specify who has trading authority)."
  },
  {
    id: "u9_utma_ugma",
    unit: "U9",
    unitLabel: "Chapter 9: Basic Accounts",
    sectionLabel: "Lesson 9.4: Accounts for Minors",
    topic: "Custodial Accounts",
    sieLikely: true,
    question: "What is a custodial account (UTMA/UGMA)?",
    answer: "An account for a minor, managed by an adult (the custodian). The assets are an irrevocable gift to the minor, who is responsible for the taxes."
  },
  {
    id: "u9_custodial_rules",
    unit: "U9",
    unitLabel: "Chapter 9: Basic Accounts",
    sectionLabel: "Lesson 9.4: Accounts for Minors",
    topic: "Custodial Account Rules",
    sieLikely: false,
    question: "What types of transactions are generally prohibited in a custodial account?",
    answer: "High-risk transactions like margin trading, short selling, and speculative options strategies."
  },
  {
    id: "u9_fiduciary",
    unit: "U9",
    unitLabel: "Chapter 9: Basic Accounts",
    sectionLabel: "Lesson 9.5: Fiduciary Responsibilities",
    topic: "Fiduciary",
    sieLikely: true,
    question: "What is a 'fiduciary'?",
    answer: "A person legally authorized to act on behalf of another person (the beneficiary), placing the beneficiary's interests first. Examples: Trustee, Executor, Custodian."
  },

  // -----------------------------
  // Unit 10 – Retirement Accounts
  // -----------------------------
  {
    id: "u10_ira",
    unit: "U10",
    unitLabel: "Chapter 10: Retirement Accounts",
    sectionLabel: "Lesson 10.1: Individual Retirement Accounts",
    topic: "IRA",
    sieLikely: true,
    question: "What type of income is required to make an IRA contribution?",
    answer: "Earned income (e.g., salary, wages, tips). Investment income or pension income does not qualify."
  },
  {
    id: "u10_traditional_ira",
    unit: "U10",
    unitLabel: "Chapter 10: Retirement Accounts",
    sectionLabel: "Lesson 10.1: Individual Retirement Accounts",
    topic: "Traditional IRA",
    sieLikely: true,
    question: "What are the tax characteristics of a Traditional IRA?",
    answer: "Contributions are often tax-deductible. Earnings grow tax-deferred. All withdrawals are taxed as ordinary income."
  },
  {
    id: "u10_roth_ira",
    unit: "U10",
    unitLabel: "Chapter 10: Retirement Accounts",
    sectionLabel: "Lesson 10.1: Individual Retirement Accounts",
    topic: "Roth IRA",
    sieLikely: true,
    question: "What are the tax characteristics of a Roth IRA?",
    answer: "Contributions are NOT tax-deductible (made with after-tax dollars). Earnings grow tax-free. Qualified withdrawals are completely tax-free."
  },
  {
    id: "u10_ira_penalty",
    unit: "U10",
    unitLabel: "Chapter 10: Retirement Accounts",
    sectionLabel: "Lesson 10.1: Individual Retirement Accounts",
    topic: "IRA Withdrawal Penalty",
    sieLikely: true,
    question: "What is the penalty for early withdrawals from a Traditional IRA before age 59½?",
    answer: "The amount withdrawn is taxed as ordinary income PLUS a 10% penalty (with some exceptions like death, disability, first-time home purchase)."
  },
  {
    id: "u10_rmd",
    unit: "U10",
    unitLabel: "Chapter 10: Retirement Accounts",
    sectionLabel: "Lesson 10.1: Individual Retirement Accounts",
    topic: "Required Minimum Distributions (RMDs)",
    sieLikely: true,
    question: "What are Required Minimum Distributions (RMDs) and which IRA has them?",
    answer: "RMDs are mandatory annual withdrawals starting at age 73. Traditional IRAs have RMDs; Roth IRAs do NOT have RMDs for the original owner."
  },
  {
    id: "u10_ira_rollover",
    unit: "U10",
    unitLabel: "Chapter 10: Retirement Accounts",
    sectionLabel: "Lesson 10.1: Individual Retirement Accounts",
    topic: "IRA Rollover",
    sieLikely: true,
    question: "How long does a person have to complete an IRA rollover before it becomes a taxable distribution?",
    answer: "60 calendar days. This is allowed only once per 12-month period."
  },
  {
    id: "u10_defined_benefit",
    unit: "U10",
    unitLabel: "Chapter 10: Retirement Accounts",
    sectionLabel: "Lesson 10.2: Employer-Sponsored Plans",
    topic: "Defined Benefit Plan",
    sieLikely: true,
    question: "What is a 'defined benefit' plan (e.g., a traditional pension)?",
    answer: "An employer-sponsored plan that promises a specific, predetermined benefit (e.g., a monthly check) to the employee at retirement. The employer bears the investment risk."
  },
  {
    id: "u10_defined_contribution",
    unit: "U10",
    unitLabel: "Chapter 10: Retirement Accounts",
    sectionLabel: "Lesson 10.2: Employer-Sponsored Plans",
    topic: "Defined Contribution Plan",
    sieLikely: true,
    question: "What is a 'defined contribution' plan (e.g., a 401(k))?",
    answer: "An employer-sponsored plan where the contribution amount is specified, but the final benefit is variable. The employee bears the investment risk."
  },
  {
    id: "u10_401k",
    unit: "U10",
    unitLabel: "Chapter 10: Retirement Accounts",
    sectionLabel: "Lesson 10.2: Employer-Sponsored Plans",
    topic: "401(k) Plan",
    sieLikely: true,
    question: "What is a 401(k) plan?",
    answer: "A defined contribution plan for corporate employees, funded by employee salary deferrals (pre-tax) and often an employer match. Earnings grow tax-deferred."
  },

  // -----------------------------
  // Unit 11 – Account Features
  // -----------------------------
  {
    id: "u11_cash_vs_margin",
    unit: "U11",
    unitLabel: "Chapter 11: Account Features",
    sectionLabel: "Lesson 11.1: Cash and Margin Accounts",
    topic: "Cash vs. Margin Account",
    sieLikely: true,
    question: "What is the difference between a cash account and a margin account?",
    answer: "In a cash account, all securities must be paid for in full by the settlement date. In a margin account, the investor can borrow money from the broker-dealer (leverage) to pay for a portion of the purchase."
  },
  {
    id: "u11_reg_t",
    unit: "U11",
    unitLabel: "Chapter 11: Account Features",
    sectionLabel: "Lesson 11.1: Cash and Margin Accounts",
    topic: "Regulation T",
    sieLikely: true,
    question: "What is the Regulation T requirement for an initial margin purchase?",
    answer: "The investor must deposit 50% of the purchase price. The broker-dealer can lend the other 50%."
  },
  {
    id: "u11_margin_forms",
    unit: "U11",
    unitLabel: "Chapter 11: Account Features",
    sectionLabel: "Lesson 11.1: Cash and Margin Accounts",
    topic: "Margin Account Forms",
    sieLikely: true,
    question: "What three agreements are needed to open a margin account?",
    answer: "1. Credit Agreement (terms of the loan), 2. Hypothecation Agreement (pledges securities as collateral), 3. Loan Consent Agreement (optional; allows firm to lend shares)."
  },
  {
    id: "u11_marginable_securities",
    unit: "U11",
    unitLabel: "Chapter 11: Account Features",
    sectionLabel: "Lesson 11.2: Margin Buying",
    topic: "Marginable Securities",
    sieLikely: true,
    question: "What types of securities cannot be purchased on margin (i.e., are non-marginable)?",
    answer: "Options, Rights, non-NMS OTC securities, and new issues (for the first 30 days). Mutual funds also cannot be *purchased* on margin but can be used as collateral after 30 days."
  },
  {
    id: "u11_maintenance_call",
    unit: "U11",
    unitLabel: "Chapter 11: Account Features",
    sectionLabel: "Lesson 11.2: Margin Buying",
    topic: "Maintenance Call",
    sieLikely: true,
    question: "What is a 'maintenance call' in a long margin account?",
    answer: "A demand for the customer to deposit more cash or securities when their equity falls below the minimum maintenance level (typically 25% of the market value)."
  },
  {
    id: "u11_fee_vs_commission",
    unit: "U11",
    unitLabel: "Chapter 11: Account Features",
    sectionLabel: "Lesson 11.3: Trading Costs",
    topic: "Fee-Based vs. Commission-Based",
    sieLikely: true,
    question: "What is the difference between a fee-based and a commission-based account?",
    answer: "Commission-based: A commission is charged for each trade. Fee-based: A single fee (e.g., % of assets) is charged, regardless of the number of trades."
  },
  {
    id: "u11_discretionary_account",
    unit: "U11",
    unitLabel: "Chapter 11: Account Features",
    sectionLabel: "Lesson 11.3: Discretion",
    topic: "Discretionary Account",
    sieLikely: true,
    question: "What is a discretionary account?",
    answer: "An account where the customer has given the registered representative written authorization (a power of attorney) to place trades without prior consent for each trade."
  },
  {
    id: "u11_discretion_definition",
    unit: "U11",
    unitLabel: "Chapter 11: Account Features",
    sectionLabel: "Lesson 11.3: Discretion",
    topic: "Discretion Defined",
    sieLikely: true,
    question: "What are the '3 A's' that define discretion?",
    answer: "A representative has discretion if they choose the: 1. Action (Buy/Sell), 2. Asset (which security), OR 3. Amount (how many shares/dollars)."
  },

  // -----------------------------
  // Unit 12 – Economics and Analysis
  // -----------------------------
  {
    id: "u12_business_cycle",
    unit: "U12",
    unitLabel: "Chapter 12: Economics and Analysis",
    sectionLabel: "Lesson 12.1: The Business Cycle",
    topic: "Business Cycle Phases",
    sieLikely: true,
    question: "What are the four phases of the business cycle?",
    answer: "Expansion (growth), Peak (top), Contraction (recession), and Trough (bottom)."
  },
  {
    id: "u12_recession",
    unit: "U12",
    unitLabel: "Chapter 12: Economics and Analysis",
    sectionLabel: "Lesson 12.1: The Business Cycle",
    topic: "Recession",
    sieLikely: true,
    question: "What is the traditional definition of a recession?",
    answer: "A decline in Gross Domestic Product (GDP) for two consecutive quarters (six months)."
  },
  {
    id: "u12_gdp",
    unit: "U12",
    unitLabel: "Chapter 12: Economics and Analysis",
    sectionLabel: "Lesson 12.2: Economic Indicators",
    topic: "GDP",
    sieLikely: true,
    question: "What is Gross Domestic Product (GDP)?",
    answer: "The total value of all goods and services produced within a country's borders over a specific period."
  },
  {
    id: "u12_cpi",
    unit: "U12",
    unitLabel: "Chapter 12: Economics and Analysis",
    sectionLabel: "Lesson 12.2: Economic Indicators",
    topic: "Consumer Price Index (CPI)",
    sieLikely: true,
    question: "What does the Consumer Price Index (CPI) measure?",
    answer: "The CPI measures inflation by tracking the average change in prices paid by consumers for a basket of goods and services."
  },
  {
    id: "u12_economic_indicators",
    unit: "U12",
    unitLabel: "Chapter 12: Economics and Analysis",
    sectionLabel: "Lesson 12.2: Economic Indicators",
    topic: "Economic Indicators",
    sieLikely: true,
    question: "What is the difference between leading, lagging, and coincident economic indicators?",
    answer: "Leading: Change *before* the economy (e.g., S&P 500). Lagging: Change *after* the economy (e.g., unemployment rate). Coincident: Change *with* the economy (e.g., GDP)."
  },
  {
    id: "u12_cyclical_industries",
    unit: "U12",
    unitLabel: "Chapter 12: Economics and Analysis",
    sectionLabel: "Lesson 12.3: Industries and the Economy",
    topic: "Cyclical Industries",
    sieLikely: true,
    question: "What are cyclical industries?",
    answer: "Industries (like auto and heavy equipment) that are highly sensitive to the business cycle. They do well in expansions and poorly in recessions."
  },
  {
    id: "u12_defensive_industries",
    unit: "U12",
    unitLabel: "Chapter 12: Economics and Analysis",
    sectionLabel: "Lesson 12.3: Industries and the Economy",
    topic: "Defensive Industries",
    sieLikely: true,
    question: "What are non-cyclical (defensive) industries?",
    answer: "Industries (like food, utilities, and pharmaceuticals) that are least affected by the business cycle. They provide basic needs."
  },
  {
    id: "u12_balance_sheet",
    unit: "U12",
    unitLabel: "Chapter 12: Economics and Analysis",
    sectionLabel: "Lesson 12.4: Corporate Financials",
    topic: "Balance Sheet Equation",
    sieLikely: true,
    question: "What is the fundamental balance sheet equation?",
    answer: "Assets = Liabilities + Net Worth (or Shareholders' Equity)."
  },
  {
    id: "u12_income_statement",
    unit: "U12",
    unitLabel: "Chapter 12: Economics and Analysis",
    sectionLabel: "Lesson 12.4: Corporate Financials",
    topic: "Income Statement",
    sieLikely: true,
    question: "What does an income statement show?",
    answer: "A company's revenues and expenses over a specific period (like a quarter or year), resulting in a net income or net loss."
  },
  {
    id: "u12_exchange_rates_exports",
    unit: "U12",
    unitLabel: "Chapter 12: Economics and Analysis",
    sectionLabel: "Lesson 12.5: Exchange Rates",
    topic: "Exchange Rates",
    sieLikely: true,
    question: "If the U.S. Dollar strengthens, what is the impact on U.S. exporters?",
    answer: "A stronger dollar makes U.S. goods more expensive for foreigners, which tends to *hurt* U.S. exporters."
  },
  {
    id: "u12_monetary_policy",
    unit: "U12",
    unitLabel: "Chapter 12: Economics and Analysis",
    sectionLabel: "Lesson 12.6: Fiscal & Monetary Policy",
    topic: "Monetary Policy",
    sieLikely: true,
    question: "Who controls monetary policy and what is its goal?",
    answer: "The Federal Reserve Board (the 'Fed') controls monetary policy by managing the money supply and interest rates to control inflation and promote employment."
  },
  {
    id: "u12_fiscal_policy",
    unit: "U12",
    unitLabel: "Chapter 12: Economics and Analysis",
    sectionLabel: "Lesson 12.6: Fiscal & Monetary Policy",
    topic: "Fiscal Policy",
    sieLikely: true,
    question: "Who controls fiscal policy and what tools does it use?",
    answer: "Congress and the President control fiscal policy, using government spending and taxation to influence the economy."
  },
  {
    id: "u12_fed_tools",
    unit: "U12",
    unitLabel: "Chapter 12: Economics and Analysis",
    sectionLabel: "Lesson 12.6: Fiscal & Monetary Policy",
    topic: "Fed Tools",
    sieLikely: true,
    question: "What is the Federal Reserve's most frequently used tool to change the money supply?",
    answer: "Federal Open Market Operations (FOMC) — buying and selling U.S. Government securities in the open market."
  },
  {
    id: "u12_fed_eases_money",
    unit: "U12",
    unitLabel: "Chapter 12: Economics and Analysis",
    sectionLabel: "Lesson 12.6: Fiscal & Monetary Policy",
    topic: "Fed Easing",
    sieLikely: true,
    question: "To ease (expand) the money supply, what will the Fed do?",
    answer: "It will BUY U.S. Government securities, which injects money into the banking system and causes interest rates to fall."
  },
  {
    id: "u12_fed_tightens_money",
    unit: "U12",
    unitLabel: "Chapter 12: Economics and Analysis",
    sectionLabel: "Lesson 12.6: Fiscal & Monetary Policy",
    topic: "Fed Tightening",
    sieLikely: true,
    question: "To tighten (contract) the money supply, what will the Fed do?",
    answer: "It will SELL U.S. Government securities, which drains money from the banking system and causes interest rates to rise."
  },
  {
    id: "u12_discount_rate",
    unit: "U12",
    unitLabel: "Chapter 12: Economics and Analysis",
    sectionLabel: "Lesson 12.6: Fiscal & Monetary Policy",
    topic: "Interest Rates",
    sieLikely: true,
    question: "What is the 'discount rate'?",
    answer: "The interest rate the Federal Reserve charges banks for short-term loans. This is the only rate the Fed directly sets."
  },
  {
    id: "u12_fed_funds_rate",
    unit: "U12",
    unitLabel: "Chapter 12: Economics and Analysis",
    sectionLabel: "Lesson 12.6: Fiscal & Monetary Policy",
    topic: "Interest Rates",
    sieLikely: true,
    question: "What is the 'Fed funds rate'?",
    answer: "The interest rate that banks charge each other for overnight loans. It is a target of the Fed's open market operations."
  },

  // -----------------------------
  // Unit 13 – Investment Returns and Investment Taxation
  // -----------------------------
  {
    id: "u13_current_yield",
    unit: "U13",
    unitLabel: "Chapter 13: Returns and Taxation",
    sectionLabel: "Lesson 13.1: Measuring Returns",
    topic: "Current Yield (Stock)",
    sieLikely: true,
    question: "How do you calculate the Current Yield of a stock?",
    answer: "Annual Dividend / Current Market Price."
  },
  {
    id: "u13_capital_gain",
    unit: "U13",
    unitLabel: "Chapter 13: Returns and Taxation",
    sectionLabel: "Lesson 13.1: Measuring Returns",
    topic: "Capital Gains",
    sieLikely: true,
    question: "How is a capital gain or loss calculated?",
    answer: "Sales Proceeds - Cost Basis. (Cost Basis is what you paid, including commissions)."
  },
  {
    id: "u13_total_return",
    unit: "U13",
    unitLabel: "Chapter 13: Returns and Taxation",
    sectionLabel: "Lesson 13.1: Measuring Returns",
    topic: "Total Return",
    sieLikely: true,
    question: "What is the formula for Total Return on an investment?",
    answer: "(Income [Dividends/Interest] + Capital Gain/Loss) / Cost Basis."
  },
  {
    id: "u13_ordinary_income",
    unit: "U13",
    unitLabel: "Chapter 13: Returns and Taxation",
    sectionLabel: "Lesson 13.2: Types of Income",
    topic: "Ordinary Income",
    sieLikely: true,
    question: "What types of income are taxed as 'ordinary income'?",
    answer: "Earned income (wages), investment income (interest, non-qualified dividends), and short-term capital gains."
  },
  {
    id: "u13_capital_gains_tax",
    unit: "U13",
    unitLabel: "Chapter 13: Returns and Taxation",
    sectionLabel: "Lesson 13.2: Types of Income",
    topic: "Capital Gains Tax",
    sieLikely: true,
    question: "What is the difference in taxation between short-term and long-term capital gains?",
    answer: "Short-term (held 1 year or less) are taxed at ordinary income rates. Long-term (held more than 1 year) are taxed at lower, preferential rates."
  },
  {
    id: "u13_capital_loss_deduction",
    unit: "U13",
    unitLabel: "Chapter 13: Returns and Taxation",
    sectionLabel: "Lesson 13.3: Using Capital Losses",
    topic: "Capital Loss Deduction",
    sieLikely: true,
    question: "How are net capital losses treated for tax purposes?",
    answer: "Capital losses can offset capital gains. If losses exceed gains, an investor can deduct up to $3,000 of net losses against ordinary income per year. Unused losses can be carried forward."
  },
  {
    id: "u13_wash_sale",
    unit: "U13",
    unitLabel: "Chapter 13: Returns and Taxation",
    sectionLabel: "Lesson 13.3: Using Capital Losses",
    topic: "Wash Sale Rule",
    sieLikely: true,
    question: "What is the 'wash sale' rule?",
    answer: "If an investor sells a security at a loss, they cannot claim that loss for tax purposes if they repurchase the same (or substantially identical) security within 30 days before or after the sale."
  },

  // -----------------------------
  // Unit 14 – Making Recommendations
  // -----------------------------
  {
    id: "u14_systematic_risk",
    unit: "U14",
    unitLabel: "Chapter 14: Making Recommendations",
    sectionLabel: "Lesson 14.1: Types of Risk",
    topic: "Systematic Risk",
    sieLikely: true,
    question: "What is systematic risk and can it be diversified away?",
    answer: "Risk that affects the entire market (e.g., market risk, interest-rate risk, inflation risk). It cannot be eliminated through diversification."
  },
  {
    id: "u14_nonsystematic_risk",
    unit: "U14",
    unitLabel: "Chapter 14: Making Recommendations",
    sectionLabel: "Lesson 14.1: Types of Risk",
    topic: "Nonsystematic Risk",
    sieLikely: true,
    question: "What is nonsystematic risk and how can it be mitigated?",
    answer: "Risk that affects a specific company or industry (e.g., business risk, credit risk). It can be reduced or eliminated through diversification."
  },
  {
    id: "u14_interest_rate_risk",
    unit: "U14",
    unitLabel: "Chapter 14: Making Recommendations",
    sectionLabel: "Lesson 14.1: Types of Risk",
    topic: "Interest Rate Risk",
    sieLikely: true,
    question: "What type of security is most affected by interest-rate risk?",
    answer: "Bonds, especially long-term bonds. (Rising interest rates cause bond prices to fall)."
  },
  {
    id: "u14_inflation_risk",
    unit: "U14",
    unitLabel: "Chapter 14: Making Recommendations",
    sectionLabel: "Lesson 14.1: Types of Risk",
    topic: "Inflation Risk",
    sieLikely: true,
    question: "What type of security is most affected by inflation (purchasing power) risk?",
    answer: "Fixed-income securities, like bonds or preferred stock, because their fixed payments buy less over time as prices rise."
  },
  {
    id: "u14_liquidity_risk",
    unit: "U14",
    unitLabel: "Chapter 14: Making Recommendations",
    sectionLabel: "Lesson 14.1: Types of Risk",
    topic: "Liquidity Risk",
    sieLikely: true,
    question: "What is liquidity risk?",
    answer: "The risk that an investor might not be able to sell an investment quickly at a fair market price. (Examples: DPPs, private REITs, some municipal bonds)."
  },
  {
    id: "u14_diversification",
    unit: "U14",
    unitLabel: "Chapter 14: Making Recommendations",
    sectionLabel: "Lesson 14.2: Mitigating Risk",
    topic: "Diversification",
    sieLikely: true,
    question: "What is diversification and what type of risk does it mitigate?",
    answer: "Spreading investments across different asset classes, industries, and regions to reduce risk. It primarily mitigates nonsystematic (company-specific) risk."
  },
  {
    id: "u14_suitability_kyc",
    unit: "U14",
    unitLabel: "Chapter 14: Making Recommendations",
    sectionLabel: "Lesson 14.3: Recommendations",
    topic: "Suitability (Know Your Customer)",
    sieLikely: true,
    question: "What is the 'Know Your Customer' (KYC) rule?",
    answer: "The FINRA rule that requires firms to use reasonable diligence to gather essential facts about a customer, such as their investment objectives, risk tolerance, and financial situation."
  },
  {
    id: "u14_suitability_definition",
    unit: "U14",
    unitLabel: "Chapter 14: Making Recommendations",
    sectionLabel: "Lesson 14.3: Recommendations",
    topic: "Suitability",
    sieLikely: true,
    question: "What is the 'suitability' obligation?",
    answer: "The obligation for a representative to have a reasonable basis to believe that a recommended transaction or strategy is suitable for the customer, based on their KYC profile."
  },
  {
    id: "u14_reg_bi",
    unit: "U14",
    unitLabel: "Chapter 14: Making Recommendations",
    sectionLabel: "Lesson 14.4: Regulation Best Interest",
    topic: "Regulation Best Interest (Reg BI)",
    sieLikely: true,
    question: "What is the 'Best Interest' standard under Reg BI?",
    answer: "A standard of conduct for broker-dealers when recommending any securities transaction or strategy to a *retail customer*. It requires acting in the customer's best interest and not placing the firm's interests ahead of the customer's."
  },
  {
    id: "u14_reg_bi_obligations",
    unit: "U14",
    unitLabel: "Chapter 14: Making Recommendations",
    sectionLabel: "Lesson 14.4: Regulation Best Interest",
    topic: "Reg BI Obligations",
    sieLikely: true,
    question: "What are the four component obligations of Regulation Best Interest?",
    answer: "1. Disclosure, 2. Care, 3. Conflict of Interest, and 4. Compliance."
  },
  {
    id: "u14_form_crs",
    unit: "U14",
    unitLabel: "Chapter 14: Making Recommendations",
    sectionLabel: "Lesson 14.4: Regulation Best Interest",
    topic: "Form CRS",
    sieLikely: true,
    question: "What is Form CRS (Customer Relationship Summary)?",
    answer: "A disclosure document required by Reg BI that provides retail investors with a simple, easy-to-understand summary of the nature of their relationship with the firm."
  },
  {
    id: "u14_djia",
    unit: "U14",
    unitLabel: "Chapter 14: Making Recommendations",
    sectionLabel: "Lesson 14.5: Market Benchmarks",
    topic: "Market Indices",
    sieLikely: false,
    question: "What is the Dow Jones Industrial Average (DJIA)?",
    answer: "A price-weighted average of 30 significant, large-cap U.S. stocks."
  },
  {
    id: "u14_sp500",
    unit: "U14",
    unitLabel: "Chapter 14: Making Recommendations",
    sectionLabel: "Lesson 14.5: Market Benchmarks",
    topic: "Market Indices",
    sieLikely: true,
    question: "What is the S&P 500 Index?",
    answer: "A market-cap-weighted index of 500 of the largest U.S. companies. It is the most common benchmark for the overall U.S. stock market."
  },

  // -----------------------------
  // Unit 15 – Registration and Continuing Education
  // -----------------------------
  {
    id: "u15_form_u4",
    unit: "U15",
    unitLabel: "Chapter 15: Registration",
    sectionLabel: "Lesson 15.1: Associating with a Member Firm",
    topic: "Form U4",
    sieLikely: true,
    question: "What is Form U4?",
    answer: "The Uniform Application for Securities Industry Registration. It is filed to register a new representative with FINRA and the states. It includes personal, employment, and disciplinary history."
  },
  {
    id: "u15_form_u5",
    unit: "U15",
    unitLabel: "Chapter 15: Registration",
    sectionLabel: "Lesson 15.2: Leaving a Member Firm",
    topic: "Form U5",
    sieLikely: true,
    question: "What is Form U5 and when must it be filed?",
    answer: "The Uniform Termination Notice. The firm must file it with FINRA within 30 days of a representative's termination."
  },
  {
    id: "u15_license_lapse",
    unit: "U15",
    unitLabel: "Chapter 15: Registration",
    sectionLabel: "Lesson 15.2: Leaving a Member Firm",
    topic: "License Lapse",
    sieLikely: true,
    question: "How long can a registered representative be unaffiliated with a firm before their licenses (like Series 7) lapse?",
    answer: "Two years. After two years of being unaffiliated (not having a Form U5 filed), they must retake the qualifying exams to re-register."
  },
  {
    id: "u15_sie_lapse",
    unit: "U15",
    unitLabel: "Chapter 15: Registration",
    sectionLabel: "Lesson 15.2: Leaving a Member Firm",
    topic: "SIE Lapse",
    sieLikely: false,
    question: "How long is the SIE credential valid for?",
    answer: "Four years. A person who passes the SIE has four years to pass a top-off exam (like Series 7) and associate with a firm."
  },
  {
    id: "u15_statutory_disqualification",
    unit: "U15",
    unitLabel: "Chapter 15: Registration",
    sectionLabel: "Lesson 15.1: Associating with a Member Firm",
    topic: "Statutory Disqualification",
    sieLikely: true,
    question: "What is a 'statutory disqualification'?",
    answer: "An event that can prevent a person from registering in the securities industry, such as any felony conviction or a misdemeanor conviction involving securities or money within the last 10 years."
  },
  {
    id: "u15_brokercheck",
    unit: "U15",
    unitLabel: "Chapter 15: Registration",
    sectionLabel: "Lesson 15.1: Associating with a Member Firm",
    topic: "BrokerCheck",
    sieLikely: true,
    question: "What is FINRA's BrokerCheck system?",
    answer: "A public database that allows investors to look up the registration and disciplinary history of any member firm or registered representative."
  },
  {
    id: "u15_ce_regulatory",
    unit: "U15",
    unitLabel: "Chapter 15: Registration",
    sectionLabel: "Lesson 15.3: Continuing Education",
    topic: "Continuing Education (Regulatory)",
    sieLikely: true,
    question: "What is the Regulatory Element of Continuing Education?",
    answer: "FINRA-administered training on rules and compliance, completed annually (by December 31)."
  },
  {
    id: "u15_ce_firm",
    unit: "U15",
    unitLabel: "Chapter 15: Registration",
    sectionLabel: "Lesson 15.3: Continuing Education",
    topic: "Continuing Education (Firm)",
    sieLikely: true,
    question: "What is the Firm Element of Continuing Education?",
    answer: "An annual training plan created by the member firm, covering topics relevant to the firm's business and its representatives' roles."
  },

  // -----------------------------
  // Unit 16 – Government Regulators and Regulations
  // -----------------------------
  {
    id: "u16_sec",
    unit: "U16",
    unitLabel: "Chapter 16: Government Regulators",
    sectionLabel: "Lesson 16.1: Federal Regulators",
    topic: "SEC",
    sieLikely: true,
    question: "What is the role of the Securities and Exchange Commission (SEC)?",
    answer: "The SEC is the primary federal agency responsible for regulating the securities industry, enforcing securities laws, and overseeing SROs like FINRA."
  },
  {
    id: "u16_act_1933",
    unit: "U16",
    unitLabel: "Chapter 16: Government Regulators",
    sectionLabel: "Lesson 16.1: Federal Regulators",
    topic: "Securities Act of 1933",
    sieLikely: true,
    question: "What does the Securities Act of 1933 regulate?",
    answer: "The primary market. It requires full and fair disclosure (via a prospectus) for all new issues of non-exempt securities."
  },
  {
    id: "u16_act_1934",
    unit: "U16",
    unitLabel: "Chapter 16: Government Regulators",
    sectionLabel: "Lesson 16.1: Federal Regulators",
    topic: "Securities Exchange Act of 1934",
    sieLikely: true,
    question: "What does the Securities Exchange Act of 1934 regulate?",
    answer: "The secondary market. It created the SEC and regulates exchanges, broker-dealers, and anti-fraud provisions (like insider trading)."
  },
  {
    id: "u16_fincen",
    unit: "U16",
    unitLabel: "Chapter 16: Government Regulators",
    sectionLabel: "Lesson 16.1: Federal Regulators",
    topic: "FinCEN",
    sieLikely: true,
    question: "What is FinCEN (Financial Crimes Enforcement Network)?",
    answer: "A bureau of the U.S. Treasury that combats money laundering and terrorist financing. It collects CTRs and SARs."
  },
  {
    id: "u16_ctr",
    unit: "U16",
    unitLabel: "Chapter 16: Government Regulators",
    sectionLabel: "Lesson 16.3: FinCEN Reports",
    topic: "Currency Transaction Report (CTR)",
    sieLikely: true,
    question: "When must a firm file a Currency Transaction Report (CTR)?",
    answer: "For any cash deposit from a single customer of *more than* $10,000 in a single business day. Must be filed within 15 days."
  },
  {
    id: "u16_sar",
    unit: "U16",
    unitLabel: "Chapter 16: Government Regulators",
    sectionLabel: "Lesson 16.3: FinCEN Reports",
    topic: "Suspicious Activity Report (SAR)",
    sieLikely: true,
    question: "When must a firm file a Suspicious Activity Report (SAR)?",
    answer: "For any suspicious transaction of $5,000 or more. Must be filed within 30 days. The customer must *not* be notified."
  },
  {
    id: "u16_aml_stages",
    unit: "U16",
    unitLabel: "Chapter 16: Government Regulators",
    sectionLabel: "Lesson 16.3: FinCEN Reports",
    topic: "Money Laundering Stages",
    sieLikely: false,
    question: "What are the three stages of money laundering?",
    answer: "1. Placement (depositing cash), 2. Layering (complex transactions to hide the source), 3. Integration (mixing money into the legitimate economy)."
  },
  {
    id: "u16_ofac",
    unit: "U16",
    unitLabel: "Chapter 16: Government Regulators",
    sectionLabel: "Lesson 16.4: OFAC",
    topic: "OFAC",
    sieLikely: true,
    question: "What is OFAC (Office of Foreign Assets Control)?",
    answer: "A bureau of the U.S. Treasury that maintains the Specially Designated Nationals (SDN) list. Firms are prohibited from doing business with anyone on the SDN list."
  },
  {
    id: "u16_state_admin",
    unit: "U16",
    unitLabel: "Chapter 16: Government Regulators",
    sectionLabel: "Lesson 16.2: State Regulators",
    topic: "State Regulators",
    sieLikely: true,
    question: "What is a 'state Administrator'?",
    answer: "The top securities regulator in a state, responsible for enforcing the state's blue-sky laws (based on the Uniform Securities Act)."
  },
  {
    id: "u16_sipc",
    unit: "U16",
    unitLabel: "Chapter 16: Government Regulators",
    sectionLabel: "Lesson 16.3: SIPC and FDIC",
    topic: "SIPC",
    sieLikely: true,
    question: "What is SIPC (Securities Investor Protection Corporation)?",
    answer: "A non-profit corporation that protects customers from losses if their broker-dealer goes bankrupt (fails). It is *not* a government agency and does *not* protect against market losses."
  },
  {
    id: "u16_sipc_coverage",
    unit: "U16",
    unitLabel: "Chapter 16: Government Regulators",
    sectionLabel: "Lesson 16.3: SIPC and FDIC",
    topic: "SIPC Coverage",
    sieLikely: true,
    question: "What are the SIPC coverage limits?",
    answer: "Up to $500,000 total per separate customer, of which no more than $250,000 can be for cash."
  },
  {
    id: "u16_fdic",
    unit: "U16",
    unitLabel: "Chapter 16: Government Regulators",
    sectionLabel: "Lesson 16.3: SIPC and FDIC",
    topic: "FDIC",
    sieLikely: true,
    question: "What is the FDIC (Federal Deposit Insurance Corporation)?",
    answer: "A government agency that insures bank deposits (checking, savings, CDs) against bank failure. It does *not* cover securities, mutual funds, or annuities."
  },

  // -----------------------------
  // Unit 17 – Self-Regulating Organizations
  // -----------------------------
  {
    id: "u17_sro",
    unit: "U17",
    unitLabel: "Chapter 17: SROs",
    sectionLabel: "Lesson 17.1: FINRA",
    topic: "SRO",
    sieLikely: true,
    question: "What is a Self-Regulatory Organization (SRO)?",
    answer: "An organization (like FINRA or MSRB) that is empowered by the SEC to write and enforce rules for its member firms and associated persons."
  },
  {
    id: "u17_finra",
    unit: "U17",
    unitLabel: "Chapter 17: SROs",
    sectionLabel: "Lesson 17.1: FINRA",
    topic: "FINRA",
    sieLikely: true,
    question: "What is FINRA (Financial Industry Regulatory Authority)?",
    answer: "The largest SRO, responsible for regulating all broker-dealers and registered representatives in the United States."
  },
  {
    id: "u17_finra_rules",
    unit: "U17",
    unitLabel: "Chapter 17: SROs",
    sectionLabel: "Lesson 17.1: FINRA",
    topic: "FINRA Rule Groups",
    sieLikely: false,
    question: "What are the four main groups of FINRA rules?",
    answer: "1. Conduct Rules (interactions with public), 2. Code of Procedure (discipline), 3. Uniform Practice Code (trading/settlement), 4. Code of Arbitration (disputes)."
  },
  {
    id: "u17_arbitration",
    unit: "U17",
    unitLabel: "Chapter 17: SROs",
    sectionLabel: "Lesson 17.1: FINRA",
    topic: "Arbitration",
    sieLikely: true,
    question: "What is FINRA arbitration and is it appealable?",
    answer: "A mandatory process for resolving monetary disputes between member firms and/or associated persons. It is final and binding; there is no appeal."
  },
  {
    id: "u17_msrb",
    unit: "U17",
    unitLabel: "Chapter 17: SROs",
    sectionLabel: "Lesson 17.2: MSRB",
    topic: "MSRB",
    sieLikely: true,
    question: "What does the MSRB (Municipal Securities Rulemaking Board) do?",
    answer: "It is an SRO that writes rules for the municipal securities industry (dealers and advisors). It does *not* have enforcement power."
  },
  {
    id: "u17_msrb_enforcement",
    unit: "U17",
    unitLabel: "Chapter 17: SROs",
    sectionLabel: "Lesson 17.2: MSRB",
    topic: "MSRB Enforcement",
    sieLikely: true,
    question: "Who enforces MSRB rules?",
    answer: "FINRA enforces MSRB rules for broker-dealers. The SEC, Comptroller of the Currency, and FRB enforce them for banks."
  },
  {
    id: "u17_cboe",
    unit: "U17",
    unitLabel: "Chapter 17: SROs",
    sectionLabel: "Lesson 17.2: Exchanges",
    topic: "CBOE",
    sieLikely: false,
    question: "What is the CBOE (Chicago Board Options Exchange)?",
    answer: "The SRO that regulates all matters related to options trading."
  },
  {
    id: "u17_recordkeeping_lifetime",
    unit: "U17",
    unitLabel: "Chapter 17: SROs",
    sectionLabel: "Lesson 17.3: Record Retention",
    topic: "Recordkeeping (Lifetime)",
    sieLikely: true,
    question: "What records must be kept for the *life* of the firm?",
    answer: "Core organizational documents: Corporate Charter/Articles of Incorporation, Partnership Agreement, and Board Meeting Minutes."
  },
  {
    id: "u17_recordkeeping_6year",
    unit: "U17",
    unitLabel: "Chapter 17: SROs",
    sectionLabel: "Lesson 17.3: Record Retention",
    topic: "Recordkeeping (6-Year)",
    sieLikely: true,
    question: "What records must be kept for *six years*?",
    answer: "Primary financial records: Blotters (trade records), General Ledger, Customer Ledgers (statements), and Customer Account Records (like the new account form)."
  },
  {
    id: "u17_recordkeeping_3year",
    unit: "U17",
    unitLabel: "Chapter 17: SROs",
    sectionLabel: "Lesson 17.3: Record Retention",
    topic: "Recordkeeping (3-Year)",
    sieLikely: true,
    question: "What records must be kept for *three years*?",
    answer: "Most other records, including advertising, correspondence, trade tickets (order forms), and customer confirmations."
  },
  {
    id: "u17_complaint_records",
    unit: "U17",
    unitLabel: "Chapter 17: SROs",
    sectionLabel: "Lesson 17.3: Record Retention",
    topic: "Recordkeeping (Complaints)",
    sieLikely: true,
    question: "How long must written customer complaints be kept?",
    answer: "Four years (FINRA rule)."
  },

  // -----------------------------
  // Unit 18 – Communications
  // -----------------------------
  {
    id: "u18_comm_categories",
    unit: "U18",
    unitLabel: "Chapter 18: Communications",
    sectionLabel: "Lesson 18.1: Communications with the Public",
    topic: "Communication Categories",
    sieLikely: true,
    question: "What are the three categories of public communications under FINRA Rule 2210?",
    answer: "1. Retail Communication, 2. Correspondence, 3. Institutional Communication."
  },
  {
    id: "u18_retail_comm",
    unit: "U18",
    unitLabel: "Chapter 18: Communications",
    sectionLabel: "Lesson 18.1: Communications with the Public",
    topic: "Retail Communication",
    sieLikely: true,
    question: "What is 'retail communication' and what is its approval requirement?",
    answer: "Any written communication distributed to *more than 25* retail investors in a 30-day period. It requires principal pre-approval."
  },
  {
    id: "u18_correspondence",
    unit: "U18",
    unitLabel: "Chapter 18: Communications",
    sectionLabel: "Lesson 18.1: Communications with the Public",
    topic: "Correspondence",
    sieLikely: true,
    question: "What is 'correspondence' and what is its approval requirement?",
    answer: "Any written communication distributed to *25 or fewer* retail investors in a 30-day period. It requires principal pre- or post-review (spot-check)."
  },
  {
    id: "u18_institutional_comm",
    unit: "U18",
    unitLabel: "Chapter 18: Communications",
    sectionLabel: "Lesson 18.1: Communications with the Public",
    topic: "Institutional Communication",
    sieLikely: true,
    question: "What is 'institutional communication'?",
    answer: "Any communication distributed *only* to institutional investors (e.g., banks, mutual funds, entities with >$50M in assets). Does not require principal pre-approval."
  },
  {
    id: "u18_tcpa",
    unit: "U18",
    unitLabel: "Chapter 18: Communications",
    sectionLabel: "Lesson 18.2: Telephone Consumer Protection Act",
    topic: "TCPA",
    sieLikely: true,
    question: "What are the time restrictions for cold-calling under the TCPA?",
    answer: "Solicitation calls may only be made between 8:00 a.m. and 9:00 p.m. in the *recipient's* time zone."
  },
  {
    id: "u18_do_not_call",
    unit: "U18",
    unitLabel: "Chapter 18: Communications",
    sectionLabel: "Lesson 18.2: Telephone Consumer Protection Act",
    topic: "Do Not Call List",
    sieLikely: true,
    question: "What two 'Do Not Call' lists must a firm maintain and respect?",
    answer: "1. The firm's internal Do Not Call list, and 2. The National Do Not Call Registry."
  },
  {
    id: "u18_account_statements",
    unit: "U18",
    unitLabel: "Chapter 18: Communications",
    sectionLabel: "Lesson 18.3: Delivery Requirements",
    topic: "Account Statements",
    sieLikely: true,
    question: "How often must account statements be sent to customers?",
    answer: "At least quarterly. However, if the account holds penny stocks or is active (trades occurred), statements must be sent monthly."
  },
  {
    id: "u18_trade_confirmation",
    unit: "U18",
    unitLabel: "Chapter 18: Communications",
    sectionLabel: "Lesson 18.3: Delivery Requirements",
    topic: "Trade Confirmation",
    sieLikely: true,
    question: "When must a trade confirmation be sent?",
    answer: "At or before the completion of the transaction (the settlement date)."
  },
  {
    id: "u18_reg_sp",
    unit: "U18",
    unitLabel: "Chapter 18: Communications",
    sectionLabel: "Lesson 18.4: Regulation SP",
    topic: "Regulation SP",
    sieLikely: true,
    question: "What is the purpose of Regulation SP?",
    answer: "To protect the privacy of customer's nonpublic personal information (NPI). It requires firms to provide a privacy notice and a reasonable way to opt-out of sharing info."
  },
  {
    id: "u18_bcp",
    unit: "U18",
    unitLabel: "Chapter 18: Communications",
    sectionLabel: "Lesson 18.4: Business Continuity",
    topic: "Business Continuity Plan (BCP)",
    sieLikely: true,
    question: "What is a Business Continuity Plan (BCP)?",
    answer: "A required plan that firms must have to address how they will respond to a significant business disruption, ensuring customer access to funds/securities and data backup."
  },

  // -----------------------------
  // Unit 19 – Business Ethics
  // -----------------------------
  {
    id: "u19_market_manipulation",
    unit: "U19",
    unitLabel: "Chapter 19: Business Ethics",
    sectionLabel: "Lesson 19.1: Prohibited Activities",
    topic: "Market Manipulation",
    sieLikely: true,
    question: "What is 'pump and dump'?",
    answer: "A prohibited manipulation where a fraudster inflates (pumps up) the price of a stock with false rumors, then sells (dumps) their shares at the high price."
  },
  {
    id: "u19_front_running",
    unit: "U19",
    unitLabel: "Chapter 19: Business Ethics",
    sectionLabel: "Lesson 19.1: Prohibited Activities",
    topic: "Front-Running",
    sieLikely: true,
    question: "What is 'front-running'?",
    answer: "The prohibited practice of a representative placing an order for their own account ahead of a large customer order they know is coming, to profit from the price movement."
  },
  {
    id: "u19_churning",
    unit: "U19",
    unitLabel: "Chapter 19: Business Ethics",
    sectionLabel: "Lesson 19.1: Prohibited Activities",
    topic: "Churning",
    sieLikely: true,
    question: "What is 'churning' (excessive trading)?",
    answer: "A prohibited activity where a representative trades excessively in a customer's account (especially a discretionary one) to generate commissions, not to benefit the customer."
  },
  {
    id: "u19_freeriding",
    unit: "U19",
    unitLabel: "Chapter 19: Business Ethics",
    sectionLabel: "Lesson 19.1: Prohibited Activities",
    topic: "Freeriding",
    sieLikely: true,
    question: "What is 'freeriding'?",
    answer: "A prohibited activity where an investor buys and then sells a security before paying for the purchase. The penalty is a 90-day frozen account."
  },
  {
    id: "u19_ipo_rule_5130",
    unit: "U19",
    unitLabel: "Chapter 19: Business Ethics",
    sectionLabel: "Lesson 19.1: Prohibited Activities",
    topic: "IPO Rule 5130",
    sieLikely: true,
    question: "Who are 'restricted persons' under FINRA Rule 5130?",
    answer: "FINRA member firms and their employees (and their immediate family). They are prohibited from buying shares of a new common stock IPO at the public offering price."
  },
  {
    id: "u19_insider_trading",
    unit: "U19",
    unitLabel: "Chapter 19: Business Ethics",
    sectionLabel: "Lesson 19.2: Insider Trading",
    topic: "Insider Trading",
    sieLikely: true,
    question: "What is 'insider trading'?",
    answer: "The illegal trading of a security based on material, nonpublic information. Both the 'tipper' (who gives the info) and the 'tippee' (who trades on it) are liable."
  },
  {
    id: "u19_insider_penalties",
    unit: "U19",
    unitLabel: "Chapter 19: Business Ethics",
    sectionLabel: "Lesson 19.2: Insider Trading",
    topic: "Insider Trading Penalties",
    sieLikely: true,
    question: "What are the civil and criminal penalties for insider trading?",
    answer: "Civil: Up to treble damages (3x the profit gained or loss avoided). Criminal: Up to $5 million in fines and 20 years in prison."
  },
  {
    id: "u19_senior_exploitation",
    unit: "U19",
    unitLabel: "Chapter 19: Business Ethics",
    sectionLabel: "Lesson 19.3: Serving Seniors",
    topic: "Senior Exploitation",
    sieLikely: true,
    question: "What two actions can a firm take to protect 'specified adults' (seniors >65 or impaired adults >18) from financial exploitation?",
    answer: "1. Make a reasonable effort to get a 'trusted contact person'. 2. Place a temporary hold (up to 15 business days) on disbursements from the account."
  },
  {
    id: "u19_borrowing_lending",
    unit: "U19",
    unitLabel: "Chapter 19: Business Ethics",
    sectionLabel: "Lesson 19.4: Problematic Activities",
    topic: "Borrowing from Customers",
    sieLikely: true,
    question: "When is a registered representative permitted to borrow money from a customer?",
    answer: "Only if the firm's procedures allow it AND the customer is (1) immediate family, (2) a financial institution, or (3-5) the loan is based on a personal or business relationship outside the firm (with firm approval)."
  },
  {
    id: "u19_guarantees",
    unit: "U19",
    unitLabel: "Chapter 19: Business Ethics",
    sectionLabel: "Lesson 19.4: Problematic Activities",
    topic: "Guarantees",
    sieLikely: true,
    question: "Is a registered representative allowed to guarantee a customer against a loss?",
    answer: "No. Guaranteeing a customer against loss or sharing in their account (with exceptions) is prohibited."
  },
  {
    id: "u19_sharing_accounts",
    unit: "U19",
    unitLabel: "Chapter 19: Business Ethics",
    sectionLabel: "Lesson 19.4: Problematic Activities",
    topic: "Sharing in Accounts",
    sieLikely: false,
    question: "When can a representative share in a customer's account?",
    answer: "Only if they have written approval from the firm, open a joint account, and share in profits/losses *proportionate* to their financial contribution (exception for immediate family)."
  },
  {
    id: "u19_nonregistered_persons",
    unit: "U19",
    unitLabel: "Chapter 19: Business Ethics",
    sectionLabel: "Lesson 19.4: Problematic Activities",
    topic: "Nonregistered Persons",
    sieLikely: false,
    question: "What activities are nonregistered persons (like a sales assistant) prohibited from doing?",
    answer: "They cannot engage in securities business. They cannot solicit trades, make recommendations, qualify customers, or take orders."
  },
  {
    id: "u19_selling_away",
    unit: "U19",
    unitLabel: "Chapter 19: Business Ethics",
    sectionLabel: "Lesson 19.5: Outside Activities",
    topic: "Selling Away",
    sieLikely: true,
    question: "What is 'selling away' (private securities transactions)?",
    answer: "A prohibited activity where a representative sells securities outside their firm's supervision, without the firm's written approval (if compensated) or acknowledgment (if not)."
  },
  {
    id: "u19_outside_business_activity",
    unit: "U19",
    unitLabel: "Chapter 19: Business Ethics",
    sectionLabel: "Lesson 19.5: Outside Activities",
    topic: "Outside Business Activity (OBA)",
    sieLikely: true,
    question: "What must a representative do before engaging in an outside business activity (OBA) for compensation?",
    answer: "Provide prior written notice to their employing member firm. The firm has the right to reject or restrict the activity."
  },
  {
    id: "u19_gifts_gratuities",
    unit: "U19",
    unitLabel: "Chapter 19: Business Ethics",
    sectionLabel: "Lesson 19.5: Outside Activities",
    topic: "Gifts & Gratuities",
    sieLikely: true,
    question: "What is the FINRA annual limit on gifts given to an employee of another member firm?",
    answer: "$100 per person, per year. (This limit does not apply to normal business entertainment where the host is present)."
  },
  {
    id: "u19_msrb_g37",
    unit: "U19",
    unitLabel: "Chapter 19: Business Ethics",
    sectionLabel: "Lesson 19.5: Outside Activities",
    topic: "MSRB Rule G-37 (Pay to Play)",
    sieLikely: true,
    question: "What is the 'pay to play' rule (MSRB G-37)?",
    answer: "It prohibits a municipal firm from engaging in negotiated underwriting business with an issuer for two years after a contribution is made to an official of that issuer (by the firm or an MFP)."
  },
  {
    id: "u19_msrb_g37_exception",
    unit: "U19",
    unitLabel: "Chapter 19: Business Ethics",
    sectionLabel: "Lesson 19.5: Outside Activities",
    topic: "MSRB Rule G-37 (Exception)",
    sieLikely: true,
    question: "What is the exception to MSRB Rule G-37 for Municipal Finance Professionals (MFPs)?",
    answer: "An MFP can contribute up to $250 per election to an official for whom they are eligible to vote, without triggering the two-year ban."
  },
  {
    id: "u3_accrued_interest_calc",
    unit: "U3",
    unitLabel: "Chapter 3: Debt Securities",
    sectionLabel: "Lesson 3.1: Bond Basics",
    topic: "Accrued Interest Calculation",
    sieLikely: true,
    question: "What represents the day count convention for accrued interest on Corporate and Municipal bonds vs. U.S. Government bonds?",
    answer: "Corporate and Municipal bonds use a 30-day month / 360-day year. U.S. Government bonds use actual calendar days / 365-day year."
  },
  {
    id: "u3_bond_rating_scales",
    unit: "U3",
    unitLabel: "Chapter 3: Debt Securities",
    sectionLabel: "Lesson 3.3: Bond Ratings",
    topic: "Rating Scales",
    sieLikely: true,
    question: "What is the lowest investment-grade rating for S&P and Moody's?",
    answer: "S&P: BBB-. Moody's: Baa3. Any rating below these (BB+ or Ba1) is considered 'junk' or high-yield."
  },
  {
    id: "u3_money_market_cp",
    unit: "U3",
    unitLabel: "Chapter 3: Debt Securities",
    sectionLabel: "Lesson 3.8: Money Market Instruments",
    topic: "Commercial Paper",
    sieLikely: true,
    question: "What is the maximum maturity for Commercial Paper to remain exempt from SEC registration?",
    answer: "270 days (9 months). It is typically issued by corporations to finance short-term needs like payroll or accounts receivable."
  },
  {
    id: "u3_money_market_ba",
    unit: "U3",
    unitLabel: "Chapter 3: Debt Securities",
    sectionLabel: "Lesson 3.8: Money Market Instruments",
    topic: "Banker's Acceptance",
    sieLikely: true,
    question: "What is a Banker's Acceptance (BA) primarily used for?",
    answer: "To finance international trade (imports/exports). It is a time draft drawn on a bank with a maturity of 270 days or less."
  },
  {
    id: "u3_tax_equivalent_yield",
    unit: "U3",
    unitLabel: "Chapter 3: Debt Securities",
    sectionLabel: "Lesson 3.7: Municipal Bonds",
    topic: "Tax Equivalent Yield",
    sieLikely: true,
    question: "What is the formula for Tax Equivalent Yield (TEY)?",
    answer: "TEY = Municipal Yield / (100% - Tax Bracket). This is used to compare a tax-free muni bond yield to a taxable corporate bond yield."
  },
  {
    id: "u3_convertible_parity",
    unit: "U3",
    unitLabel: "Chapter 3: Debt Securities",
    sectionLabel: "Lesson 3.5: Corporate Bonds",
    topic: "Convertible Bond Parity",
    sieLikely: true,
    question: "How do you calculate the Conversion Ratio of a convertible bond?",
    answer: "Conversion Ratio = Par Value ($1,000) / Conversion Price. This tells you how many shares you get for converting one bond."
  },
  {
    id: "u3_treasury_tips",
    unit: "U3",
    unitLabel: "Chapter 3: Debt Securities",
    sectionLabel: "Lesson 3.6: Government Securities",
    topic: "TIPS",
    sieLikely: true,
    question: "How do Treasury Inflation-Protected Securities (TIPS) adjust for inflation?",
    answer: "The principal value is adjusted semiannually based on the CPI. The fixed coupon rate is then applied to the adjusted principal."
  },
  {
    id: "u3_agency_taxation",
    unit: "U3",
    unitLabel: "Chapter 3: Debt Securities",
    sectionLabel: "Lesson 3.6: Government Securities",
    topic: "Agency Debt Taxation",
    sieLikely: true,
    question: "How is interest income from GNMA, FNMA, and FHLMC securities taxed?",
    answer: "It is fully taxable at the federal, state, and local levels. (Unlike Treasury securities, which are exempt from state/local tax)."
  },
  {
    id: "u4_loi_rules",
    unit: "U4",
    unitLabel: "Chapter 4: Investment Companies",
    sectionLabel: "Lesson 4.3: Reducing Front-End Loads",
    topic: "Letter of Intent (LOI)",
    sieLikely: true,
    question: "What are the time limit and backdating rules for a Letter of Intent (LOI)?",
    answer: "An LOI is valid for 13 months. It can be backdated up to 90 days to include prior purchases."
  },
  {
    id: "u4_rights_of_accumulation",
    unit: "U4",
    unitLabel: "Chapter 4: Investment Companies",
    sectionLabel: "Lesson 4.3: Reducing Front-End Loads",
    topic: "Rights of Accumulation",
    sieLikely: true,
    question: "How do Rights of Accumulation (ROA) differ from an LOI?",
    answer: "ROA allows an investor to qualify for breakpoints based on total appreciation and prior contributions in the account (or related accounts) with no time limit."
  },
  {
    id: "u4_12b1_fees",
    unit: "U4",
    unitLabel: "Chapter 4: Investment Companies",
    sectionLabel: "Lesson 4.2: Investing in Mutual Funds",
    topic: "12b-1 Fees",
    sieLikely: true,
    question: "What is a 12b-1 fee and what is the maximum for a 'no-load' fund?",
    answer: "An annual fee for marketing and distribution costs. To call a fund 'no-load', the 12b-1 fee cannot exceed 0.25% of average net assets."
  },
  {
    id: "u4_closed_end_pricing",
    unit: "U4",
    unitLabel: "Chapter 4: Investment Companies",
    sectionLabel: "Lesson 4.1: Investment Companies",
    topic: "Closed-End Fund Pricing",
    sieLikely: true,
    question: "How is the price of a Closed-End Fund determined?",
    answer: "By supply and demand in the secondary market. The price can trade at a premium or discount to its Net Asset Value (NAV)."
  },
  {
    id: "u4_etf_vs_mutual_fund_trading",
    unit: "U4",
    unitLabel: "Chapter 4: Investment Companies",
    sectionLabel: "Lesson 6.3: REITs, ETFs, and ETNs",
    topic: "ETF Trading",
    sieLikely: true,
    question: "What is a primary trading difference between ETFs and Mutual Funds?",
    answer: "ETFs trade intraday on an exchange like stocks (can be bought on margin/sold short). Mutual funds use forward pricing (priced once daily at close)."
  },
  {
    id: "u4_subchapter_m",
    unit: "U4",
    unitLabel: "Chapter 4: Investment Companies",
    sectionLabel: "Lesson 4.5: Disclosure Documents",
    topic: "Subchapter M (Conduit Theory)",
    sieLikely: true,
    question: "What requirement must a mutual fund meet to act as a 'conduit' and avoid taxes on distributed income?",
    answer: "It must distribute at least 90% of its Net Investment Income (NII) to shareholders."
  },
  {
    id: "u4_pop_calculation",
    unit: "U4",
    unitLabel: "Chapter 4: Investment Companies",
    sectionLabel: "Lesson 4.4: Net Asset Value",
    topic: "Public Offering Price",
    sieLikely: true,
    question: "How do you calculate the Public Offering Price (POP) if given the NAV and Sales Charge %?",
    answer: "POP = NAV / (100% - Sales Charge %)."
  },
  {
    id: "u5_expiration_time",
    unit: "U5",
    unitLabel: "Chapter 5: Options",
    sectionLabel: "Lesson 5.6: Options Rules",
    topic: "Expiration",
    sieLikely: true,
    question: "When do standard equity option contracts expire?",
    answer: "On the third Friday of the expiration month at 11:59 PM ET."
  },
  {
    id: "u5_settlement_options",
    unit: "U5",
    unitLabel: "Chapter 5: Options",
    sectionLabel: "Lesson 5.6: Options Rules",
    topic: "Settlement",
    sieLikely: true,
    question: "What is the settlement time for option trades vs. option exercises?",
    answer: "Trades settle T+1 (next business day). Exercise of equity options settles T+2 (underlying stock delivery)."
  },
  {
    id: "u5_index_settlement",
    unit: "U5",
    unitLabel: "Chapter 5: Options",
    sectionLabel: "Lesson 5.5: Nonequity Options",
    topic: "Index Option Settlement",
    sieLikely: true,
    question: "How does the exercise of an Index Option settle?",
    answer: "It settles in CASH on T+1. The writer pays the holder the in-the-money amount."
  },
  {
    id: "u5_strategies_income",
    unit: "U5",
    unitLabel: "Chapter 5: Options",
    sectionLabel: "Lesson 5.4: Option Strategies",
    topic: "Income Strategy",
    sieLikely: true,
    question: "Which option strategy is best for generating income in a flat/neutral market?",
    answer: "Selling (Writing) Covered Calls. You keep the premium if the stock stays flat."
  },
  {
    id: "u5_strategies_hedge",
    unit: "U5",
    unitLabel: "Chapter 5: Options",
    sectionLabel: "Lesson 5.4: Option Strategies",
    topic: "Hedging Strategy",
    sieLikely: true,
    question: "What is the best strategy to protect a Long Stock position against a market decline?",
    answer: "Buy a Protective Put. It gives the right to sell the stock at a specific strike price."
  },
  {
    id: "u5_be_call",
    unit: "U5",
    unitLabel: "Chapter 5: Options",
    sectionLabel: "Lesson 5.3: Option Calculations",
    topic: "Call Breakeven",
    sieLikely: true,
    question: "What is the formula for the Breakeven point of a Call Option (Long or Short)?",
    answer: "Strike Price + Premium."
  },
  {
    id: "u5_be_put",
    unit: "U5",
    unitLabel: "Chapter 5: Options",
    sectionLabel: "Lesson 5.3: Option Calculations",
    topic: "Put Breakeven",
    sieLikely: true,
    question: "What is the formula for the Breakeven point of a Put Option (Long or Short)?",
    answer: "Strike Price - Premium."
  },
  {
    id: "u5_american_european",
    unit: "U5",
    unitLabel: "Chapter 5: Options",
    sectionLabel: "Lesson 5.6: Options Rules",
    topic: "American vs European Style",
    sieLikely: true,
    question: "What is the difference between American-style and European-style options?",
    answer: "American-style can be exercised ANY time before expiration (equity options). European-style can ONLY be exercised on expiration day (mostly index options)."
  }
];


// Application state
const state = {
  filterType: "all",   // "all", "unit", "review", "sie"
  filterValue: "ALL",
  flashIndex: 0,
  showAnswer: false,
  reviewSet: new Set()
};

// Map for Unit Labels
const UNIT_LABELS = {
  "U1": "Chapter 1: Equity Securities",
  "U2": "Chapter 2: Other Types of Equities and Corporate Actions",
  "U3": "Chapter 3: Debt Securities",
  "U4": "Chapter 4: Investment Companies",
  "U5": "Chapter 5: Options",
  "U6": "Chapter 6: Other Investment Types",
  "U7": "Chapter 7: Issuing Securities",
  "U8": "Chapter 8: Trading Securities",
  "U9": "Chapter 9: Basic Accounts",
  "U10": "Chapter 10: Retirement Accounts",
  "U11": "Chapter 11: Account Features",
  "U12": "Chapter 12: Economics and Analysis",
  "U13": "Chapter 13: Investment Returns and Investment Taxation",
  "U14": "Chapter 14: Making Recommendations",
  "U15": "Chapter 15: Registration and Continuing Education",
  "U16": "Chapter 16: Government Regulators and Regulations",
  "U17": "Chapter 17: Self-Regulating Organizations",
  "U18": "Chapter 18: Communications",
  "U19": "Chapter 19: Business Ethics"
};

// Load review set from localStorage
(function loadReviewSet() {
  try {
    const raw = window.localStorage.getItem("sie_flash_review_ids_v2");
    if (raw) {
      const arr = JSON.parse(raw);
      state.reviewSet = new Set(arr);
    }
  } catch (e) {
    state.reviewSet = new Set();
  }
})();

function saveReviewSet() {
  try {
    const arr = Array.from(state.reviewSet);
    window.localStorage.setItem("sie_flash_review_ids_v2", JSON.stringify(arr));
  } catch (e) {
    // ignore
  }
}

// Filtering helpers

function getFilteredCards(filterType, filterValue) {
  if (filterType === "all") {
    return FLASHCARDS.slice();
  }
  if (filterType === "unit") {
    return FLASHCARDS.filter(c => c.unit === filterValue);
  }
  if (filterType === "review") {
    return FLASHCARDS.filter(c => state.reviewSet.has(c.id));
  }
  if (filterType === "sie") {
    return FLASHCARDS.filter(c => c.sieLikely);
  }
  return FLASHCARDS.slice();
}

function getFilterLabel(prefix, filterType, filterValue) {
  if (filterType === "all") {
    return prefix + "All chapters";
  }
  if (filterType === "sie") {
    return prefix + "SIE exam-likely topics";
  }
  if (filterType === "review") {
    return prefix + "Marked for review";
  }
  if (filterType === "unit") {
    return prefix + (UNIT_LABELS[filterValue] || filterValue);
  }
  return prefix + "All chapters";
}

function updateMenuDeckCounts() {
  // Build a simple map of unit -> number of cards
  const counts = FLASHCARDS.reduce((acc, card) => {
    acc[card.unit] = (acc[card.unit] || 0) + 1;
    return acc;
  }, {});

  // Update chapter buttons to show how many cards are in each deck
  const unitButtons = document.querySelectorAll('.menu-btn[data-filter-type="unit"]');
  unitButtons.forEach(btn => {
    const unit = btn.dataset.filterValue;
    const count = counts[unit] || 0;

    // Clean any existing "(N cards)" suffix before appending the latest value
    let label = btn.textContent.trim();
    label = label.replace(/\(\d+\s+cards?\)$/i, "").trim();

    btn.textContent = count > 0
      ? `${label} (${count} cards)`
      : `${label} (0 cards)`;
  });
}

// View helpers

function showView(viewId) {
  document.getElementById("homeView").classList.add("hidden");
  document.getElementById("flashcardsView").classList.add("hidden");
  document.getElementById(viewId).classList.remove("hidden");
}

// Flashcards

function startFlashcards(filterType, filterValue) {
  state.filterType = filterType;
  state.filterValue = filterValue;
  state.flashIndex = 0;
  state.showAnswer = false;

  showView("flashcardsView");
  renderFlashcard();
}

function renderFlashcard() {
  const cards = getFilteredCards(state.filterType, state.filterValue);
  const topicEl = document.getElementById("cardTopic");
  const subtopicEl = document.getElementById("cardSubtopic");
  const qEl = document.getElementById("cardQuestion");
  const aEl = document.getElementById("cardAnswer");
  const counterEl = document.getElementById("flashCounter");
  const filterLabelEl = document.getElementById("flashFilterLabel");
  const markBtn = document.getElementById("markReviewBtn");
  const sieBadge = document.getElementById("sieBadge");
  const reviewBadge = document.getElementById("reviewBadge");
  const cardContainer = document.getElementById("flashcard");
  const prevBtn = document.getElementById("prevCard");
  const nextBtn = document.getElementById("nextCard");

  filterLabelEl.textContent = getFilterLabel("Deck: ", state.filterType, state.filterValue);

  if (cards.length === 0) {
    topicEl.textContent = "No Cards";
    subtopicEl.textContent = "";
    qEl.textContent = "There are no cards in this deck. Please go back and select another.";
    aEl.textContent = "";
    aEl.classList.remove("visible");
    counterEl.textContent = "Card 0 of 0";
    markBtn.disabled = true;
    markBtn.textContent = "Mark for review";
    sieBadge.classList.add("hidden");
    reviewBadge.classList.add("hidden");
    cardContainer.classList.remove("sie-likely", "review-marked");
    prevBtn.disabled = true;
    nextBtn.disabled = true;
    return;
  }

  if (state.flashIndex < 0) state.flashIndex = 0;
  if (state.flashIndex >= cards.length) state.flashIndex = cards.length - 1;

  const card = cards[state.flashIndex];

  topicEl.textContent = card.unitLabel;
  subtopicEl.textContent = card.sectionLabel + " – " + card.topic;
  qEl.textContent = card.question;
  aEl.textContent = card.answer;

  counterEl.textContent = "Card " + (state.flashIndex + 1) + " of " + cards.length;

  if (state.showAnswer) {
    aEl.classList.add("visible");
  } else {
    aEl.classList.remove("visible");
  }

  // Badges and card highlighting
  if (card.sieLikely) {
    sieBadge.classList.remove("hidden");
    cardContainer.classList.add("sie-likely");
  } else {
    sieBadge.classList.add("hidden");
    cardContainer.classList.remove("sie-likely");
  }

  if (state.reviewSet.has(card.id)) {
    reviewBadge.classList.remove("hidden");
    cardContainer.classList.add("review-marked");
    markBtn.textContent = "Unmark review";
  } else {
    reviewBadge.classList.add("hidden");
    cardContainer.classList.remove("review-marked");
    markBtn.textContent = "Mark for review";
  }

  markBtn.disabled = false;
  prevBtn.disabled = state.flashIndex === 0;
  // Next button wraps around, so it's only disabled if there are 0 cards
  nextBtn.disabled = cards.length === 0;
}

function setupFlashcardHandlers() {
  document.getElementById("prevCard").addEventListener("click", () => {
    const cards = getFilteredCards(state.filterType, state.filterValue);
    if (cards.length === 0) return;
    if (state.flashIndex > 0) {
      state.flashIndex -= 1;
      state.showAnswer = false;
      renderFlashcard();
    }
  });

  document.getElementById("nextCard").addEventListener("click", () => {
    const cards = getFilteredCards(state.filterType, state.filterValue);
    if (cards.length === 0) return;
    if (state.flashIndex < cards.length - 1) {
      state.flashIndex += 1;
    } else {
      state.flashIndex = 0; // wrap around
    }
    state.showAnswer = false;
    renderFlashcard();
  });

  document.getElementById("toggleAnswer").addEventListener("click", () => {
    state.showAnswer = !state.showAnswer;
    renderFlashcard();
  });

  document.getElementById("markReviewBtn").addEventListener("click", () => {
    const cards = getFilteredCards(state.filterType, state.filterValue);
    if (cards.length === 0) return;
    const card = cards[state.flashIndex];
    if (state.reviewSet.has(card.id)) {
      state.reviewSet.delete(card.id);
    } else {
      state.reviewSet.add(card.id);
    }
    saveReviewSet();
    renderFlashcard();
  });

  document.getElementById("backFromFlash").addEventListener("click", () => {
    showView("homeView");
  });
}

// Menu handlers

function setupMenuHandlers() {
  const buttons = document.querySelectorAll(".menu-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const filterType = btn.dataset.filterType;
      const filterValue = btn.dataset.filterValue;
      startFlashcards(filterType, filterValue);
    });
  });
}

// Initialize

document.addEventListener("DOMContentLoaded", () => {
  setupMenuHandlers();
  setupFlashcardHandlers();
  updateMenuDeckCounts();
  showView("homeView");
});
