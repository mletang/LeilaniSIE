// SIE flashcards web app
// Flashcards only, with SIE-likely highlighting and mark-for-review

const FLASHCARDS = [
  // -----------------------------
  // Unit 1 – Knowledge of Capital Markets
  // -----------------------------
  {
    id: "u1_markets_primary_secondary",
    unit: "U1",
    unitLabel: "Unit 1: Knowledge of Capital Markets",
    section: "U1S1",
    sectionLabel: "Markets and Offerings",
    topic: "Primary vs secondary markets",
    sieLikely: true,
    question: "What is the key difference between the primary and secondary markets?",
    answer:
      "In the primary market, issuers sell new securities to investors and receive the proceeds. " +
      "In the secondary market, investors trade securities with one another and the issuer does not receive money from those trades.",
    hint: "Think new issue versus investor-to-investor trading.",
    context:
      "Understanding how capital is raised and how liquidity is provided is a core SIE concept and often tested."
  },
  {
    id: "u1_public_vs_private_offering",
    unit: "U1",
    unitLabel: "Unit 1: Knowledge of Capital Markets",
    section: "U1S1",
    sectionLabel: "Markets and Offerings",
    topic: "Public vs private offerings",
    sieLikely: true,
    question:
      "How does a public offering differ from a private placement for corporate securities?",
    answer:
      "A public offering is registered with the SEC, uses a prospectus, and is sold to the general public through underwriters. " +
      "A private placement is exempt from registration, sold to a limited number of sophisticated investors, and uses an offering memorandum instead of a full prospectus.",
    hint: "Registration and broad access versus exemption and limited access.",
    context:
      "Questions frequently ask you to identify characteristics of exempt and non-exempt offerings."
  },
  {
    id: "u1_primary_mkt_participants",
    unit: "U1",
    unitLabel: "Unit 1: Knowledge of Capital Markets",
    section: "U1S2",
    sectionLabel: "Market Participants and Regulations",
    topic: "Broker-dealers and investment advisers",
    sieLikely: true,
    question:
      "How does a broker-dealer differ from an investment adviser in how it is paid and what it provides to clients?",
    answer:
      "A broker-dealer executes securities transactions and is typically paid commissions. " +
      "An investment adviser provides ongoing securities advice for compensation, usually asset-based fees. " +
      "Broker-dealers are regulated by the SEC and FINRA, while investment advisers are regulated under the Investment Advisers Act of 1940 or state law.",
    hint: "Think commissions versus advice-for-a-fee.",
    context:
      "The exam often tests the roles of financial professionals and the type of compensation they receive."
  },
  {
    id: "u1_sros",
    unit: "U1",
    unitLabel: "Unit 1: Knowledge of Capital Markets",
    section: "U1S2",
    sectionLabel: "Market Participants and Regulations",
    topic: "Self-regulatory organizations (SROs)",
    sieLikely: true,
    question: "What is an SRO and which are the main SROs relevant to the SIE exam?",
    answer:
      "A self-regulatory organization creates and enforces rules for member firms under SEC oversight. " +
      "Key SROs are FINRA, the Municipal Securities Rulemaking Board (MSRB), and the exchanges such as the NYSE.",
    hint: "Organizations that write rules for member firms under SEC oversight.",
    context:
      "Knowing the role of FINRA and the MSRB is fundamental to the regulatory framework tested on the SIE."
  },
  {
    id: "u1_economic_cycles",
    unit: "U1",
    unitLabel: "Unit 1: Knowledge of Capital Markets",
    section: "U1S2",
    sectionLabel: "Market Participants and Regulations",
    topic: "Business cycles and interest rates",
    sieLikely: false,
    question:
      "How do interest rates typically move during economic expansion and contraction?",
    answer:
      "During economic expansion, demand for credit rises and interest rates often increase. " +
      "During contraction or recession, central banks may cut rates to stimulate borrowing and spending.",
    hint: "Rates tend to rise when the economy heats up and fall when it cools.",
    context:
      "Basic macroeconomic relationships support questions about market conditions and investment performance."
  },

  // -----------------------------
  // Unit 2 – Understanding Products and Their Risks
  // -----------------------------
  {
    id: "u2_common_vs_preferred",
    unit: "U2",
    unitLabel: "Unit 2: Understanding Products and Their Risks",
    section: "U2S1",
    sectionLabel: "Equity and Debt Securities",
    topic: "Common vs preferred stock",
    sieLikely: true,
    question:
      "What are two key differences between common stock and preferred stock from an investor perspective?",
    answer:
      "Common stock usually has voting rights and offers growth potential through capital appreciation and dividends. " +
      "Preferred stock generally has no voting rights but offers a fixed dividend rate and priority over common stock for dividends and at liquidation.",
    hint: "Think voting and growth versus fixed income-like features.",
    context:
      "Comparisons of common and preferred stock are classic SIE exam questions."
  },
  {
    id: "u2_bond_features",
    unit: "U2",
    unitLabel: "Unit 2: Understanding Products and Their Risks",
    section: "U2S1",
    sectionLabel: "Equity and Debt Securities",
    topic: "Bond terminology",
    sieLikely: true,
    question:
      "Define par value, coupon rate, and yield to maturity for a bond.",
    answer:
      "Par value is the face amount repaid at maturity, usually 1,000 dollars. " +
      "The coupon rate is the stated annual interest rate paid on par. " +
      "Yield to maturity reflects the total return if the bond is held to maturity, including coupon payments and any gain or loss relative to par.",
    hint: "Par is principal, coupon is the stated rate, yield combines price and income.",
    context:
      "Bond pricing and yield relationships are frequently tested and require comfort with basic terms."
  },
  {
    id: "u2_mf_structure",
    unit: "U2",
    unitLabel: "Unit 2: Understanding Products and Their Risks",
    section: "U2S2",
    sectionLabel: "Pooled Investments and Options",
    topic: "Open-end mutual funds",
    sieLikely: true,
    question:
      "How are purchases and redemptions of open-end mutual fund shares priced and processed?",
    answer:
      "Open-end mutual fund shares are purchased and redeemed directly with the fund at net asset value (NAV) computed once per day, " +
      "based on the next calculation after the order is received, known as forward pricing.",
    hint: "No secondary market, forward pricing at NAV.",
    context:
      "Forward pricing and NAV are core concepts for pooled investments on the SIE exam."
  },
  {
    id: "u2_etf_vs_mutual",
    unit: "U2",
    unitLabel: "Unit 2: Understanding Products and Their Risks",
    section: "U2S2",
    sectionLabel: "Pooled Investments and Options",
    topic: "ETF versus mutual fund",
    sieLikely: false,
    question:
      "How does an exchange-traded fund (ETF) differ from a traditional open-end mutual fund in trading and expenses?",
    answer:
      "ETFs trade throughout the day on exchanges like stocks, with intraday pricing, while open-end mutual funds trade once per day at NAV. " +
      "ETFs often have lower expense ratios and are generally more tax efficient, although investors pay commissions to buy or sell them.",
    hint: "Think intraday trading and lower expenses.",
    context:
      "Conceptual differences between pooled products help with product comparison questions."
  },
  {
    id: "u2_options_call_put",
    unit: "U2",
    unitLabel: "Unit 2: Understanding Products and Their Risks",
    section: "U2S2",
    sectionLabel: "Pooled Investments and Options",
    topic: "Basic options terminology",
    sieLikely: true,
    question:
      "What is the difference between a call option and a put option, and what rights do buyers have?",
    answer:
      "A call option gives the buyer the right, but not the obligation, to buy the underlying security at the strike price before expiration. " +
      "A put option gives the buyer the right, but not the obligation, to sell the underlying security at the strike price before expiration.",
    hint: "Call is the right to buy, put is the right to sell.",
    context:
      "Basic options definitions and the rights of buyers and obligations of sellers are high-yield SIE topics."
  },
  {
    id: "u2_systematic_vs_nonsystematic",
    unit: "U2",
    unitLabel: "Unit 2: Understanding Products and Their Risks",
    section: "U2S3",
    sectionLabel: "Investment Risk Concepts",
    topic: "Systematic vs nonsystematic risk",
    sieLikely: true,
    question:
      "How do systematic and nonsystematic risk differ, and which can be reduced through diversification?",
    answer:
      "Systematic risk affects the entire market, such as interest rate or market risk, and cannot be eliminated through diversification. " +
      "Nonsystematic risk is specific to a company or industry, such as business or credit risk, and can be reduced by holding a diversified portfolio.",
    hint: "Only nonsystematic risk is diversifiable.",
    context:
      "Risk classification is a favorite exam area and supports suitability questions."
  },

  // -----------------------------
  // Unit 3 – Trading, Customer Accounts, and Prohibited Activities
  // -----------------------------
  {
    id: "u3_order_types",
    unit: "U3",
    unitLabel: "Unit 3: Trading and Customer Accounts",
    section: "U3S1",
    sectionLabel: "Orders, Settlement, and Margin",
    topic: "Market vs limit orders",
    sieLikely: true,
    question:
      "What is the key difference between a market order and a limit order for a stock trade?",
    answer:
      "A market order is executed immediately at the best available price, with execution prioritized over price. " +
      "A limit order is executed only at a specified price or better, so execution is not guaranteed.",
    hint: "Market means priority on speed, limit means priority on price.",
    context:
      "Order types appear frequently in trading questions and are foundational to understanding executions."
  },
  {
    id: "u3_margin_long",
    unit: "U3",
    unitLabel: "Unit 3: Trading and Customer Accounts",
    section: "U3S1",
    sectionLabel: "Orders, Settlement, and Margin",
    topic: "Long margin accounts",
    sieLikely: true,
    question:
      "In a long margin account, what does it mean for an investor to buy on margin and what is the key risk?",
    answer:
      "Buying on margin means borrowing a portion of the purchase price from the broker-dealer, using securities as collateral. " +
      "This leverage can amplify gains but also magnifies losses and can lead to margin calls if equity falls below required levels.",
    hint: "Leverage increases both upside and downside.",
    context:
      "The exam often tests whether candidates understand the risks and disclosures associated with margin."
  },
  {
    id: "u3_cash_vs_margin",
    unit: "U3",
    unitLabel: "Unit 3: Trading and Customer Accounts",
    section: "U3S1",
    sectionLabel: "Orders, Settlement, and Margin",
    topic: "Cash vs margin account",
    sieLikely: false,
    question:
      "What is the basic difference between a cash account and a margin account for a customer?",
    answer:
      "In a cash account, the customer must pay the full purchase price of securities by settlement date. " +
      "In a margin account, the customer can borrow part of the purchase price from the firm, subject to Regulation T and firm requirements.",
    hint: "Cash is full payment, margin allows borrowing.",
    context:
      "These account types set the foundation for more detailed questions on credit extension and risk."
  },
  {
    id: "u3_suitability",
    unit: "U3",
    unitLabel: "Unit 3: Trading and Customer Accounts",
    section: "U3S2",
    sectionLabel: "Customer Accounts and Suitability",
    topic: "Suitability obligation",
    sieLikely: true,
    question:
      "What does FINRA’s suitability rule require when a registered representative recommends a security or strategy?",
    answer:
      "The representative must have a reasonable basis to believe the recommendation is suitable based on the customer’s investment profile, " +
      "including objectives, time horizon, risk tolerance, financial situation, and experience.",
    hint: "Know your customer and match recommendations to the profile.",
    context:
      "Suitability is central to business conduct and appears in many scenario-based SIE questions."
  },
  {
    id: "u3_account_registrations",
    unit: "U3",
    unitLabel: "Unit 3: Trading and Customer Accounts",
    section: "U3S2",
    sectionLabel: "Customer Accounts and Suitability",
    topic: "Account registration types",
    sieLikely: false,
    question:
      "Name three common types of customer account registrations and a key feature of each.",
    answer:
      "Individual accounts have one owner who controls the assets. " +
      "Joint accounts have two or more owners, with either joint tenants with rights of survivorship or tenants in common. " +
      "Custodial accounts, such as UGMA or UTMA, are opened for a minor with an adult custodian managing the assets.",
    hint: "Think individual, joint, and custodial as core examples.",
    context:
      "Understanding registration types supports questions about control of assets and documentation."
  },

  // -----------------------------
  // Unit 4 – Overview of the Regulatory Framework
  // -----------------------------
  {
    id: "u4_regulators_roles",
    unit: "U4",
    unitLabel: "Unit 4: Overview of the Regulatory Framework",
    section: "U4S1",
    sectionLabel: "Regulators and Registration",
    topic: "SEC, FINRA, and MSRB roles",
    sieLikely: true,
    question:
      "Briefly describe the roles of the SEC, FINRA, and the MSRB in the securities industry.",
    answer:
      "The SEC is the federal securities regulator that oversees the securities markets and SROs. " +
      "FINRA is a self-regulatory organization that writes and enforces rules for broker-dealers and registered representatives. " +
      "The MSRB writes rules for municipal securities dealers and advisers; those rules are enforced by the SEC and FINRA.",
    hint: "SEC is the federal regulator, FINRA and MSRB are SROs with specific scopes.",
    context:
      "Exam questions often ask which regulator has authority over a particular firm or product."
  },
  {
    id: "u4_registration_sie_rep",
    unit: "U4",
    unitLabel: "Unit 4: Overview of the Regulatory Framework",
    section: "U4S1",
    sectionLabel: "Regulators and Registration",
    topic: "SIE and representative registration",
    sieLikely: true,
    question:
      "What is the purpose of the SIE exam and what else is required for a person to function as a registered representative?",
    answer:
      "The SIE exam tests basic industry knowledge and can be taken without association with a member firm. " +
      "To function as a registered representative, a person must be associated with a member firm and pass an appropriate top-off qualification exam, such as the Series 6 or Series 7.",
    hint: "SIE alone is not enough to transact business.",
    context:
      "Understanding how registration works is important context for the exam you are preparing for."
  },
  {
    id: "u4_insider_trading",
    unit: "U4",
    unitLabel: "Unit 4: Overview of the Regulatory Framework",
    section: "U4S2",
    sectionLabel: "Business Conduct and Key Rules",
    topic: "Insider trading",
    sieLikely: true,
    question:
      "What is insider trading and how can both tippers and tippees be liable?",
    answer:
      "Insider trading is the illegal use of material nonpublic information to trade or to help others trade a security. " +
      "A tipper who discloses the information in breach of a duty and a tippee who knows or should know the information is nonpublic and material can both be held liable.",
    hint: "Material, nonpublic information used for trading is the key.",
    context:
      "The SIE exam regularly tests recognition of insider trading scenarios and reporting obligations."
  },
  {
    id: "u4_aml_cip",
    unit: "U4",
    unitLabel: "Unit 4: Overview of the Regulatory Framework",
    section: "U4S2",
    sectionLabel: "Business Conduct and Key Rules",
    topic: "AML and Customer Identification Program",
    sieLikely: true,
    question:
      "What is the purpose of a firm’s Customer Identification Program (CIP) under anti-money-laundering rules?",
    answer:
      "The CIP requires firms to collect and verify certain identifying information before opening an account, " +
      "such as name, date of birth, address, and taxpayer identification number, to help prevent money laundering and terrorist financing.",
    hint: "Identify and verify the customer at or before account opening.",
    context:
      "CIP and suspicious activity reporting are common topics in SIE questions about firm obligations."
  },
  {
    id: "u4_firm_element",
    unit: "U4",
    unitLabel: "Unit 4: Overview of the Regulatory Framework",
    section: "U4S2",
    sectionLabel: "Business Conduct and Key Rules",
    topic: "Continuing education – firm element",
    sieLikely: false,
    question:
      "What is the purpose of the firm element of continuing education for registered persons?",
    answer:
      "The firm element requires broker-dealers to design and deliver annual training to covered registered persons " +
      "that addresses firm products, services, and risks, as well as regulatory developments relevant to their duties.",
    hint: "Ongoing training designed by the firm each year.",
    context:
      "This connects to the broader theme of maintaining competence and protecting investors."
  }
];

// Application state
const state = {
  filterType: "all",   // "all", "unit", "section", "review", "sie"
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
  if (filterType === "unit") {
    return FLASHCARDS.filter(c => c.unit === filterValue);
  }
  if (filterType === "section") {
    return FLASHCARDS.filter(c => c.section === filterValue);
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
    return prefix + "All units and sections";
  }
  if (filterType === "sie") {
    return prefix + "SIE exam-likely topics";
  }
  if (filterType === "review") {
    return prefix + "Marked for review";
  }
  if (filterType === "unit") {
    if (filterValue === "U1") return prefix + "Unit 1 – Knowledge of Capital Markets";
    if (filterValue === "U2") return prefix + "Unit 2 – Understanding Products and Risks";
    if (filterValue === "U3") return prefix + "Unit 3 – Trading and Customer Accounts";
    if (filterValue === "U4") return prefix + "Unit 4 – Regulatory Framework";
    return prefix + filterValue;
  }
  if (filterType === "section") {
    const map = {
      U1S1: "Unit 1, Section 1 – Markets and Offerings",
      U1S2: "Unit 1, Section 2 – Market Participants and Regulations",
      U2S1: "Unit 2, Section 1 – Equity and Debt Securities",
      U2S2: "Unit 2, Section 2 – Pooled Investments and Options",
      U2S3: "Unit 2, Section 3 – Investment Risk Concepts",
      U3S1: "Unit 3, Section 1 – Orders, Settlement, and Margin",
      U3S2: "Unit 3, Section 2 – Customer Accounts and Suitability",
      U4S1: "Unit 4, Section 1 – Regulators and Registration",
      U4S2: "Unit 4, Section 2 – Business Conduct and Key Rules"
    };
    return prefix + (map[filterValue] || filterValue);
  }
  return prefix + "All units and sections";
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
  const ctxEl = document.getElementById("cardContext");
  const hintEl = document.getElementById("cardHint");
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
    ctxEl.textContent = "";
    hintEl.textContent = "";
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

  topicEl.textContent = card.unitLabel;
  subtopicEl.textContent = card.sectionLabel + " – " + card.topic;
  qEl.textContent = card.question;
  aEl.textContent = card.answer;
  ctxEl.textContent = card.context || "";
  hintEl.textContent = card.hint ? "Memory tip: " + card.hint : "";

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
