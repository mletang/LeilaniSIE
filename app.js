// SIE flashcards web app
// Flashcards only, with SIE-likely highlighting and mark-for-review

const FLASHCARDS = [
  // -----------------------------
  // Chapter 1 – Equity Securities
  // -----------------------------
  {
    id: "c1_l1_1_securities",
    chapter: "C1",
    chapterLabel: "Chapter 1: Equity Securities",
    section: "L1.1",
    sectionLabel: "Lesson 1.1: Securities",
    topic: "Securities",
    sieLikely: true,
    question: "What are the two basic types of securities?",
    answer: "Stocks (equity) and bonds (debt). Stocks represent ownership, while bonds represent debt."
  },
  {
    id: "c1_l1_2_common_stock",
    chapter: "C1",
    chapterLabel: "Chapter 1: Equity Securities",
    section: "L1.2",
    sectionLabel: "Lesson 1.2: Common Stock",
    topic: "Stock Classifications",
    sieLikely: true,
    question: "What is the difference between authorized, issued, outstanding, and treasury stock?",
    answer: "Authorized is the max amount a firm can issue. Issued is what has been sold to the public. Outstanding is what is held by investors. Treasury is stock the firm has repurchased."
  },
  {
    id: "c1_l1_3_types_common",
    chapter: "C1",
    chapterLabel: "Chapter 1: Equity Securities",
    section: "L1.3",
    sectionLabel: "Lesson 1.3: Types of Common Stock",
    topic: "Market Cap",
    sieLikely: true,
    question: "What is a 'penny stock'?",
    answer: "An unlisted (non-exchange traded) security trading at less than $5 per share. It is considered highly speculative."
  },
  {
    id: "c1_l1_4_rights",
    chapter: "C1",
    chapterLabel: "Chapter 1: Equity Securities",
    section: "L1.4",
    sectionLabel: "Lesson 1.4: Rights of Common Stockholders",
    topic: "Shareholder Rights",
    sieLikely: true,
    question: "What is the difference between statutory voting and cumulative voting?",
    answer: "Statutory voting allows one vote per share for each director seat. Cumulative voting allows the shareholder to pool all their votes and allocate them as desired (e.g., all for one candidate)."
  },
  {
    id: "c1_l1_5_benefits",
    chapter: "C1",
    chapterLabel: "Chapter 1: Equity Securities",
    section: "L1.5",
    sectionLabel: "Lesson 1.5: Benefits of Owning Common Stock",
    topic: "Benefits of Stock",
    sieLikely: true,
    question: "What is 'limited liability' for a common stockholder?",
    answer: "The stockholder is only at risk for the amount they invested. Their personal assets are not at risk if the corporation fails."
  },
  {
    id: "c1_l1_6_preferred",
    chapter: "C1",
    chapterLabel: "Chapter 1: Equity Securities",
    section: "L1.6",
    sectionLabel: "Lesson 1.6: Preferred Stock",
    topic: "Preferred Stock",
    sieLikely: true,
    question: "How does preferred stock differ from common stock?",
    answer: "Preferred stock typically has no voting rights but pays a fixed, stated dividend. It also has priority over common stock for dividends and in a corporate liquidation."
  },
  // -----------------------------
  // Chapter 2 – Other Equities & Corporate Actions
  // -----------------------------
  {
    id: "c2_l2_1_adrs",
    chapter: "C2",
    chapterLabel: "Chapter 2: Other Types of Equities and Corporate Actions",
    section: "L2.1",
    sectionLabel: "Lesson 2.1: American Depositary Receipts",
    topic: "ADRs",
    sieLikely: true,
    question: "What is an American Depositary Receipt (ADR)?",
    answer: "A security that simplifies foreign investing for U.S. investors. It's a receipt for foreign shares held by a U.S. bank, and it trades in U.S. dollars."
  },
  {
    id: "c2_l2_2_rule144",
    chapter: "C2",
    chapterLabel: "Chapter 2: Other Types of Equities and Corporate Actions",
    section: "L2.2",
    sectionLabel: "Lesson 2.2: Rule 144 Stock",
    topic: "Rule 144",
    sieLikely: true,
    question: "What two types of stock does Rule 144 cover?",
    answer: "Restricted stock (unregistered shares) and Control stock (shares held by insiders/affiliates)."
  },
  {
    id: "c2_l2_3_rights_warrants",
    chapter: "C2",
    chapterLabel: "Chapter 2: Other Types of Equities and Corporate Actions",
    section: "L2.3",
    sectionLabel: "Lesson 2.3: Rights and Warrants",
    topic: "Rights vs. Warrants",
    sieLikely: true,
    question: "What is the key difference between a stock right and a warrant?",
    answer: "Rights are short-term (30-45 days), given to existing shareholders, and allow purchase below market price. Warrants are long-term, often attached to bonds, and allow purchase above market price at time of issue."
  },
  {
    id: "c2_l2_4_splits",
    chapter: "C2",
    chapterLabel: "Chapter 2: Other Types of Equities and Corporate Actions",
    section: "L2.4",
    sectionLabel: "Lesson 2.4: Stock Dividends and Stock Splits",
    topic: "Stock Splits",
    sieLikely: true,
    question: "What happens to an investor's total position value after a 2-for-1 stock split?",
    answer: "Nothing. The investor has twice as many shares, but each share is worth half as much. The total value remains the same."
  },
  {
    id: "c2_l2_5_actions",
    chapter: "C2",
    chapterLabel: "Chapter 2: Other Types of Equities and Corporate Actions",
    section: "L2.5",
    sectionLabel: "Lesson 2.5: Actions of Corporations",
    topic: "Corporate Actions",
    sieLikely: false,
    question: "What is a 'tender offer'?",
    answer: "An offer by a company or outside investor to buy a security directly from the owners (not through the market), typically at a premium to the market price."
  },
  // -----------------------------
  // Chapter 3 – Debt Securities
  // -----------------------------
  {
    id: "c3_l3_1_bond_basics",
    chapter: "C3",
    chapterLabel: "Chapter 3: Debt Securities",
    section: "L3.1",
    sectionLabel: "Lesson 3.1: Bond Basics",
    topic: "Bond Basics",
    sieLikely: true,
    question: "What is the relationship between a bond's price and market interest rates?",
    answer: "An inverse relationship. When interest rates rise, the price of existing bonds falls. When interest rates fall, the price of existing bonds rises."
  },
  {
    id: "c3_l3_2_bond_yields",
    chapter: "C3",
    chapterLabel: "Chapter 3: Debt Securities",
    section: "L3.2",
    sectionLabel: "Lesson 3.2: Bond Yields",
    topic: "Bond Yields",
    sieLikely: true,
    question: "For a bond trading at a discount, rank the yields from lowest to highest.",
    answer: "Coupon Rate (Nominal Yield), Current Yield, Yield to Maturity (YTM), Yield to Call (YTC)."
  },
  {
    id: "c3_l3_3_ratings",
    chapter: "C3",
    chapterLabel: "Chapter 3: Debt Securities",
    section: "L3.3",
    sectionLabel: "Lesson 3.3: Bond Ratings",
    topic: "Bond Ratings",
    sieLikely: true,
    question: "What is an 'investment grade' bond?",
    answer: "A bond rated BBB (by S&P) or Baa (by Moody's) or higher. These are considered to have lower default risk."
  },
  {
    id: "c3_l3_4_risks",
    chapter: "C3",
    chapterLabel: "Chapter 3: Debt Securities",
    section: "L3.4",
    sectionLabel: "Lesson 3.4: Benefits and Risks of Investing in Debt",
    topic: "Bond Risks",
    sieLikely: true,
    question: "What is 'purchasing power risk' (or inflation risk)?",
    answer: "The risk that the fixed interest payments from a bond will not be worth as much in the future due to inflation."
  },
  {
    id: "c3_l3_5_corp_bonds",
    chapter: "C3",
    chapterLabel: "Chapter 3: Debt Securities",
    section: "L3.5",
    sectionLabel: "Lesson 3.5: Corporate Bonds",
    topic: "Corporate Bonds",
    sieLikely: true,
    question: "What is the difference between a secured bond and a debenture?",
    answer: "A secured bond is backed by specific corporate collateral (e.g., a mortgage bond). A debenture is an unsecured bond, backed only by the company's full faith and credit."
  },
  {
    id: "c3_l3_6_gov_sec",
    chapter: "C3",
    chapterLabel: "Chapter 3: Debt Securities",
    section: "L3.6",
    sectionLabel: "Lesson 3.6: Government Securities",
    topic: "Treasury Securities",
    sieLikely: true,
    question: "What are the three main types of U.S. Treasury securities?",
    answer: "T-Bills (short-term, discount), T-Notes (intermediate-term, semi-annual interest), and T-Bonds (long-term, semi-annual interest)."
  },
  {
    id: "c3_l3_7_muni_bonds",
    chapter: "C3",
    chapterLabel: "Chapter 3: Debt Securities",
    section: "L3.7",
    sectionLabel: "Lesson 3.7: Municipal Bonds",
    topic: "Municipal Bonds",
    sieLikely: true,
    question: "What is the key difference between a General Obligation (GO) bond and a Revenue bond?",
    answer: "GO bonds are backed by the taxing power (full faith and credit) of the municipality. Revenue bonds are backed by the income from a specific project (e.g., a toll bridge)."
  },
  {
    id: "c3_l3_8_money_market",
    chapter: "C3",
    chapterLabel: "Chapter 3: Debt Securities",
    section: "L3.8",
    sectionLabel: "Lesson 3.8: Money Market Instruments",
    topic: "Money Market",
    sieLikely: true,
    question: "What are the three defining characteristics of a money market security?",
    answer: "They are short-term (one year or less to maturity), high-quality (low risk), and highly liquid."
  },
  // -----------------------------
  // Chapter 4 – Investment Companies
  // -----------------------------
  {
    id: "c4_l4_1_inv_co",
    chapter: "C4",
    chapterLabel: "Chapter 4: Investment Companies",
    section: "L4.1",
    sectionLabel: "Lesson 4.1: Investment Companies",
    topic: "Investment Companies",
    sieLikely: true,
    question: "What are the three types of investment companies defined by the Investment Company Act of 1940?",
    answer: "Face-Amount Certificates (FACs), Unit Investment Trusts (UITs), and Management Companies (open-end and closed-end)."
  },
  {
    id: "c4_l4_2_mutual_funds",
    chapter: "C4",
    chapterLabel: "Chapter 4: Investment Companies",
    section: "L4.2",
    sectionLabel: "Lesson 4.2: Investing in Mutual Funds",
    topic: "Mutual Fund Share Classes",
    sieLikely: true,
    question: "What is the difference between a Class A, B, and C mutual fund share?",
    answer: "Class A: front-end load (sales charge). Class B: back-end load (CDSC). Class C: level-load (ongoing 12b-1 fees)."
  },
  {
    id: "c4_l4_3_loads",
    chapter: "C4",
    chapterLabel: "Chapter 4: Investment Companies",
    section: "L4.3",
    sectionLabel: "Lesson 4.3: Reducing Front-End Loads",
    topic: "Breakpoints",
    sieLikely: true,
    question: "What is a 'breakpoint' in a Class A mutual fund?",
    answer: "A quantity discount. The more an investor purchases, the lower the percentage sales charge (front-end load) they pay."
  },
  {
    id: "c4_l4_4_nav",
    chapter: "C4",
    chapterLabel: "Chapter 4: Investment Companies",
    section: "L4.4",
    sectionLabel: "Lesson 4.4: Net Asset Value and Forward Pricing",
    topic: "Forward Pricing",
    sieLikely: true,
    question: "What is 'forward pricing' for mutual funds?",
    answer: "The rule that all purchase and redemption orders must be filled at the *next* calculated NAV after the order is received. (Usually priced once per day)."
  },
  {
    id: "c4_l4_5_disclosure",
    chapter: "C4",
    chapterLabel: "Chapter 4: Investment Companies",
    section: "L4.5",
    sectionLabel: "Lesson 4.5: Disclosure Documents and Conduit Theory",
    topic: "Conduit Theory",
    sieLikely: true,
    question: "What is the 'conduit theory' (Subchapter M) of taxation for a mutual fund?",
    answer: "If the fund distributes at least 90% of its Net Investment Income (NII) to shareholders, the fund pays no tax on the distributed amount. Shareholders pay the taxes."
  },
  {
    id: "c4_l4_6_annuities",
    chapter: "C4",
    chapterLabel: "Chapter 4: Investment Companies",
    section: "L4.6",
    sectionLabel: "Lesson 4.6: Annuities",
    topic: "Annuities",
    sieLikely: true,
    question: "What is the key difference between a fixed annuity and a variable annuity?",
    answer: "In a fixed annuity, the insurance company assumes the investment risk. In a variable annuity, the investor assumes the investment risk."
  },
  // -----------------------------
  // Chapter 5 – Options
  // -----------------------------
  {
    id: "c5_l5_1_basics",
    chapter: "C5",
    chapterLabel: "Chapter 5: Options",
    section: "L5.1",
    sectionLabel: "Lesson 5.1: Basic Options",
    topic: "Calls vs. Puts",
    sieLikely: true,
    question: "What rights does the buyer of a call option have? What about the buyer of a put option?",
    answer: "The call buyer has the RIGHT TO BUY the underlying stock at the strike price. The put buyer has the RIGHT TO SELL the underlying stock at the strike price."
  },
  {
    id: "c5_l5_2_intrinsic_value",
    chapter: "C5",
    chapterLabel: "Chapter 5: Options",
    section: "L5.2",
    sectionLabel: "Lesson 5.2: Intrinsic Value",
    topic: "Intrinsic Value",
    sieLikely: true,
    question: "When is a call option 'in-the-money' (has intrinsic value)?",
    answer: "When the stock's market price is ABOVE the call's strike price. (e.g., Stock at $55, 50 Call is $5 in-the-money)."
  },
  {
    id: "c5_l5_3_calculations",
    chapter: "C5",
    chapterLabel: "Chapter 5: Options",
    section: "L5.3",
    sectionLabel: "Lesson 5.3: Option Calculations",
    topic: "Breakeven (Call)",
    sieLikely: true,
    question: "What is the breakeven point for a long call option?",
    answer: "Strike Price + Premium Paid. (The stock must rise to this price for the buyer to break even)."
  },
  {
    id: "c5_l5_4_strategies",
    chapter: "C5",
    chapterLabel: "Chapter 5: Options",
    section: "L5.4",
    sectionLabel: "Lesson 5.4: Option Strategies",
    topic: "Hedging",
    sieLikely: true,
    question: "What is the best way to hedge a long stock position (protect it from a decline)?",
    answer: "Buy a put option. This 'protective put' locks in a minimum selling price for the stock."
  },
  {
    id: "c5_l5_5_nonequity",
    chapter: "C5",
    chapterLabel: "Chapter 5: Options",
    section: "L5.5",
    sectionLabel: "Lesson 5.5: Nonequity Options",
    topic: "Index Options",
    sieLikely: true,
    question: "How do index options (like SPX) settle at exercise?",
    answer: "They settle in cash. The writer of the option pays the holder the in-the-money amount in cash."
  },
  {
    id: "c5_l5_6_rules",
    chapter: "C5",
    chapterLabel: "Chapter 5: Options",
    section: "L5.6",
    sectionLabel: "Lesson 5.6: Options Rules and Regulations",
    topic: "Options Disclosure Document",
    sieLikely: true,
    question: "What is the Options Disclosure Document (ODD)?",
    answer: "A standard document from the Options Clearing Corporation (OCC) that explains the risks of options. It must be given to a customer at or before account approval."
  },
  // -----------------------------
  // Chapter 6 – Other Investment Types
  // -----------------------------
  {
    id: "c6_l6_1_muni_funds",
    chapter: "C6",
    chapterLabel: "Chapter 6: Other Investment Types",
    section: "L6.1",
    sectionLabel: "Lesson 6.1: Municipal Fund Securities",
    topic: "529 Plans",
    sieLikely: true,
    question: "What is a 529 Plan?",
    answer: "A state-sponsored, tax-advantaged savings account for education expenses. Withdrawals are tax-free if used for qualified education."
  },
  {
    id: "c6_l6_2_partnerships",
    chapter: "C6",
    chapterLabel: "Chapter 6: Other Investment Types",
    section: "L6.2",
    sectionLabel: "Lesson 6.2: Partnerships",
    topic: "Limited Partnerships (DPPs)",
    sieLikely: true,
    question: "What is the primary risk associated with a Direct Participation Program (DPP) / Limited Partnership?",
    answer: "Lack of liquidity. The investment is intended to be held until dissolution, and there is no active secondary market."
  },
  {
    id: "c6_l6_3_reits_etfs",
    chapter: "C6",
    chapterLabel: "Chapter 6: Other Investment Types",
    section: "L6.3",
    sectionLabel: "Lesson 6.3: REITS, ETFs, and ETNs",
    topic: "REITs",
    sieLikely: true,
    question: "What is a Real Estate Investment Trust (REIT)?",
    answer: "A company that manages a portfolio of real estate or mortgages. It trades like a stock and must pass through at least 90% of its income to shareholders."
  },
  {
    id: "c6_l6_3_etfs",
    chapter: "C6",
    chapterLabel: "Chapter 6: Other Investment Types",
    section: "L6.3",
    sectionLabel: "Lesson 6.3: REITS, ETFs, and ETNs",
    topic: "ETFs",
    sieLikely: true,
    question: "How does an Exchange-Traded Fund (ETF) differ from a mutual fund?",
    answer: "ETFs trade on an exchange throughout the day (intraday pricing) and can be sold short or bought on margin. Mutual funds are priced once per day (forward pricing)."
  },
  // -----------------------------
  // Chapter 7 – Issuing Securities
  // -----------------------------
  {
    id: "c7_l7_1_primary_market",
    chapter: "C7",
    chapterLabel: "Chapter 7: Issuing Securities",
    section: "L7.1",
    sectionLabel: "Lesson 7.1: Primary Market Basics",
    topic: "Primary vs. Secondary Market",
    sieLikely: true,
    question: "What is the primary market?",
    answer: "The market where an issuer sells new securities directly to investors to raise capital. The issuer receives the proceeds from the sale."
  },
  {
    id: "c7_l7_2_underwriting",
    chapter: "C7",
    chapterLabel: "Chapter 7: Issuing Securities",
    section: "L7.2",
    sectionLabel: "Lesson 7.2: Underwriting New Issues",
    topic: "Underwriting",
    sieLikely: true,
    question: "What is a 'red herring' (preliminary prospectus)?",
    answer: "A disclosure document used during the 20-day 'cooling-off' period of an IPO. It contains most details but omits the final price and effective date."
  },
  {
    id: "c7_l7_3_exemptions",
    chapter: "C7",
    chapterLabel: "Chapter 7: Issuing Securities",
    section: "L7.3",
    sectionLabel: "Lesson 7.3: Underwriting Exemptions",
    topic: "Exempt Securities",
    sieLikely: true,
    question: "Name three types of securities that are exempt from SEC registration under the '33 Act.",
    answer: "U.S. Government securities, Municipal securities, and Commercial Paper (short-term corporate debt, max 270 days)."
  },
  // -----------------------------
  // Chapter 8 – Trading Securities
  // -----------------------------
  {
    id: "c8_l8_1_secondary_market",
    chapter: "C8",
    chapterLabel: "Chapter 8: Trading Securities",
    section: "L8.1",
    sectionLabel: "Lesson 8.1: Secondary Market Basics",
    topic: "Secondary Market",
    sieLikely: true,
    question: "What is the secondary market?",
    answer: "The market where investors trade securities with other investors (e.g., NYSE, Nasdaq). The original issuer is not involved in these transactions."
  },
  {
    id: "c8_l8_2_otc",
    chapter: "C8",
    chapterLabel: "Chapter 8: Trading Securities",
    section: "L8.2",
    sectionLabel: "Lesson 8.2: Over-the-Counter Market and Other Market Centers",
    topic: "OTC Market",
    sieLikely: true,
    question: "How does the OTC market differ from an exchange?",
    answer: "An exchange is a physical location (or centralized electronic system) with an auction process. The OTC market is a decentralized network of dealers (market makers) who negotiate prices."
  },
  {
    id: "c8_l8_3_participants",
    chapter: "C8",
    chapterLabel: "Chapter 8: Trading Securities",
    section: "L8.3",
    sectionLabel: "Lesson 8.3: Participants in the Secondary Markets",
    topic: "Market Participants",
    sieLikely: true,
    question: "What is a 'fiduciary'?",
    answer: "A person legally authorized to act on behalf of another person (the beneficiary), placing the beneficiary's interests first. (e.g., Trustee, Executor, Custodian)."
  },
  {
    id: "c8_l8_4_trade",
    chapter: "C8",
    chapterLabel: "Chapter 8: Trading Securities",
    section: "L8.4",
    sectionLabel: "Lesson 8.4: Placing a Trade",
    topic: "Quotes",
    sieLikely: true,
    question: "A stock is quoted 'Bid 42.00, Ask 42.50'. What does this mean?",
    answer: "The Bid ($42.00) is the highest price a market maker will pay (what a seller receives). The Ask ($42.50) is the lowest price a market maker will sell (what a buyer pays)."
  },
  {
    id: "c8_l8_5_orders",
    chapter: "C8",
    chapterLabel: "Chapter 8: Trading Securities",
    section: "L8.5",
    sectionLabel: "Lesson 8.5: Types of Orders",
    topic: "Order Types",
    sieLikely: true,
    question: "What is the difference between a market order and a limit order?",
    answer: "A Market Order executes immediately at the best available price (guarantees execution, not price). A Limit Order only executes at a specific price or better (guarantees price, not execution)."
  },
  {
    id: "c8_l8_6_positions",
    chapter: "C8",
    chapterLabel: "Chapter 8: Trading Securities",
    section: "L8.6",
    sectionLabel: "Lesson 8.6: Positions",
    topic: "Short Selling",
    sieLikely: true,
    question: "What is 'selling short' and what is the maximum risk?",
    answer: "Selling borrowed shares in hopes of buying them back lower. Since a stock's price can rise indefinitely, the maximum risk (loss) is unlimited."
  },
  {
    id: "c8_l8_7_settlement",
    chapter: "C8",
    chapterLabel: "Chapter 8: Trading Securities",
    section: "L8.7",
    sectionLabel: "Lesson 8.7: Broker-Dealer Capacity and Settlement",
    topic: "Settlement",
    sieLikely: true,
    question: "What is the 'regular way' settlement cycle (T+1) for corporate securities (stocks and bonds)?",
    answer: "T+1, meaning one business day after the trade date."
  },
  // -----------------------------
  // Chapter 9 – Basic Accounts
  // -----------------------------
  {
    id: "c9_l9_1_adults",
    chapter: "C9",
    chapterLabel: "Chapter 9: Basic Accounts",
    section: "L9.1",
    sectionLabel: "Lesson 9.1: Accounts for Adults",
    topic: "Account Types",
    sieLikely: true,
    question: "What happens to the assets in a JTWROS account when one tenant dies?",
    answer: "Joint Tenants with Right of Survivorship (JTWROS): The assets pass directly to the surviving tenant(s), bypassing probate."
  },
  {
    id: "c9_l9_2_orgs",
    chapter: "C9",
    chapterLabel: "Chapter 9: Basic Accounts",
    section: "L9.2",
    sectionLabel: "Lesson 9.2: Accounts for Organizations",
    topic: "Corporate Accounts",
    sieLikely: true,
    question: "What document is required to open a brokerage account for a corporation?",
    answer: "A corporate charter and a corporate resolution. The resolution specifies who is authorized to trade on the corporation's behalf."
  },
  {
    id: "c9_l9_3_trusts",
    chapter: "C9",
    chapterLabel: "Chapter 9: Basic Accounts",
    section: "L9.3",
    sectionLabel: "Lesson 9.3: Trust Accounts",
    topic: "Trusts",
    sieLikely: false,
    question: "What is the difference between a revocable and irrevocable trust?",
    answer: "A revocable trust can be modified or revoked by the grantor. An irrevocable trust generally cannot be modified, and assets are removed from the grantor's estate."
  },
  {
    id: "c9_l9_4_minors",
    chapter: "C9",
    chapterLabel: "Chapter 9: Basic Accounts",
    section: "L9.4",
    sectionLabel: "Lesson 9.4: Accounts for Minors",
    topic: "Custodial Accounts (UTMA)",
    sieLikely: true,
    question: "What type of transactions are NOT permitted in a custodial (UTMA) account?",
    answer: "Margin trading, short selling, and speculative options strategies are prohibited. Covered call writing is generally allowed."
  },
  {
    id: "c9_l9_5_fiduciary",
    chapter: "C9",
    chapterLabel: "Chapter 9: Basic Accounts",
    section: "L9.5",
    sectionLabel: "Lesson 9.5: Fiduciary Responsibilities",
    topic: "Fiduciary Duty",
    sieLikely: true,
    question: "What is the 'prudent investor rule'?",
    answer: "A rule requiring a fiduciary to make wise and safe investments, managing the account for the benefit of the beneficiary."
  },
  // -----------------------------
  // Chapter 10 – Retirement Accounts
  // -----------------------------
  {
    id: "c10_l10_1_iras",
    chapter: "C10",
    chapterLabel: "Chapter 10: Retirement Accounts",
    section: "L10.1",
    sectionLabel: "Lesson 10.1: Individual Retirement Accounts",
    topic: "Traditional vs. Roth IRA",
    sieLikely: true,
    question: "What is the key tax difference between a Traditional IRA and a Roth IRA?",
    answer: "Traditional IRA: contributions are often tax-deductible; withdrawals are taxed as ordinary income. Roth IRA: contributions are after-tax; qualified withdrawals are 100% tax-free."
  },
  {
    id: "c10_l10_1_rmds",
    chapter: "C10",
    chapterLabel: "Chapter 10: Retirement Accounts",
    section: "L10.1",
    sectionLabel: "Lesson 10.1: Individual Retirement Accounts",
    topic: "RMDs",
    sieLikely: true,
    question: "What are Required Minimum Distributions (RMDs)?",
    answer: "The minimum amount an owner of a Traditional IRA must begin withdrawing starting at age 73. Roth IRAs do not have RMDs for the original owner."
  },
  {
    id: "c10_l10_2_employer",
    chapter: "C10",
    chapterLabel: "Chapter 10: Retirement Accounts",
    section: "L10.2",
    sectionLabel: "Lesson 10.2: Employer-Sponsored Plans",
    topic: "Plan Types",
    sieLikely: true,
    question: "What is the difference between a defined benefit plan and a defined contribution plan?",
    answer: "Defined Benefit (Pension): Guarantees a specific retirement benefit (e.g., $1,000/month). The employer bears the investment risk. Defined Contribution (401k): Defines the amount contributed, but the final benefit is unknown. The employee bears the investment risk."
  },
  // -----------------------------
  // Chapter 11 – Account Features
  // -----------------------------
  {
    id: "c11_l11_1_margin",
    chapter: "C11",
    chapterLabel: "Chapter 11: Account Features",
    section: "L11.1",
    sectionLabel: "Lesson 11.1: Cash and Margin Accounts",
    topic: "Margin Accounts",
    sieLikely: true,
    question: "What is 'hypothecation' in a margin account?",
    answer: "This is when the customer pledges their securities to the broker-dealer as collateral for the margin loan."
  },
  {
    id: "c11_l11_2_margin_buying",
    chapter: "C11",
    chapterLabel: "Chapter 11: Account Features",
    section: "L11.2",
    sectionLabel: "Lesson 11.2: Margin Buying",
    topic: "Regulation T",
    sieLikely: true,
    question: "What is the Regulation T initial margin requirement for a stock purchase?",
    answer: "The customer must deposit 50% of the purchase price. (FINRA may require $2,000 if the purchase is small)."
  },
  {
    id: "c11_l11_3_costs",
    chapter: "C11",
    chapterLabel: "Chapter 11: Account Features",
    section: "L11.3",
    sectionLabel: "Lesson 11.3: Trading Costs, Solicited Trades, and Discretion",
    topic: "Discretionary Accounts",
    sieLikely: true,
    question: "What are the '3 A's' of a discretionary trade?",
    answer: "Action (buy/sell), Amount (shares/dollars), and Asset (which security). If an RR chooses even one of these without the customer's pre-approval for that specific trade, it is a discretionary trade."
  },
  // -----------------------------
  // Chapter 12 – Economics and Analysis
  // -----------------------------
  {
    id: "c12_l12_1_business_cycle",
    chapter: "C12",
    chapterLabel: "Chapter 12: Economics and Analysis",
    section: "L12.1",
    sectionLabel: "Lesson 12.1: The Business Cycle",
    topic: "Business Cycle",
    sieLikely: true,
    question: "What are the four stages of the business cycle?",
    answer: "Expansion (growth), Peak (top), Contraction (recession), and Trough (bottom)."
  },
  {
    id: "c12_l12_2_indicators",
    chapter: "C12",
    chapterLabel: "Chapter 12: Economics and Analysis",
    section: "L12.2",
    sectionLabel: "Lesson 12.2: Economic Indicators",
    topic: "Economic Indicators",
    sieLikely: true,
    question: "What is the difference between a leading and a lagging economic indicator?",
    answer: "Leading indicators change *before* the economy (e.g., S&P 500, building permits). Lagging indicators change *after* the economy (e.g., corporate profits, average duration of unemployment)."
  },
  {
    id: "c12_l12_3_industries",
    chapter: "C12",
    chapterLabel: "Chapter 12: Economics and Analysis",
    section: "L12.3",
    sectionLabel: "Lesson 12.3: Industries and the Economy",
    topic: "Industry Types",
    sieLikely: true,
    question: "What is the difference between a cyclical and a defensive (noncyclical) industry?",
    answer: "Cyclical industries (e.g., auto, heavy machinery) do well in expansions and poorly in recessions. Defensive industries (e.g., utilities, food) are stable regardless of the economic cycle."
  },
  {
    id: "c12_l12_4_statements",
    chapter: "C12",
    chapterLabel: "Chapter 12: Economics and Analysis",
    section: "L12.4",
    sectionLabel: "Lesson 12.4: Corporate Financial Statements",
    topic: "Financial Statements",
    sieLikely: false,
    question: "What is the basic formula for a company's Balance Sheet?",
    answer: "Assets = Liabilities + Net Worth (or Shareholders' Equity)."
  },
  {
    id: "c12_l12_5_exchange_rates",
    chapter: "C12",
    chapterLabel: "Chapter 12: Economics and Analysis",
    section: "L12.5",
    sectionLabel: "Lesson 12.5: Exchange Rates",
    topic: "Exchange Rates",
    sieLikely: true,
    question: "If the U.S. dollar strengthens, what is the impact on U.S. exports?",
    answer: "A strong dollar makes U.S. goods more expensive for foreigners, so exports will decrease."
  },
  {
    id: "c12_l12_6_policy",
    chapter: "C12",
    chapterLabel: "Chapter 12: Economics and Analysis",
    section: "L12.6",
    sectionLabel: "Lesson 12.6: Fiscal Policy and Monetary Policy",
    topic: "Fiscal vs. Monetary Policy",
    sieLikely: true,
    question: "What is the difference between Fiscal Policy and Monetary Policy?",
    answer: "Fiscal Policy is controlled by Congress and the President (government spending and taxes). Monetary Policy is controlled by the Federal Reserve (interest rates and money supply)."
  },
  // -----------------------------
  // Chapter 13 – Investment Returns and Taxation
  // -----------------------------
  {
    id: "c13_l13_1_returns",
    chapter: "C13",
    chapterLabel: "Chapter 13: Investment Returns and Investment Taxation",
    section: "L13.1",
    sectionLabel: "Lesson 13.1: Measuring Investment Returns",
    topic: "Total Return",
    sieLikely: true,
    question: "What is the 'total return' on a stock investment?",
    answer: "(Dividends received + Capital Gains / Losses) divided by the original cost basis. It includes all forms of return."
  },
  {
    id: "c13_l13_2_income_types",
    chapter: "C13",
    chapterLabel: "Chapter 13: Investment Returns and Investment Taxation",
    section: "L13.2",
    sectionLabel: "Lesson 13.2: Types of Income",
    topic: "Capital Gains Tax",
    sieLikely: true,
    question: "What is the difference between long-term and short-term capital gains?",
    answer: "Short-term (held 1 year or less) are taxed at your ordinary income rate. Long-term (held more than 1 year) are taxed at a lower, preferential rate."
  },
  {
    id: "c13_l13_3_losses",
    chapter: "C13",
    chapterLabel: "Chapter 13: Investment Returns and Investment Taxation",
    section: "L13.3",
    sectionLabel: "Lesson 13.3: Using Capital Losses",
    topic: "Wash Sale Rule",
    sieLikely: true,
    question: "What is the 'wash sale' rule?",
    answer: "An investor cannot declare a capital loss on a security if they purchase the same (or 'substantially identical') security within 30 days before or after the sale."
  },
  // -----------------------------
  // Chapter 14 – Making Recommendations
  // -----------------------------
  {
    id: "c14_l14_1_risk_types",
    chapter: "C14",
    chapterLabel: "Chapter 14: Making Recommendations",
    section: "L14.1",
    sectionLabel: "Lesson 14.1: Types of Risk",
    topic: "Systematic vs. Nonsystematic Risk",
    sieLikely: true,
    question: "What is the difference between systematic and nonsystematic risk?",
    answer: "Systematic risk (or market risk) cannot be diversified away (e.g., inflation, war). Nonsystematic risk (or business risk) is specific to a company and *can* be diversified away."
  },
  {
    id: "c14_l14_2_mitigating",
    chapter: "C14",
    chapterLabel: "Chapter 14: Making Recommendations",
    section: "L14.2",
    sectionLabel: "Lesson 14.2: Mitigating Risk",
    topic: "Diversification",
    sieLikely: true,
    question: "What type of risk does diversification protect against?",
    answer: "Nonsystematic risk (business risk, default risk, etc.). It does *not* protect against systematic risk (market risk)."
  },
  {
    id: "c14_l14_3_recommendations",
    chapter: "C14",
    chapterLabel: "Chapter 14: Making Recommendations",
    section: "L14.3",
    sectionLabel: "Lesson 14.3: Investment Recommendations",
    topic: "KYC Rule",
    sieLikely: true,
    question: "What is the 'Know Your Customer' (KYC) rule?",
    answer: "The rule requires firms to use reasonable diligence to know essential facts about a customer, such as their financial situation, investment objectives, and risk tolerance."
  },
  {
    id: "c14_l14_4_reg_bi",
    chapter: "C14",
    chapterLabel: "Chapter 14: Making Recommendations",
    section: "L14.4",
    sectionLabel: "Lesson 14.4: Regulation Best Interest",
    topic: "Regulation Best Interest (Reg BI)",
    sieLikely: true,
    question: "What standard does Regulation Best Interest (Reg BI) impose on broker-dealers?",
    answer: "It requires broker-dealers to act in the 'best interest' of their retail customers when making a recommendation, and to place the customer's interests ahead of their own."
  },
  {
    id: "c14_l14_5_benchmarks",
    chapter: "C14",
    chapterLabel: "Chapter 14: Making Recommendations",
    section: "L14.5",
    sectionLabel: "Lesson 14.5: Market Benchmarks",
    topic: "Market Benchmarks",
    sieLikely: true,
    question: "What is the S&P 500 Index?",
    answer: "A benchmark index that tracks the performance of 500 large, well-known U.S. company stocks. It is the most common benchmark for the overall U.S. stock market."
  },
  // -----------------------------
  // Chapter 15 – Registration and Continuing Education
  // -----------------------------
  {
    id: "c15_l15_1_association",
    chapter: "C15",
    chapterLabel: "Chapter 15: Registration and Continuing Education",
    section: "L15.1",
    sectionLabel: "Lesson 15.1: Associating with a Member Firm",
    topic: "Form U4",
    sieLikely: true,
    question: "What is the Form U4 used for?",
    answer: "It is the Uniform Application for Securities Industry Registration. It is filed to register a new representative and includes their personal, employment, and disciplinary history."
  },
  {
    id: "c15_l15_2_leaving",
    chapter: "C15",
    chapterLabel: "Chapter 15: Registration and Continuing Education",
    section: "L15.2",
    sectionLabel: "Lesson 15.2: Leaving a Member Firm",
    topic: "Form U5",
    sieLikely: true,
    question: "What is the Form U5 used for, and when must it be filed?",
    answer: "It is the Uniform Termination Notice. A firm must file it with FINRA within 30 days of a representative's termination."
  },
  {
    id: "c15_l15_3_ce",
    chapter: "C15",
    chapterLabel: "Chapter 15: Registration and Continuing Education",
    section: "L15.3",
    sectionLabel: "Lesson 15.3: Continuing Education",
    topic: "Continuing Education (CE)",
    sieLikely: true,
    question: "What are the two components of Continuing Education (CE) for RRs?",
    answer: "1. Firm Element (annual, in-house training) and 2. Regulatory Element (FINRA-mandated training, completed annually)."
  },
  // -----------------------------
  // Chapter 16 – Government Regulators
  // -----------------------------
  {
    id: "c16_l16_1_federal",
    chapter: "C16",
    chapterLabel: "Chapter 16: Government Regulators and Regulations",
    section: "L16.1",
    sectionLabel: "Lesson 16.1: Federal Regulators",
    topic: "SEC",
    sieLikely: true,
    question: "What is the primary role of the Securities and Exchange Commission (SEC)?",
    answer: "The SEC is the primary federal regulator responsible for protecting investors, maintaining fair markets, and enforcing federal securities laws (like the '33 and '34 Acts)."
  },
  {
    id: "c16_l16_2_state",
    chapter: "C16",
    chapterLabel: "Chapter 16: Government Regulators and Regulations",
    section: "L16.2",
    sectionLabel: "Lesson 16.2: State Regulators",
    topic: "State Regulators",
    sieLikely: true,
    question: "What is the role of the state 'Administrator' under the Uniform Securities Act?",
    answer: "The Administrator is the chief securities regulator for a state, responsible for enforcing the state's 'blue-sky laws' and registering firms and reps in that state."
  },
  {
    id: "c16_l16_3_sipc_fdic",
    chapter: "C16",
    chapterLabel: "Chapter 16: Government Regulators and Regulations",
    section: "L16.3",
    sectionLabel: "Lesson 16.3: SIPC and FDIC Protections",
    topic: "SIPC vs. FDIC",
    sieLikely: true,
    question: "What is the difference between SIPC and FDIC protection?",
    answer: "SIPC protects customers against broker-dealer bankruptcy ($500k total, $250k cash). FDIC protects customers against bank failure ($250k per depositor, per category)."
  },
  // -----------------------------
  // Chapter 17 – SROs
  // -----------------------------
  {
    id: "c17_l17_1_finra",
    chapter: "C17",
    chapterLabel: "Chapter 17: Self-Regulating Organizations",
    section: "L17.1",
    sectionLabel: "Lesson 17.1: FINRA",
    topic: "FINRA",
    sieLikely: true,
    question: "What is a Self-Regulatory Organization (SRO), and what is the primary one?",
    answer: "An SRO is an organization that writes and enforces rules for its members, overseen by the SEC. The primary SRO for broker-dealers is FINRA."
  },
  {
    id: "c17_l17_2_msrb",
    chapter: "C17",
    chapterLabel: "Chapter 17: Self-Regulating Organizations",
    section: "L17.2",
    sectionLabel: "Lesson 17.2: MSRB and the Exchanges",
    topic: "MSRB",
    sieLikely: true,
    question: "What is the MSRB (Municipal Securities Rulemaking Board)?",
    answer: "The SRO responsible for writing rules for the municipal securities market. It writes rules but does *not* have enforcement power (FINRA and the SEC enforce MSRB rules)."
  },
  {
    id: "c17_l17_3_records",
    chapter: "C17",
    chapterLabel: "Chapter 17: Self-Regulating Organizations",
    section: "L17.3",
    sectionLabel: "Lesson 17.3: Record Retention",
    topic: "Record Retention",
    sieLikely: true,
    question: "How long must customer account records (like the new account form) be kept?",
    answer: "For six years after the account is closed."
  },
  // -----------------------------
  // Chapter 18 – Communications
  // -----------------------------
  {
    id: "c18_l18_1_comm",
    chapter: "C18",
    chapterLabel: "Chapter 18: Communications",
    section: "L18.1",
    sectionLabel: "Lesson 18.1: Communications with the Public",
    topic: "Communications",
    sieLikely: true,
    question: "What is 'Retail Communication'?",
    answer: "Any written (including electronic) communication that is distributed or made available to *more than 25* retail investors within any 30-calendar-day period."
  },
  {
    id: "c18_l18_2_tcpa",
    chapter: "C18",
    chapterLabel: "Chapter 18: Communications",
    section: "L18.2",
    sectionLabel: "Lesson 18.2: Telephone Consumer Protection Act",
    topic: "TCPA",
    sieLikely: true,
    question: "What are the time restrictions for cold calls under the TCPA?",
    answer: "Solicitation calls may only be made between 8:00 a.m. and 9:00 p.m. in the *prospect's* time zone."
  },
  {
    id: "c18_l18_3_delivery",
    chapter: "C18",
    chapterLabel: "Chapter 18: Communications",
    section: "L18.3",
    sectionLabel: "Lesson 18.3: Delivery Requirements",
    topic: "Trade Confirmation",
    sieLikely: true,
    question: "When must a trade confirmation be sent to a customer?",
    answer: "At or before the completion of the transaction (the settlement date)."
  },
  {
    id: "c18_l18_4_reg_sp",
    chapter: "C18",
    chapterLabel: "Chapter 18: Communications",
    section: "L18.4",
    sectionLabel: "Lesson 18.4: Regulation SP and Business Continuity",
    topic: "Regulation SP",
    sieLikely: true,
    question: "What is the purpose of Regulation SP?",
    answer: "To protect the privacy of customer information ('Nonpublic Personal Information' or NPI). It requires firms to provide a privacy notice and safeguard customer data."
  },
  // -----------------------------
  // Chapter 19 – Business Ethics
  // -----------------------------
  {
    id: "c19_l19_1_prohibited",
    chapter: "C19",
    chapterLabel: "Chapter 19: Business Ethics",
    section: "L19.1",
    sectionLabel: "Lesson 19.1: Prohibited Activities",
    topic: "Market Manipulation",
    sieLikely: true,
    question: "What is 'pump and dump'?",
    answer: "A prohibited form of market manipulation that involves inflating the price of a stock (pumping) by spreading false positive rumors, then selling (dumping) the stock at the higher price."
  },
  {
    id: "c19_l19_2_insider",
    chapter: "C19",
    chapterLabel: "Chapter 19: Business Ethics",
    section: "L19.2",
    sectionLabel: "Lesson 19.2: Insider Trading",
    topic: "Insider Trading",
    sieLikely: true,
    question: "What is 'insider trading'?",
    answer: "The illegal use of material, nonpublic information (MNPI) to trade a security. Both the 'tipper' (giver of info) and 'tippee' (receiver) can be held liable."
  },
  {
    id: "c19_l19_3_seniors",
    chapter: "C19",
    chapterLabel: "Chapter 19: Business Ethics",
    section: "L19.3",
    sectionLabel: "Lesson 19.3: Serving Seniors and Other Specified Adults",
    topic: "Trusted Contact",
    sieLikely: true,
    question: "What is a 'Trusted Contact Person'?",
    answer: "A person (age 18+) that a firm makes a reasonable effort to obtain the name of when opening an account for a senior. The firm can contact this person if they suspect financial exploitation."
  },
  {
    id: "c19_l19_4_problematic",
    chapter: "C19",
    chapterLabel: "Chapter 19: Business Ethics",
    section: "L19.4",
    sectionLabel: "Lesson 19.4: Problematic Activities",
    topic: "Borrowing/Lending",
    sieLikely: true,
    question: "Can a registered representative borrow money from a customer?",
    answer: "Generally, no. Exceptions exist if the customer is an immediate family member, a bank, or if the firm has written procedures allowing it for other specific relationships."
  },
  {
    id: "c19_l19_5_outside",
    chapter: "C19",
    chapterLabel: "Chapter 19: Business Ethics",
    section: "L19.5",
    sectionLabel: "Lesson 19.5: Outside Activities",
    topic: "Selling Away",
    sieLikely: true,
    question: "What is 'selling away'?",
    answer: "A prohibited private securities transaction where a representative sells securities outside their firm's regular business without the firm's knowledge and approval."
  }
];


// Application state
const state = {
  filterType: "all",   // "all", "chapter", "review", "sie"
  filterValue: "ALL",
  flashIndex: 0,
  showAnswer: false,
  reviewSet: new Set()
};

// Load review set from localStorage
(function loadReviewSet() {
  try {
    const raw = window.localStorage.getItem("sie_flash_review_ids");
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
    window.localStorage.setItem("sie_flash_review_ids", JSON.stringify(arr));
  } catch (e) {
    // ignore
  }
}

// Filtering helpers

function getFilteredCards(filterType, filterValue) {
  if (filterType === "all") {
    return FLASHCARDS.slice();
  }
  if (filterType === "chapter") {
    return FLASHCARDS.filter(c => c.chapter === filterValue);
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
  if (filterType === "chapter") {
    // Find the label from the first card that matches the chapter
    const card = FLASHCARDS.find(c => c.chapter === filterValue);
    if (card) {
      return prefix + card.chapterLabel;
    }
    return prefix + filterValue; // Fallback
  }
  return prefix + "All chapters";
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

  filterLabelEl.textContent = getFilterLabel("Deck: ", state.filterType, state.filterValue);

  if (cards.length === 0) {
    topicEl.textContent = "";
    subtopicEl.textContent = "";
    qEl.textContent = "No flashcards available for this selection yet.";
    aEl.textContent = "";
    aEl.classList.remove("visible");
    counterEl.textContent = "";
    markBtn.disabled = true;
    markBtn.textContent = "Mark for review";
    sieBadge.classList.add("hidden");
    reviewBadge.classList.add("hidden");
    cardContainer.classList.remove("sie-likely", "review-marked");
    return;
  }

  if (state.flashIndex < 0) state.flashIndex = 0;
  if (state.flashIndex >= cards.length) state.flashIndex = cards.length - 1;

  const card = cards[state.flashIndex];

  topicEl.textContent = card.chapterLabel;
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
  showView("homeView");
});
